<style src="./SocialReferences.styles.scss" />
<template src="./SocialReferences.template.html" />
<script>

  import SocialButton from "~/components/SocialReferences/SocialButton/SocialButton.component.vue";
  import STATIC_SOCIAL_LINKS from "~/components/SocialReferences/social-links.ts";

  const socialItems = STATIC_SOCIAL_LINKS;

  export default {
    name: 'SocialReferences',
    components: { SocialButton },
    data() {
      return {
        socialItems
      }
    },
    mounted() {
      console.log('valores em socialItems:', socialItems);
    }
  }
</script>
