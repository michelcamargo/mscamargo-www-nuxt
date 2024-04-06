<script lang="ts">

  type FormFeedbackType = 'incomplete' | 'consent' | 'invalid' | 'success' | null;

  export default {
    name: 'FormFeedback',
    props: ['formFeedback'],
    mounted() {
      console.log('mounted feedback:', this.$props.formFeedback);
    },
    data(props: { formFeedback: FormFeedbackType }){
      return {
        feedback: props.formFeedback,
      }
    },
  }
</script>

<template>
  <div
    v-if="feedback === 'error'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    There was an error processing your request.
  </div>

  <div
    v-else-if="feedback === 'success'"
    class="text-white w-full block p-3 mt-4 bg-green-500"
  >
    Thanks for signing up!
  </div>

  <div
    v-else-if="feedback === 'incomplete'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    Please complete all required fields.
  </div>

  <div
    v-else-if="feedback === 'invalid'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    Please enter a valid email address.
  </div>

  <div
    v-else-if="feedback === 'consent'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    Please agree to terms and conditions.
  </div>
</template>

<style scoped></style>
