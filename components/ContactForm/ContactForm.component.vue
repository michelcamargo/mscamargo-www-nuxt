<style src="./ContactForm.styles.scss" />
<template src="./ContactForm.template.html" />
<script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        form: {
          name: null,
          email: null,
        }
      }
    },
    methods: {
      async submit() {
        console.log('submitting >>', this.form);
        this.$emit('contactFormSubmit', this.form)
      }
    }
  }
</script>
