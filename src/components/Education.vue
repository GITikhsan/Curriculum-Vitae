<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data pendidikan:', error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="relative mt-12">
        <!-- Timeline line (hidden on mobile) -->
        <div
          class="hidden md:block absolute h-full border-r-2 border-gray-300 top-0"
          style="left: 50%; transform: translateX(-50%);">
        </div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-12 flex flex-col md:flex-row md:justify-between md:items-center w-full"
        >
          <!-- Left side (even index) -->
          <template v-if="index % 2 === 0">
            <div class="md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
            <div class="flex justify-center md:w-1/2 order-1 md:order-2 mb-4 md:mb-0">
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10 border-4 border-white shadow-md"></div>
            </div>
          </template>
          <!-- Right side (odd index) -->
          <template v-else>
            <div class="flex justify-center md:w-1/2 order-1 mb-4 md:mb-0">
              <div class="w-4 h-4 bg-blue-600 rounded-full z-10 border-4 border-white shadow-md"></div>
            </div>
            <div class="md:w-1/2 md:pl-8 md:text-left order-2">
              <p class="font-semibold text-blue-600">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-gray-800">{{ edu.institution }}</h3>
              <p class="text-gray-600">{{ edu.major }}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (max-width: 767px) {
  /* Hide timeline line on mobile */
  .timeline-line {
    display: none;
  }
}
</style>
