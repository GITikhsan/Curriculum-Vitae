<!-- <script setup>
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
</template> -->


<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white text-black py-12 px-6">
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 text-center">
      <div>
        <h3 class="font-bold mb-1">Call</h3>
        <p class="text-gray-700">0812-3346-6631</p>
      </div>

      <!-- Write -->
      <div>
        <h3 class="font-bold mb-1">Write</h3>
        <a href="mailto:06ikhsanuddinaf@gmail.com"><i class="text-gray-700">06ikhsanuddinaf@gmail.com</i></a>
      </div>

      <!-- Follow -->
      <div>
        <h3 class="font-bold mb-1">Follow</h3>
        <div class="flex justify-center gap-4 text-xl mt-1">
          <!-- <a href="#" class="hover:text-blue-500"><i class="fab fa-facebook-f"></i></a> -->
          <a href="https://github.com/GITikhsan" class="hover:text-blue-500"><i class="fab fa-github"></i></a>
          <!-- <a href="#" class="hover:text-blue-500"><i class="fab fa-linkedin-in"></i></a> -->
          <a href="https://www.instagram.com/ikhsan1_hbjsz?igsh=OWpsNXVpdndhbWpv" class="hover:text-blue-500"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-10 text-center text-sm text-gray-700">
      <p>&copy; {{ currentYear }} by Ikhsanuddin Ahmad Fauzi.</p>
      <p>
        Powered and secured by
        <a href="https://github.com/GITikhsan" target="_blank" class="underline hover:text-blue-600">GITikhsan</a>
      </p>
    </div>
  </footer>
</template>
