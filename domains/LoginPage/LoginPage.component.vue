<style src="./LoginPage.styles.scss"></style>
<template src="./LoginPage.template.html"></template>

<script lang="ts">
  import AuthenticationForm from "~/components/AuthenticationForm/AuthenticationForm.component.vue";
  import type {AuthenticatedUser} from "~/types/User.type";

  const userData = ref({
    email: '',
    secret: '',
  });

  const onUserChange = (userInfo: { email: string, secret: string }) => {
    if (userInfo) {
      userData.value = {
        ...userData,
        ...userInfo,
      };
    }
  }

  const onAuthenticate = (authUser: AuthenticatedUser) => {
    if (authUser) {
      console.log('AUTHENTICATE PORRA', authUser)
    }
  }

  export default {
    name: 'LoginPage',
    data() {
      return {
        onUserChange, onAuthenticate
      }
    },
    components: {
      AuthenticationForm,
    }
  }
</script>
