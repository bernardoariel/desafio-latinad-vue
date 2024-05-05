<template>
  <div class="flex flex-column lg:flex-row md:flex-row full-height">

    <div class="flex-1 p-2"> <!-- Aplica flex-1 para ocupar espacio equitativo -->
      <Card>
        <template #title>Administrador de alquiler de Displays</template>
        <template #content>
          <MyDataView />
        </template>
      </Card>
    </div>
    <div class="flex-1 p-2"> <!-- Aplica flex-1 para ocupar espacio equitativo -->
      <MyToolbar />
      <MyMetter class="mt-5 px-5 mb-5"/>
      <MyForm/>
    </div>
  </div>
</template>



<script setup lang="ts">
import MyDataView from '@/components/MyDataView.vue';

import MyForm from '@/components/MyForm.vue';
import MyMetter from '@/components/MyMetter.vue';
import  MyToolbar from '@/components/MyToolbar.vue';
import { useDisplays } from '@/composables/useDisplays';

const { getDisplays } = useDisplays()
console.log('getDisplays::: ', getDisplays()); 
</script>

<style scoped>
.full-height {
  height: 100vh; /* Ajusta la altura al 100% del viewport */
  margin: 0; /* Elimina márgenes que podrían afectar la altura */
  padding: 0; /* Elimina el padding que podría afectar la altura */
  box-sizing: border-box; /* Asegura que el padding y el border no aumenten el tamaño */
}
</style>
