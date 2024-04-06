<style src="./TemplateOverlays.styles.scss" scoped />
<template src="./TemplateOverlays.template.html" />
<script>
  // import GeneralBusyFeedback from "~/components/FeedbackTemplates/GeneralBusyFeedback/GeneralBusyFeedback.component.vue";
  import BusyFeedback from "~/components/FeedbackTemplates/BusyFeedback/BusyFeedback.component.vue";

  export default {
    name: 'TemplateOverlays',
    components: {
      // GeneralBusyFeedback
      BusyFeedback,
      // NotificationHandler,
    },
    props: ['isLoading', 'isMobile']
  }
</script>
