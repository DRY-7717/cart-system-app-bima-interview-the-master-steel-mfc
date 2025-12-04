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
import headphone from '@/assets/headphone.webp';
import keyboard from '@/assets/keyboard.webp';
import laptop from '@/assets/laptop.webp';
import monitor from '@/assets/monitor.webp';
import mouse from '@/assets/mouse.jpeg';
import ssd from '@/assets/ssd.jpg';


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
        image: laptop,
    },
    {
        id: 2,
        category: 'audio',
        title: 'Headphone Bluetooth',
        price: 200000,
        image: headphone,
    },
    {
        id: 3,
        category: 'aksesoris',
        title: 'Keyboard Mechanical',
        price: 500000,
        image: keyboard,
    },
    {
        id: 4,
        category: 'elektronik',
        title: 'Monitor 24 Inch',
        price: 2000000,
        image: monitor,
    },
    {
        id: 5,
        category: 'aksesoris',
        title: 'Mouse Wireless',
        price: 100000,
        image: mouse,
    },
    {
        id: 6,
        category: 'elektronik',
        title: 'SSD 1TB',
        price: 1200000,
        image: ssd,
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
}


</script>
<style scoped></style>