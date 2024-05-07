import { useRouter } from 'vue-router';
<template>
  
  <div class="flex align-items-center justify-content-center gap-2 p-3" style="min-height: 100vh;">
    <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg"
       alt="Error 404 Image"
       class="w-30rem logo" />

    <div class="flex flex-column justify-content-center">
      <div class="text-8xl">
        AWWW... NO LLORES.
      </div>
      <div class="text-5xl">
        ¡Es solo un error 404!
      </div>
      <div class="text-2xl">
        Es posible que lo que está buscando se haya perdido en la memoria a largo plazo.
      </div>
      <Button label="Ir al Escritorio" severity="danger" text class="mt-3 text-2xl" @click="router.replace({name:'Home'})"/>
   

  </div>
</div>

</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter();
</script>
<style scoped>
.logo {
  animation: float 6s ease-in-out infinite;
 }
 
@keyframes float {
  0%, 100% {
    transform: translatey(0);
  }
  50% {
    transform: translatey(-20px);
  }
}
</style>
