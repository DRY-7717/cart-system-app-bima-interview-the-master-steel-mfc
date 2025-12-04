<template>

    <section class=" py-28">
        <div class="container w-full max-w-340 px-4 sm:px-6 lg:px-8 mx-auto ">
            <div class="illustration_box w-[500px] mx-auto">
                <img src="/src/assets/checkout_success.svg" alt="Checkout Success Illustration"
                    class="w-full h-full object-cover object-center">
            </div>
            <div class="text_content text-center mt-10">
                <h1 class="font-bold text-3xl text-secondary mb-4">Checkout Berhasil!</h1>
                <p class="text-slate-500 text-lg">Terima kasih telah berbelanja di Computer Store. Pesanan Anda sedang
                    diproses dan akan segera dikirimkan.</p>
                <router-link :to="{ name: 'home' }"
                    class="inline-block mt-8 bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/80 transition">
                    Kembali ke Beranda
                </router-link>
            </div>
        </div>
    </section>


</template>



<script setup lang="ts">

</script>


<style scoped></style>