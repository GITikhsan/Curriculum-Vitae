<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error('Gagal mengambil data proyek:', error);
  }
});
</script>

<template>
  <section id="proyek" class="py-12 bg-white">
    <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
      <SectionTitle title="Featured Projects" />
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col hover:-translate-y-2 transition-transform duration-300"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="w-full h-48 sm:h-56 object-cover"
          />
          <div class="flex-1 flex flex-col p-5">
            <h3 class="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4 text-sm sm:text-base">{{ project.description }}</p>
            <div class="mb-4 flex flex-wrap gap-2">
              <span
                v-for="t in project.tech"
                :key="t"
                class="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full"
              >
                {{ t }}
              </span>
            </div>
            <div class="mt-auto flex items-center gap-2 text-sm">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 font-semibold hover:text-green-600 hover:underline transition-colors"
              >
                Frontend
              </a>
              <span class="text-gray-400">|</span>
              <a
                :href="project.link2"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 font-semibold hover:text-red-600 hover:underline transition-colors"
              >
                Backend
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
