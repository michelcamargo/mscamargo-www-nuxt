<style src="./HomePage.styles.scss"></style>
<template src="./HomePage.template.html"></template>
<script lang="ts">
  import SocialReferences from "~/components/SocialReferences/SocialReferences.component.vue";
  import ExampleForm from "~/components/ExampleForm/ExampleForm.component.vue";

  const callPlugin = (userId: number) => {
    const nuxtApp = useNuxtApp();
    nuxtApp.$greetings(userId);
  }

  export default {
    name: 'HomePage',
    components: {
      SocialReferences, 'example-form': ExampleForm,
    },
    data() {
      return {
        callPlugin
      }
    }
  }
</script>
