<template>
  <label for="email1" class="block text-900 font-medium mb-2">Email</label>
  <InputText v-model="email" id="email1" type="text" class="w-full mb-3" autocomplete="off"/>

  <label for="password1" class="block text-900 font-medium mb-2">Password</label>
  <InputText v-model="password" id="password1" type="password" class="w-full mb-3" autocomplete="off" />


  <Button icon="pi pi-user" class="w-full login-button" @click="onLogin" :disabled="isLoading">
  <div class="button-content">
    <ProgressSpinner 
      v-if="isLoading"
      style="width: 20px; height: 20px; margin-right: 10px;" 
      strokeWidth="5"
      fill="#EEEEEE"
      animationDuration=".8s"
    />
    <span>Sign In</span>
  </div>
</Button>


<div v-if="errorMessage" class="text-center mt-3">
  <span class=" text-red-500 text-lg font-bold">{{ errorMessage }}</span>
</div>
   
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useAuth } from '../../composables/useAuth';

const { login, isLoading, errorMessage } = useAuth();
const router = useRouter();
const email = ref('bernardockdev@gmail.com');
const password = ref('1234');

const onLogin = async() => {
  const success = await login(email.value, password.value);
  if (success) {
    router.push({ name: 'Home' });
  }
};
</script>
<style scoped>
.login-button .button-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Asegura que el botón tenga suficiente altura para evitar cambios de tamaño */
.login-button {
  min-height: 48px; /* Ajusta esto al tamaño del botón que prefieras */
}

/* Spinner style */
.login-button .pi-spinner {
  margin-right: 8px; /* Asegura espacio entre el spinner y el texto */
}
</style>
