<template>
  <header class="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">Ikhsanuddin Ahmad Fauzi</div>
      <!-- Hamburger Button (Mobile) -->
      <button
        class="md:hidden flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-blue-500 focus:outline-none"
        @click="isOpen = !isOpen"
        aria-label="Toggle navigation"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <a
            href="#profil"
            class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300"
            >Profil</a
          >
        </li>
        <li>
          <a
            href="#pendidikan"
            class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300"
            >Pendidikan</a
          >
        </li>
        <li>
          <a
            href="#skill"
            class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300"
            >Skill</a
          >
        </li>
        <li>
          <a
            href="#proyek"
            class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300"
            >Proyek</a
          >
        </li>
        <li>
          <a
            href="#kontak"
            class="text-gray-600 hover:text-blue-500 transform hover:-translate-y-0.5 transition-all duration-300"
            >Kontak</a
          >
        </li>
      </ul>
      <!-- Mobile Menu -->
      <transition name="fade">
        <ul
          v-if="isOpen"
          class="absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-2 py-4 px-6 md:hidden z-50"
        >
          <li>
            <a
              href="#profil"
              class="block text-gray-600 hover:text-blue-500 py-2 transition-all duration-300"
              @click="isOpen = false"
              >Profil</a
            >
          </li>
          <li>
            <a
              href="#pendidikan"
              class="block text-gray-600 hover:text-blue-500 py-2 transition-all duration-300"
              @click="isOpen = false"
              >Pendidikan</a
            >
          </li>
          <li>
            <a
              href="#skill"
              class="block text-gray-600 hover:text-blue-500 py-2 transition-all duration-300"
              @click="isOpen = false"
              >Skill</a
            >
          </li>
          <li>
            <a
              href="#proyek"
              class="block text-gray-600 hover:text-blue-500 py-2 transition-all duration-300"
              @click="isOpen = false"
              >Proyek</a
            >
          </li>
          <li>
            <a
              href="#kontak"
              class="block text-gray-600 hover:text-blue-500 py-2 transition-all duration-300"
              @click="isOpen = false"
              >Kontak</a
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

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
