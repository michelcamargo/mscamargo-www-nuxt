<style src="./AuthenticationForm.styles.scss"></style>
<template src="./AuthenticationForm.template.html"></template>

<script lang="ts">
  import AuthenticationHelper from "~/helpers/authentication.helper";
  import { defineProps } from "vue";
  import type {AuthFormUser} from "~/types/User.type";

  const isAuthenticated = ref(false);
  const isSignUp = ref(false);
  const isLoginAble = ref(false);
  const formErrors = reactive<string[]>([]);

  // const submitFormHandler = (event: SubmitEvent) => {
  //   event.preventDefault();
  //
  //   if (!(event.currentTarget instanceof HTMLFormElement)) {
  //     console.error('O evento de envio não foi acionado a partir de um elemento de formulário.');
  //     return;
  //   }
  //
  //   const props = defineProps(['handleUserChange', 'handleAuthenticate']);
  //   console.log('props', props);
  //
  //   const formData = new FormData(event.currentTarget);
  //   const email = formData.get('email')?.toString() ?? '';
  //   const secret = formData.get('secret')?.toString() ?? '';
  //
  //   if (!email) {
  //     isLoginAble.value = false;
  //     return;
  //   }
  //
  //   const foundUser = AuthenticationHelper.getUserByCredentials(email, secret);
  //   isLoginAble.value = true;
  //
  //   if (foundUser) {
  //     console.log('found user:', foundUser);
  //     submitFormHandler(foundUser);
  //
  //     const authAccessCode = foundUser.token!;
  //
  //     if (authAccessCode) {
  //       console.log('AUTHENTICATING', authAccessCode);
  //
  //       setTimeout(() => {
  //         isAuthenticated.value = true;
  //         // handleAuthenticate(foundUser);
  //       }, 1200);
  //     }
  //
  //     return;
  //   }
  //
  //   return;
  // }

  export default {
    name: 'AuthenticationForm',
    props: ['handleUserChange', 'authenticationCallback'],
    data() {
      return {
        form: {
          email: null,
          secret: null,
          name: null,
        },
        isAuthenticated, isSignUp, isLoginAble, formErrors,
      }
    },
    methods: {
      async submit() {
        console.log('submitting auth >>', this.form);


        this.$emit('submit', this.form);
      }
    }
  }
</script>
