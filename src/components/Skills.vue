<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const skills = ref([])
onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/skills')
        skills.value = response.data
    } catch (error) {
        console.error(error)
    }
})
</script>

<template>
    <section id="skill" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Expertise and Technology" />
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
            >
                <div
                    
                    v-for="skill in skills"
                    :key="skill.name"
                    class="bg-white p-5 sm:p-6 rounded-xl shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                <img class ="w-16 h-16 sm:w-20 sm:h-20 mb-4" :src="skill.image" :alt="skill.image" />
                    <h3 class="text-lg sm:text-xl font-bold text-gray-800 break-words">
                        {{ skill.name }}
                    </h3>
                    <p class="text-gray-500 mt-2 text-sm sm:text-base">
                        {{ skill.level }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
