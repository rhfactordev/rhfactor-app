<template>
  <div class="container">

    <div>
      <p>Karana</p>
      <p>O céu na palma da mão</p>
    </div>

    <div class="d-grid gap-2">
      <router-link class="btn btn-primary" to="/login">Login</router-link>
      <router-link class="btn btn-secondary" to="/signup">Cadastro</router-link>
    </div>


  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
});
</script>
