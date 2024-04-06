<style src="./MinifiedHeader.styles.scss" />
<template src="./MinifiedHeader.template.html" />
<script>
  import LocaleSelector from "~/components/LocaleSelector/LocaleSelector.component.vue";
  import HostBrandLogo from "@/components/HostBrandLogo/HostBrandLogo.component.vue";

  export default {
    name: 'MinifiedHeader',
    props: ['isMobile', 'isLoading'],
    components: {
      HostBrandLogo,
      LocaleSelector,
    }
  }
</script>
