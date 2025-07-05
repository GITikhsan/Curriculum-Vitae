<script setup>
const items = [
  { to: '/', name: 'Home' },
  { to: '/skills', name: 'Skills' },
  { to: '/project', name: 'Projects' },
  { to: '/contact', name: 'Contact' } 
]
</script>

<template>
  <div class="min-h-screen flex flex-col text-[1.1rem]">
    <!-- Header -->
    <header class="flex flex-col md:flex-row md:justify-between md:items-center px-6 md:px-16 py-6 md:py-8 gap-4 md:gap-0">
      <div class="flex flex-col md:flex-row md:items-center md:space-x-3 text-center md:text-left">
        <div class="w-3 h-3 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
        <div>
          <h1 class="font-bold text-2xl">Ikhsanuddin Ahmad Fauzi</h1>
          <span class="text-base text-gray-500 block md:inline">/ PROJECT MANAGER</span>
        </div>
      </div>
      <nav class="flex justify-center md:justify-end flex-wrap gap-4  text-gray-600">
        <router-link
          v-for="item in items"
          :key="item.name"
          :to="item.to"
          class="hover:text-blue-600"
        >
          {{ item.name }}
        </router-link>
      </nav>
    </header>

    <!-- Main Slot -->
    <main class="flex-grow px-4 md:px-16">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 px-6 md:px-16 py-10 text-base text-gray-600 text-center md:text-left">
      <p>
        © 2025 by Ikhsanuddin Ahmad Fauzi. <br />
        Powered and secured by <a href="#" class="underline">Wix</a>
      </p>
      <div>
        <p><span class="font-semibold text-black">Call</span><br />0812-3346-6631</p>
      </div>
      <div>
        <p><span class="font-semibold text-black">Write</span><br />06ikhsanuddinaf@gmail.com</p>
      </div>
      <div class="flex justify-center md:justify-start space-x-6 text-xl">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </footer>
  </div>
</template>


<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
