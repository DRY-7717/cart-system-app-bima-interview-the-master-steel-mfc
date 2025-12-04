<template>
    <div class="offcanvas w-full sm:w-[400px] lg:w-[450px] h-full  bg-[#f4fffb]  fixed top-0 right-0 z-50 transition-all duration-300 ease-in-out"
        :class="[isActiveCanvas ? 'translate-x-0' : 'translate-x-114']">
        <div class="w-full h-full relative ">
            <div class="offcanvas_header p-[27px] bg-primary text-white flex items-center justify-between">
                <div class="title_offcanvas flex items-center gap-x-2">
                    <div class="box_icon_header_offcanvas">
                        <ShoppingBasket :size="30" />
                    </div>
                    <h1 class="font-bold text-lg sm:text-xl">Keranjang Belanja</h1>
                </div>
                <X :size="28" @click="sendIsActiveCanvas" class="cursor-pointer" />

            </div>
            <div class="offcanvas_body p-6 h-[calc(100%-33%)] overflow-y-auto">

                <div v-if="cart.totalItems != 0">
                    <div v-for="(item, index) in cart.items" :key="index"
                        class="item_cart w-full p-3 rounded-lg bg-slate-200 mb-3">
                        <div class="flex gap-x-4">
                            <div class="box_image_product w-24 h-24 rounded-lg overflow-hidden">
                                <img :src="item.image" :alt="item.title"
                                    class="w-full h-full object-cover object-center">
                            </div>
                            <div class="info_product flex-1 ">
                                <h2 class="font-bold text-secondary mb-1">{{ item.title }}</h2>
                                <p class="text-primary font-semibold text-lg mb-2">{{ formatPrice(item.price) }}</p>
                                <div class="quantity_control w-full flex items-center justify-between">
                                    <div class="box_incr_decr flex items-center gap-x-3 ">
                                        <button @click="cart.decrementQuantity(item.id)"
                                            class="w-6 h-6  border-0 outline-0 bg-primary text-white rounded flex items-center justify-center text-xl font-bold">-</button>
                                        <p class="font-medium text-secondary text-lg">{{ item.quantity }}</p>
                                        <button @click="cart.incrementQuantity(item.id)"
                                            class="w-6 h-6  border-0 outline-0 bg-primary text-white rounded flex items-center justify-center text-xl font-bold">+</button>
                                    </div>
                                    <Trash2 :size="23" class=" text-red-600" @click="cart.removeFromCart(item.id)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div v-else>
                    <ShoppingBasket :size="100" class="mx-auto text-slate-500 mt-52 mb-5" />
                    <p class="text-center text-slate-500 font-bold text-xl">Keranjang belanja masih kosong.</p>
                </div>
            </div>
            <div class="offcanvas_footer p-6 bg-[#f4fffb] border-t border-slate-300 absolute bottom-0 left-0 w-full">
                <div class="w-full flex items-center justify-between mb-4">
                    <p class="font-medium text-secondary text-lg">Total Harga</p>
                    <p class="font-bold text-primary text-2xl">{{ formatPrice(cart.totalPrice) }}</p>
                </div>
                <button
                    class="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-x-2 mb-3">
                    <div class="box_icon_checkout">
                        <ShoppingBasket :size="20" />
                    </div>
                    <p>Checkout Sekarang</p>
                </button>
                <button @click="cart.clearCart"
                    class="w-full bg-slate-500 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-x-2">
                    <div class="box_icon_checkout">
                        <Trash2 :size="20" />
                    </div>
                    <p>Kosongkan Keranjang</p>
                </button>
            </div>
        </div>
    </div>




    <div class="overlay fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 transition-all duration-300 ease-in-out"
        :class="[isActiveCanvas ? 'block' : 'hidden']" @click="sendIsActiveCanvas"></div>
</template>
<script setup lang="ts">
import { ShoppingBasket, X, Trash2 } from 'lucide-vue-next';
import { formatPrice } from '../../utils/Helper';
import { useCartStore } from '@/stores/cart';


const cart = useCartStore();

interface Props {
    isActiveCanvas?: boolean
}

const props = defineProps<Props>()


const emit = defineEmits<{
    (e: 'sendIsActiveCanvas', value: boolean): void
}>()


const sendIsActiveCanvas = (): void => {
    const newValue = !props.isActiveCanvas
    emit('sendIsActiveCanvas', newValue)
}




</script>
<style scoped></style>