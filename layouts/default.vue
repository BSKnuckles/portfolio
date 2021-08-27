<template>
  <div
    class="
      w-screen
      h-screen
      brand-gradient
      py-8
      px-12
      flex flex-col
      bg-gradient-to-br
      from-sky-600
      to-sky-900
    "
  >
    <header class="md:flex justify-between items-start">
      <div class="mb-6">
        <h1 class="brand-font text-white text-4xl text-center md:text-left">
          Michael <span class="inline md:block">McNees</span>
        </h1>
        <p class="text-white text-center md:text-left">
          Fullstack Software Engineer
        </p>
      </div>
      <nav class="flex justify-center">
        <ul class="flex gap-x-12">
          <li
            :class="[
              'flex brand-font text-white',
              $route.name === 'index' ? 'underline' : null
            ]"
          >
            <NuxtLink to="/" class="h-full w-full hover:mt-1">Home</NuxtLink>
          </li>
          <li
            :class="[
              'flex brand-font text-white',
              $route.name === 'tech' ? 'underline' : null
            ]"
          >
            <NuxtLink to="/tech" class="h-full w-full hover:mt-1"
              >Tech</NuxtLink
            >
          </li>
          <li
            :class="[
              'flex brand-font text-white',
              $route.name === 'about' ? 'underline' : null
            ]"
          >
            <NuxtLink to="/about" class="h-full w-full hover:mt-1"
              >About</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </header>
    <main
      class="
        flex-grow flex
        justify-center
        w-full
        my-8
        overflow-y-auto
        max-w-prose
        mx-auto
        pr-4
      "
    >
      <Nuxt />
    </main>
    <footer class="flex justify-between items-center">
      <div class="flex w-full gap-x-6 justify-center md:hidden">
        <a
          href="https://blog.mcnees.me/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-lg flex items-center gap-x-2 hover:underline"
        >
          <MediumIcon class="h-8 w-8 inline" />
          <span class="sr-only">Medium // Blog</span>
        </a>
        <a
          href="https://twitter.com/bsknuckles"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-lg flex items-center gap-x-2 hover:underline"
        >
          <TwitterIcon class="h-8 w-8 inline" />
          <span class="sr-only">Twitter</span>
        </a>
        <a
          href="https://www.linkedin.com/in/michaelmcnees/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-lg flex items-center gap-x-2 hover:underline"
        >
          <LinkedInIcon class="h-8 w-8 inline" />
          <span class="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://www.dropbox.com/s/874z72ozftqsikf/MichaelMcNees_Resume_2020.pdf?dl=0"
          class="text-white text-lg flex items-center gap-x-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PdfIcon class="w-8 h-8 inline" />
          <span class="sr-only">Resume</span>
        </a>
      </div>
      <div class="gap-x-12 hidden md:flex">
        <a
          href="https://blog.mcnees.me/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-lg flex items-center gap-x-2 hover:underline"
        >
          <MediumIcon class="h-8 w-8 inline" />
          Medium // Blog
        </a>
        <a
          href="https://twitter.com/bsknuckles"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-lg flex items-center gap-x-2 hover:underline"
        >
          <TwitterIcon class="h-8 w-8 inline" />
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/michaelmcnees/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-white text-lg flex items-center gap-x-2 hover:underline"
        >
          <LinkedInIcon class="h-8 w-8 inline" />
          LinkedIn
        </a>
      </div>
      <div class="hidden md:block">
        <a
          href="https://www.dropbox.com/s/874z72ozftqsikf/MichaelMcNees_Resume_2020.pdf?dl=0"
          class="text-white text-lg flex items-center gap-x-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PdfIcon class="w-8 h-8 inline" />
          Resume
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import PdfIcon from '@/components/icons/PdfIcon'
import TwitterIcon from '@/components/icons/TwitterIcon'
import LinkedInIcon from '@/components/icons/LinkedInIcon'
import MediumIcon from '@/components/icons/MediumIcon.vue'

export default defineComponent({
  components: {
    PdfIcon,
    MediumIcon,
    TwitterIcon,
    LinkedInIcon
  },
  setup() {}
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
/* .brand-gradient {
  background: rgb(3, 105, 161);
  background: linear-gradient(
    122deg,
    rgba(3, 105, 161, 1) 0%,
    rgba(12, 74, 110, 1) 100%
  );
} */
.brand-font {
  font-family: 'Press Start 2P', monospace;
}
</style>
