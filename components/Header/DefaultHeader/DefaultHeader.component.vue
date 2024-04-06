<style src="./DefaultHeader.styles.scss" />
<template src="./DefaultHeader.template.html" />
<script>
  import DefaultNavbar from '~/components/Navbar/DefaultNavbar.component.vue';
  import LocaleSelector from "~/components/LocaleSelector/LocaleSelector.component.vue";
  import HostBrandLogo from "@/components/HostBrandLogo/HostBrandLogo.component.vue";

  export default {
    name: 'DefaultHeader',
    props: ['isMobile', 'isLoading'],
    components: {
      HostBrandLogo,
      LocaleSelector,
      DefaultNavbar,
    }
  }
</script>
