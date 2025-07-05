<template>
  <section class="flex flex-col md:flex-row px-4 md:px-20 py-16 md:py-24 gap-10 md:gap-16 bg-[#e5d9cd]">
    <!-- Left Card -->
    <div class="relative w-full md:w-[40%] flex flex-col items-center">
      <img src="/public/images/Me.jpg" alt="Ikhsanuddin Ahmad Fauzi" class="rounded-full w-64 md:w-80 h-64 md:h-80 object-cover" />
      <h2 class="font-bold text-lg md:text-xl mt-6 leading-tight text-center">
        Ikhsanuddin Ahmad <br /> Fauzi
      </h2>
      <div class="w-10 h-1 bg-blue-600 my-3"></div>
      <p class="text-xs md:text-sm tracking-widest text-gray-600 text-center">PROJECT MANAGER</p>
      <div class="flex justify-center space-x-4 md:space-x-6 mt-6 text-lg md:text-xl">
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      </div>
    </div>

    <!-- Right Content -->
    <div class="w-full md:w-[60%] flex flex-col justify-center scale-[1] md:scale-[1.1] text-center md:text-left">
      <h1 class="text-4xl md:text-7xl font-bold mb-4 md:mb-6">Hello</h1>
      <p class="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Here's who I am & what I do</p>
      <div class="flex justify-center md:justify-start space-x-4 md:space-x-6 mb-6 md:mb-8">
        <router-link to="/skills" class="bg-blue-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base">SKILLS</router-link>
        <router-link to="/project" class="border border-gray-600 px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base">PROJECTS</router-link>
      </div>
      <p class="text-sm md:text-base text-gray-600 mb-3 leading-relaxed">
        I'm a paragraph. Click here to add your own text and edit me...
      </p>
      <p class="text-sm md:text-base text-gray-600 leading-relaxed">
        I'm a great place for you to tell a story and let your users know a little more about you.
      </p>
    </div>
  </section>
</template>
