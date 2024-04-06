<script lang="ts" setup>
  import { ref } from 'vue';
  import FormFeedbackComponent from "~/components/FormFeedback/FormFeedback.component.vue";

  type FormFeedbackType = 'incomplete' | 'consent' | 'invalid' | 'success' | null;

  const name = ref('');
  const email = ref('');
  const consent = ref(false);
  const isLoading = ref(false);
  const formFeedback = ref<FormFeedbackType>('incomplete');
  const success = ref(true);

  const submitForm = async () => {
    isLoading.value = true;
    formFeedback.value = null;

    if (!name.value.trim() || !email.value.trim()) {
      formFeedback.value = 'incomplete';
      isLoading.value = false;
      return;
    }

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (email.value && !regex.test(email.value)) {
      formFeedback.value = 'invalid';
      success.value = false;
      isLoading.value = false;
      return;
    }

    if (!consent.value) {
      formFeedback.value = 'consent';
      success.value = false;
      isLoading.value = false;
      return;
    }

    setTimeout(() => {
      // If the execution reaches here, it means that all checks have passed.
      console.log('form', { name, email })
      success.value = true;
      formFeedback.value = 'success';
      isLoading.value = false;
    }, 1000);
  };
</script>

<template>
  <div>
    <div>
      <div
        class="text-center p-6 border-2 border-white w-full max-w-md"
      >
        <h1 class="text-2xl mb-3">Join Our Newsletter</h1>
        <p class="mb-6 text-lg">Get amazing updates right to your inbox.</p>
        <form @submit.prevent="submitForm" class="flex flex-col">
<!--        <form class="flex flex-col">-->
          <label>
            Name
            <input
              v-model="name"
              type="text"
              class="w-full px-3 py-2 mt-2"
            />
          </label>
          <label>
            Email
            <input
              v-model="email"
              type="email"
              class="w-full px-3 py-2 mt-2"
            />
          </label>
          <label class="flex items-center mb-4">
            <input
              type="checkbox"
              v-model="consent"
              class="mr-3"
              id="updates"
            />
            I agree to terms and conditions
          </label>
          <button
            type="submit"
            class="transition-all duration-100 text-black px-6 py-2 mt-4"
            @click.prevent="submitForm"
          >
            {{ isLoading ? 'Loading...' : 'Submit' }}
          </button>
          <FormFeedbackComponent :formFeedback="formFeedback" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
