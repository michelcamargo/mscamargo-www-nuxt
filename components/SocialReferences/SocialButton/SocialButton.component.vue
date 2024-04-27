<style src="./SocialButton.styles.scss" />
<template src="./SocialButton.template.html" />
<script>

  const socialSelectHandler = selected => {
    console.log('selected', selected);
  }

  export default {
    name: 'SocialButton',
    data() {
      return {
        socialSelectHandler,
      }
    },
    props: ['info'],
  };
</script>
