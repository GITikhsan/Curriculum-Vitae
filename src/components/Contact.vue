<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gray-50 text-black py-12 px-6">
    <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 text-center">
      <div>
        <h3 class="font-bold mb-1">Call</h3>
        <p class="text-gray-700">0812-3346-6631</p>
      </div>

      <!-- Write -->
      <div>
        <h3 class="font-bold mb-1">Write</h3>
        <a href="mailto:06ikhsanuddinaf@gmail.com"><i class="hover:text-blue-600 text-gray-700">06ikhsanuddinaf@gmail.com</i></a>
      </div>

      <!-- Follow -->
      <div>
        <h3 class="font-bold mb-1">Follow</h3>
        <div class="flex justify-center gap-4 text-xl mt-1">
          <!-- <a href="#" class="hover:text-blue-500"><i class="fab fa-facebook-f"></i></a> -->
          <a href="https://github.com/GITikhsan" class="hover:text-blue-600"><i class="fab fa-github"></i></a>
          <!-- <a href="#" class="hover:text-blue-500"><i class="fab fa-linkedin-in"></i></a> -->
          <a href="https://www.instagram.com/ikhsan1_hbjsz?igsh=OWpsNXVpdndhbWpv" class="hover:text-blue-600"><i class="fab fa-instagram"></i></a>
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
