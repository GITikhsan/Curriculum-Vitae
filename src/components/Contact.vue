<script setup>
import SectionTitle from './SectionTitle.vue'
</script>
<template>
  <footer id="kontak" class="py-16 md:py-20 bg-gray-800 text-white">
    <div class="container mx-auto px-4 sm:px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
        Jangan ragu untuk terhubung atau bertanya.
      </p>
      <a
        href="mailto:06ikhsanuddinaf@gmail.com"
        class="bg-blue-600 text-white font-bold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mb-8 sm:mb-12 shadow-md"
      >
        Kirim Email
      </a>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        <a
          href="https://github.com/GITikhsan"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300 text-base sm:text-lg"
        >
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300 text-base sm:text-lg"
        >
          LinkedIn
        </a>
      </div>
      <p class="text-gray-500 text-xs sm:text-sm">
        &copy; {{ new Date().getFullYear() }} Ikhsanuddin Ahmad Fauzi. Dibuat dengan cinta
      </p>
    </div>
  </footer>
</template>
