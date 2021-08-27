<template>
  <div class="text-white flex flex-col gap-y-8">
    <p>
      Welcome to my portfolio site. I use this site mainly as a launchpad to
      find me in other places like Medium and Twitter.
    </p>
    <p>
      If you're interesting in working with me on a project, feel free to get in
      touch @ <a :href="mailto" class="underline">mcnees.michael[@]gmail.com</a>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    mailto() {
      const email = 'mcnees.michael@gmail.com'
      return `mailto:${email}`
    }
  }
}
</script>
