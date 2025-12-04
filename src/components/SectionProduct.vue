<template>
    <section class=" pt-36 pb-32">
        <div class="container w-full max-w-340 px-4 sm:px-6 lg:px-8 mx-auto ">
            <h1 class="text-3xl font-bold text-secondary mb-14">List Produk</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <CardProduct v-for="(product, index) in products" :key="product.id" :image="product.image"
                    :category="product.category" :title="product.title" :price="product.price"
                    @addToCart="handleAddToCart(product)" />
            </div>

        </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CardProduct from './CardProduct.vue';
import { useCartStore } from '@/stores/cart';


const cart = useCartStore();

type Product = {
    id: number;
    category: string;
    title: string;
    price: number;
    image: string;
};

const products = ref<Product[]>([
    {
        id: 1,
        category: 'elektronik',
        title: 'Laptop Gaming',
        price: 15000000,
        image: '/src/assets/laptop.webp',
    },
    {
        id: 2,
        category: 'elektronik',
        title: 'Laptop Ultrabook',
        price: 12000000,
        image: '/src/assets/laptop.webp',
    },
    {
        id: 3,
        category: 'elektronik',
        title: 'Laptop Workstation',
        price: 20000000,
        image: '/src/assets/laptop.webp',
    },
]);



const handleAddToCart = (p: Product) => {
    cart.addToCart({
        id: p.id,
        category: p.category,
        title: p.title,
        price: p.price,
        image: p.image
    })

    console.log("oke");
    
}


</script>
<style scoped></style>