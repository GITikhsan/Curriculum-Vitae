<script setup>
import EducationSection from './components/Education.vue'
import SkillsSection from './components/Skills.vue'
import ProjectsSection from './components/Projects.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="bg-gray-100 font-sans">
    <RouterView />
  </div>
</template>
<style>

body {
  background-color: #ffff;
}
</style>
