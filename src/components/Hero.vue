<template>
  <section
    id="profil"
    class="container mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-0"
  >
    <div class="w-full md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-slidein-left text-center md:text-left"
        style="animation-delay: 200ms"
      >
        Hello, I am <span class="text-blue-600">Ikhsanuddin Ahmad Fauzi</span>
      </h1>
      <p
        class="text-base sm:text-lg md:text-xl text-gray-600 mb-8 animate-slide-in-left text-center md:text-left"
        style="animation-delay: 400ms"
      >
       Informatics Engineering student who is passionate about Mobile development, web development and interface design.
      </p>
      <a
        href="https://api.whatsapp.com/send/?phone=6281233466631&text&type=phone_number&app_absent=0"
        class="bg-blue-600 text-white font-bold py-2 sm:py-3 px-5 sm:px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 inline-block animate-slide-in-left"
        style="animation-delay: 600ms"
      >
        Contact me
      </a>
    </div>
    <div class="w-full md:w-1/2 flex justify-center animate-slide-in-right">
      <img
        src="/public/images/Me.jpg"
        alt="Foto Profil"
        class="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
      />
    </div>
  </section>
</template>
