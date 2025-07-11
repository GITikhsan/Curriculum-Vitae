<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <header class="bg-white/70 shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo & Title -->
      <div class="flex items-center space-x-2">
        <div class="w-4 h-4 bg-blue-600"></div>
        <div>
          <h1 class="text-xl md:text-2xl font-bold text-gray-900 leading-none">Ikhsanuddin Ahmad Fauzi</h1>
          <p class="text-sm text-gray-700 md:hidden">WEB AND MOBILE DEV</p>
        </div>
      </div>

      <!-- Hamburger Button (Mobile) -->
      <button
        class="md:hidden text-blue-600 focus:outline-none"
        @click="isOpen = !isOpen"
        aria-label="Toggle navigation"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!isOpen"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6 items-center">
        <li><a href="#profil" class="hover:text-blue-600 text-gray-800 font-medium">ABOUT ME</a></li>
        <li><a href="#pendidikan" class="hover:text-blue-600 text-gray-800 font-medium">EDUCATION</a></li>
        <li><a href="#skill" class="hover:text-blue-600 text-gray-800 font-medium">SKILLS</a></li>
        <li><a href="#proyek" class="hover:text-blue-600 text-gray-800 font-medium">PROJECTS</a></li>
        <li><a href="#kontak" class="hover:text-blue-600 text-gray-800 font-medium">CONTACT</a></li>
      </ul>

      <!-- Mobile Fullscreen Menu -->
      <transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-[#fef9f6] z-50 flex flex-col items-center justify-center space-y-6 text-center"
        >
          <button class="absolute top-5 right-5 text-black text-3xl" @click="isOpen = false">×</button>
          <a href="#profil" class="text-blue-600 text-xl font-bold" @click="isOpen = false">ABOUT ME</a>
          <a href="#pendidikan" class="text-black text-xl font-bold" @click="isOpen = false">EDUCATION</a>
          <a href="#skill" class="text-black text-xl font-bold" @click="isOpen = false">SKILLS</a>
          <a href="#proyek" class="text-black text-xl font-bold" @click="isOpen = false">PROJECTS</a>
          <a href="#kontak" class="text-black text-xl font-bold" @click="isOpen = false">CONTACT</a>
        </div>
      </transition>
    </nav>
  </header>
</template>
