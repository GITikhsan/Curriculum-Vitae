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
    <header class="flex justify-between items-center px-16 py-8">
      <div class="flex items-center space-x-3">
        <div class="w-3 h-3 bg-blue-600 rounded-full"></div>
        <h1 class="font-bold text-2xl">Ikhsanuddin Ahmad Fauzi</h1>
        <span class="text-base text-gray-500">/ PROJECT MANAGER</span>
      </div>
      <nav class="space-x-8 text-base text-gray-600">
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
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="flex justify-between items-center px-16 py-10 text-base text-gray-600">
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
      <div class="flex space-x-6 text-xl">
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
