<style src="./NotificationHandler.styles.scss" scoped></style>
<template src="./NotificationHandler.template.html"></template>
<script lang="ts">
  import { ref } from 'vue';
  import ModalContent from '~/components/Modal/ModalContent/ModalContent.component.vue'

  const isOpen = ref(false);

  const triggerOpen = (open: boolean, callbackFn?: Function) => {
    isOpen.value = open;

    if (callbackFn) {
      callbackFn();
    }
  }

  export default {
    name: 'NotificationHandler',
    components: { ModalContent },
    data() {
      return {
        isOpen
      }
    },
    methods: {
      triggerOpen,
    }
  }
</script>
