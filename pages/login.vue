<script lang="ts">
  import LoginPage from "~/domains/LoginPage/LoginPage.component.vue";

  export default {
    name: 'LoginPageWrapper',
    components: {
      LoginPage,
    },
    beforeMount() {
      definePageMeta({
        layout: 'minified',
        middleware: 'auth-global-middleware',
      })
    }
  }
</script>

<template>
  <login-page />
</template>
