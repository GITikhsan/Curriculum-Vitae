<script setup>
import SectionTitle from '../SectionTitle.vue';
</script>

<template>
    <footer id="kontak" class="py-20 bg-white text-white bg-[#e5d9cd]">
        <div class="container mx-auto px-6 text-center">
            <SectionTitle title="Hubungi Saya" />
            <p class="text-xl text-gray-500 mb-8">
                Jangan ragu untuk terhubung atau bertanya.
            </p>

            <a
                href="mailto:06ikhsanuddinaf@gmail.com"
                class="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-12"
            >
                Kirim Email
            </a>

            <div class="flex justify-center space-x-6 mb-8">
                <a
                    href="https://github.com/GITikhsan"
                    target="_blank"
                    class="text-gray-400 hover:text-white transition-colors duration-300"
                >
                    GitHub
                </a>
                <a
                    href="#"
                    target="_blank"
                    class="text-gray-400 hover:text-white transition-colors duration-300"
                >
                    LinkedIn
                </a>
            </div>

            <p class="text-gray-500">
                &copy; {{ new Date().getFullYear() }} <i>Ikhsanuddin Ahmad Fauzi</i>.
            </p>
        </div>
    </footer>
</template>