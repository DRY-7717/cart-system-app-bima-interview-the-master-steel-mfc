<template>
    <header class=" w-full fixed z-40 top-0 left-0 py-5 border-b border-slate-200 bg-[#f4fffb]">
        <nav class="w-full max-w-340 px-4 sm:px-6 lg:px-8 mx-auto">
            <div class="w-full flex items-center justify-between">
                <div class="logo flex items-center gap-x-2 sm:gap-x-3">
                    <div
                        class="logo_icon text-white font-bold flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-sm sm:text-base">
                        C</div>
                    <div class="logo_name font-bold text-secondary sm:text-xl">
                        Computer Store
                    </div>
                </div>
                <div class="box_cart bg-slate-200 py-2 px-5 rounded-xl relative cursor-pointer" @click="toggleCanvas">
                    <div class="flex items-center gap-x-2">
                        <div class="box_icon_cart">
                            <ShoppingBasket class="text-slate-600" />
                        </div>
                        <p class="title_cart text-slate-500 sm:text-lg ">Cart</p>
                        <div v-show="cart.totalItems != 0"
                            class="absolute -top-2.5 sm:-top-2.5 -right-2 flex items-center justify-center text-center h-6 sm:h-7 px-2 sm:px-2.5 box_total_cart  bg-primary rounded-full text-xs sm:text-sm text-white">
                            <p>{{ cart.totalItems }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>



    <OffCanvas :is-active-canvas="isActiveCanvas" @sendIsActiveCanvas="handleIsActiveCanvas" />





</template>
<script setup lang="ts">
import { ref } from 'vue';
import { ShoppingBasket, X } from 'lucide-vue-next';
import OffCanvas from '@/components/OffCanvas.vue';
import { useCartStore } from '@/stores/cart';



const cart = useCartStore();


const isActiveCanvas = ref<boolean>(false);


const toggleCanvas = (): void => {
    isActiveCanvas.value = !isActiveCanvas.value;
}

const handleIsActiveCanvas = (value: boolean): void => {
    isActiveCanvas.value = value
}




</script>
<style lang="">

</style>