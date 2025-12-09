import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export type CartItem = {
    id: number
    category: string
    title: string
    price: number
    image: string
    quantity: number
}

const STORAGE_KEY = 'cart-items'

export const useCartStore = defineStore('cart', () => {

    const items = ref<CartItem[]>(loadFromStorage())


    const totalItems = computed(() =>
        items.value.reduce((t, item) => t + item.quantity, 0)
    )


    const totalPrice = computed(() =>
        items.value.reduce((t, item) => t + item.price * item.quantity, 0)
    )


    function addToCart(product: Omit<CartItem, 'quantity'>) {
        const existing = items.value.find(item => item.id === product.id)

        if (existing) {
            existing.quantity++
        } else {
            items.value.push({ ...product, quantity: 1 })
        }
    }

    function removeFromCart(id: number) {
        items.value = items.value.filter(item => item.id !== id)
    }

    function clearCart() {
        items.value = []
    }

    function updateQuantity(id: number, quantity: number) {
        const item = items.value.find(item => item.id === id)

        if (item) {
            if (quantity <= 0) {
                removeFromCart(id)
            } else {
                item.quantity = quantity
            }
        }
    }

    function incrementQuantity(id: number) {
        const item = items.value.find(item => item.id === id)
        if (item) {
            item.quantity++
        }
    }

    function decrementQuantity(id: number) {
        const item = items.value.find(item => item.id === id)
        if (item) {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                removeFromCart(id)
            }
        }
    }


    function loadFromStorage(): CartItem[] {
        try {
            const stored = localStorage.getItem(STORAGE_KEY)
            return stored ? JSON.parse(stored) : []
        } catch (error) {
            console.error('Error loading cart from localStorage:', error)
            return []
        }
    }

    function saveToStorage() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value))
        } catch (error) {
            console.error('Error saving cart to localStorage:', error)
        }
    }


    watch(items, saveToStorage, { deep: true })

    return {
        items,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        incrementQuantity,
        decrementQuantity
    }
})