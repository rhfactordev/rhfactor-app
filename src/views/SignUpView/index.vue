<template>
  <div class="container p-4">
    <form>

      <h1 class="h3 mb-3 fw-normal">Cadastre-se</h1>

      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Senha</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingConfirmPassword" placeholder="Password">
        <label for="floatingConfirmPassword">Confirme sua senha</label>
      </div>

      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
          Confirmo que aceito os <router-link to="/use-terms">termos de uso</router-link> e as <router-link to="/privacy-policy">políticas de privacidade</router-link> do site.
        </label>
      </div>

<!--      <button class="w-100 btn btn-lg btn-primary mb-4" type="submit">Cadastrar-me</button>-->

      <router-link class="w-100 btn btn-lg btn-primary mb-4" to="/create-profile">Criar meu perfil</router-link>


    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SignUpView',
  components: {

  },
});
</script>
