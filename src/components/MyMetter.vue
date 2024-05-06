<template>
    <div class="card">
      <MeterGroup v-if="!isLoading" :value="value" />
      <ProgressBar v-else mode="indeterminate" style="height: 6px"></ProgressBar>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useDisplays } from '@/composables/useDisplays';
  
  const { outDoorPercent, inDoorPercent, getTotalDisplays  } = useDisplays();
  const isLoading = ref(true)
  const value = ref([]);
  
  onMounted(async () => {
    isLoading.value= true
    try {
    await getTotalDisplays();
  } finally {
    isLoading.value = false;  // Desactivar el indicador de carga después de obtener los datos
  }
});
  // Asegúrate de que el `watch` se ejecuta correctamente.
  watch([outDoorPercent, inDoorPercent], () => {
      value.value = [
          { label: 'Todos', color: '#60a5fa', value: 100, icon: 'pi pi-database' },
          { label: 'Outdoor', color: '#fbbf24', value: outDoorPercent.value, icon: 'pi pi-th-large' },
          { label: 'Indoor', color: '#34d399', value: inDoorPercent.value, icon: 'pi pi-objects-column' },
      ];
  }, { immediate: true });
  </script>
  