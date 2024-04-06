<style src="./default.styles.scss" />
<script>
  import { defineComponent } from "vue";
  import DefaultHeader from "~/components/Header/DefaultHeader/DefaultHeader.component.vue";
  import TemplateOverlays from '~/components/TemplateOverlays/TemplateOverlays.component.vue';

  const isPageLoaded = ref(false);
  const isMobile = ref(true);
  export default defineComponent({
    components: { DefaultHeader, TemplateOverlays },
    setup() {
      const nuxtApp = useNuxtApp();
      const device = useDevice();

      isMobile.value = device.isMobile;

      nuxtApp.hook("page:finish", () => {
        setTimeout(() => {
          isPageLoaded.value = true
        }, 800);
      });
    },
    data() {
      return { isPageLoaded, isMobile }
    }
  })
</script>
<template>
  <div :class="'root_wrapper' + isMobile ? 'root_wrapper__mobile' : 'root_wrapper__desktop'">
    <TemplateOverlays :isLoading=!isPageLoaded :isMobile=isMobile />
    <div class="root_content" :style="!isPageLoaded && { opacity: .7 }">
      <DefaultHeader :isMobile="isMobile" :isLoading=!isPageLoaded />
      <slot />
    </div>
  </div>
</template>
