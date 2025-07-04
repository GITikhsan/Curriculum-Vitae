<template>
  <section class="flex px-20 py-24 gap-16">
    <!-- Left Card -->
    <div class="relative w-[40%]">
      <div class="absolute bg-[#e5d9cd] h-full w-full -left-16 -top-16 z-0 rounded-md"></div>
      <div class="relative bg-[#f6f0eb] w-96 p-8 shadow-2xl z-10 scale-110">
        <img src="https://via.placeholder.com/150" alt="Maya Nelson" class="rounded-full w-40 h-40 mx-auto object-cover" />
        <h2 class="text-center font-bold text-xl mt-6 leading-tight">Maya <br /> Nelson</h2>
        <div class="w-10 h-1 bg-blue-600 mx-auto my-3"></div>
        <p class="text-center text-sm tracking-widest text-gray-600">PROJECT MANAGER</p>
        <div class="flex justify-center space-x-6 mt-6 text-xl">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>

    <!-- Right Content -->
    <div class="w-[60%] flex flex-col justify-center scale-[1.1]">
      <h1 class="text-7xl font-bold mb-6">Hello</h1>
      <p class="text-2xl font-semibold mb-6">Here's who I am & what I do</p>
      <div class="flex space-x-6 mb-8">
        <router-link to="/resume" class="bg-blue-600 text-white px-6 py-3 rounded-full text-base">RESUME</router-link>
        <router-link to="/project" class="border border-gray-600 px-6 py-3 rounded-full text-base">PROJECTS</router-link>
      </div>
      <p class="text-base text-gray-600 mb-4 leading-relaxed">
        I'm a paragraph. Click here to add your own text and edit me...
      </p>
      <p class="text-base text-gray-600 leading-relaxed">
        I'm a great place for you to tell a story and let your users know a little more about you.
      </p>
    </div>
  </section>
</template>
