<style src="./HomePage.styles.scss"></style>
<template src="./HomePage.template.html"></template>
<script lang="ts">
  import SocialReferences from "~/components/SocialReferences/SocialReferences.component.vue";

  const callPlugin = (userId: number) => {
    const nuxtApp = useNuxtApp();
    nuxtApp.$greetings(userId);
  }

  export default {
    name: 'HomePage',
    components: {
      SocialReferences,
    },
    data() {
      return {
        callPlugin
      }
    }
  }
</script>
