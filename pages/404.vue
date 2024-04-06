<script lang="ts">
  import NotFoundPage from "~/domains/NotFoundPage/NotFoundPage.component.vue";

  export default {
    name: 'NotFoundPageWrapper',
    components: {
      'not-found-page': NotFoundPage,
    }
  }
</script>

<template>
  <not-found-page />
</template>
