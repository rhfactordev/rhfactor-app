<template>
  <div class="container p-4">
    <form>

      <h1 class="h3 mb-3 fw-normal">Login</h1>

      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary mb-4" type="submit">Login</button>

      <div class="d-grid gap-1">
        <router-link class="btn btn-secondary" to="/login">Voltar</router-link>
      </div>

    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ForgotPasswordView',
  components: {
  },
});
</script>
