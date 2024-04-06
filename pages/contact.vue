<script lang="ts">
  import ContactPage from "~/domains/ContactPage/ContactPage.component.vue";

  export default {
    name: 'ContactPageWrapper',
    components: {
      ContactPage,
    },
    beforeMount() {
      definePageMeta({
        middleware: 'auth-global-middleware',
      })
    }
  }
</script>

<template>
  <contact-page />
</template>
