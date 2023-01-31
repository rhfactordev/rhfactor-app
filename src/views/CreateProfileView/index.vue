<template>
  <div class="container p-4">
    <form>

      <h1 class="h3 mb-3 fw-normal">Perfil</h1>

      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="name" placeholder="Digite seu nome">
        <label for="name">Nome</label>
      </div>
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="document" placeholder="CPF">
        <label for="document">CPF</label>
      </div>


<!--      <button class="w-100 btn btn-lg btn-primary mb-4" type="submit">Cadastrar-me</button>-->
      <router-link class="w-100 btn btn-lg btn-primary mb-4" to="/dashboard">Ver minhas previsões</router-link>


    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ProfileView',
  components: {

  },
});
</script>
