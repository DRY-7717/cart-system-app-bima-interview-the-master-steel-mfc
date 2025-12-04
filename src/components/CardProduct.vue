<template>
    <div class="card rounded-xl overflow-hidden shadow-lg bg-white border border-slate-300">
        <div class="card_header">
            <img src="/src/assets/laptop.webp" class="w-full object-cover object-center" alt="Laptop Gaming">
        </div>
        <div class="card_body py-6 px-4">
            <span
                class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-primary mb-3.5">{{
                    category }}</span>

            <h2 class="font-bold text-secondary text-xl mb-4">{{ title }}</h2>
            <p class="font-bold text-primary text-2xl mb-7">{{ formatPrice(price) }}</p>

            <button @click="emit('addToCart')"
                class="w-full border-0 outline-0 text-white py-3 px-4 bg-primary rounded-lg flex items-center justify-center gap-x-2">
                <div class="box_icon_add_to_cart">
                    <Plus />
                </div>
                <p class="font-semibold">Tambah ke cart</p>

            </button>
        </div>
    </div>
</template>
<script setup lang="ts">

import { Plus } from 'lucide-vue-next';
import { formatPrice } from '../../utils/Helper';



interface Props {
    id?: number
    category?: string
    title?: string
    price?: number | string
    image?: string
}

const props = defineProps<Props>()


const emit = defineEmits<{
    (e: 'addToCart'): void
}>()






</script>
<style scoped></style>