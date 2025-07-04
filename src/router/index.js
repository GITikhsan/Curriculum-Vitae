import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layout/MainLayout.vue'

import Home from '@/views/Home.vue'
import Contact from '@/components/SUB-CV/Contact.vue'
import Project from '@/components/SUB-CV/Project.vue'  
import Resume from '@/components/SUB-CV/Resume.vue'  

// const routes = [
//   {path: '', name: 'Home', component: Home },
//       {path: '/contact', name: 'Contact', component: Contact },
//       {path: '/project', name: 'Project', component: Project },
//       {path: '/resume', name: 'Resume', component: Resume },
// ]
const routes = [
  {
    path: '/',component: MainLayout,children: [
      {path: '', name: 'Home', component: Home },
      {path: 'contact', name: 'Contact', component: Contact },
      {path: 'project', name: 'Project', component: Project },
      {path: 'resume', name: 'Resume', component: Resume },
      

    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router