<style src="./ContactPage.styles.scss"></style>
<template src="./ContactPage.template.html"></template>
<script lang="ts">
  import ContactForm from "~/components/ContactForm/ContactForm.component.vue";

  const contactSubmitHandler = (form: any): void => {
    const formValues = toRaw(form);
    console.log('form', formValues);
  }

  export default {
    name: 'ContactPage',
    components: { ContactForm },
    methods: {
      contactSubmitHandler
    }
  }
</script>
