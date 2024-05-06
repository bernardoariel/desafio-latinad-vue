<template>
  <Card>
    <template #title>Agregar nuevo item</template>
      <template #content>

        <div class="flex flex-column gap-2 mb-2">
          <label for="name">Nombre</label>
          <InputText id="name" aria-describedby="name-help" v-model="displayData.name" @blur="setTouched('name')" :invalid="!validations.nameValid && touched.name"/>
          <small v-if="!validations.nameValid && touched.name" class="p-error">El nombre debe tener al menos 3 caracteres.</small>

        </div>

        <div class="flex flex-column gap-2 mb-2">
            <label for="description">Descripcion</label>
            <InputText id="description" aria-describedby="description-help" v-model="displayData.description" @blur="setTouched('description')" :invalid="validations.descriptionValid && touched.description"/>
            <small v-if="!validations.descriptionValid && touched.description" class="p-error">La descripción debe tener al menos 3 caracteres.</small>
        </div>

        <div class="flex flex-row gap-4 mb-2"> 
          <div class="image-container mt-4">
            <img src="../assets/noImage.gif" alt="image" class="image-size">
          </div>

          <div class="flex flex-column gap-2 flex-grow">
            <div class="flex flex-column gap-2">
              <label for="price_per_day">Alquiler por dia</label>
              <InputText id="price_per_day" aria-describedby="price_per_day-help" v-model="displayData.price_per_day" @blur="setTouched('price_per_day')" :invalid="!validations.priceValid && touched.price_per_day"/>
              <small v-if="!validations.priceValid && touched.price_per_day" class="p-error">El precio debe ser un número positivo.</small>
            </div>

            <div class="flex flex-column gap-2">
              <label for="resolution_height">Resolucion Height</label>
              <InputText id="resolution_height" aria-describedby="resolution_height-help" v-model="displayData.resolution_height" @blur="setTouched('resolution_height')" :invalid="!validations.resolutionHeightValid && touched.resolution_height" />
              <small v-if="!validations.resolutionHeightValid && touched.resolution_height" class="p-error">La altura de resolución debe ser un número positivo.</small>
            </div>

            <div class="flex flex-column gap-2">
              <label for="resolution_width">Resolucion Width</label>
              <InputText id="resolution_width" aria-describedby="resolution_width-help" v-model="displayData.resolution_width" @blur="setTouched('resolution_width')" :invalid="!validations.resolutionWidthValid && touched.resolution_width"/>
              <small v-if="!validations.resolutionWidthValid && touched.resolution_width" class="p-error">El ancho de resolución debe ser un número positivo.</small>
            </div>

            <div class="flex flex-column gap-2">
              <label for="type">Outdoor - Indoor</label>
              <Dropdown v-model="selectedType" :options="typeItem" optionLabel="name" placeholder="Seleccione una opcion" class="w-full" @blur="setTouched('type')"  :invalid="!validations.typeValid && touched.type"  />
              <small v-if="!validations.typeValid && touched.type" class="p-error">Por favor seleccione un tipo.</small>
            </div>
          </div>
        </div>
          
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Limpiar" @click="resetForm" severity="secondary" outlined class="w-full" />
            <Button label="Guardar" @click="saveDisplay" class="w-full" :disabled="!isValidForm">
          
        </Button>
          </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { useDisplays } from '../composables/useDisplays';
import { useValidationForm } from '../composables/useValidationForm';

const displayData = reactive({
    name: '',
    description: '',
    price_per_day: null,
    resolution_height: null,
    resolution_width: null,
    type: ''
});


const { validations, isValidForm,touched,setTouched,setClearInput,touchAll } = useValidationForm(displayData);
const { createDisplay } = useDisplays();
const selectedType = ref(null);

const typeItem = ref([
    { name: 'Outdoor', value: 'outdoor' },
    { name: 'Indoor', value: 'indoor' },
]);


const saveDisplay = async () => {
    // Agregar validación básica:
    touchAll()
    if (!isValidForm.value) return
    try {
        await createDisplay(displayData);
        resetForm(); 
    } catch (error) {
        console.error('Error al guardar el display:', error);
        alert('Error al guardar el display. Por favor, inténtelo de nuevo.');
    }
};
const resetForm = () => {
    displayData.name = '';
    displayData.description = '';
    displayData.price_per_day = null;
    displayData.resolution_height = null;
    displayData.resolution_width = null;
    displayData.type = '';
    setClearInput()
};
watch(selectedType, (newValue) => {
    if (newValue) {
        displayData.type = newValue.value; // Asegúrate de asignar el valor de la propiedad 'value' del tipo seleccionado.
    }
}, { immediate: true });
</script>

  
<style scoped>
.flex-row {
  display: flex;
  align-items: center; /* Asegura que todos los elementos estén alineados verticalmente en el centro */
}

.image-container {
  flex: 0 0 auto; /* No crece, no se encoge y se basa en el tamaño del contenido automático */
}

.image-size {
  width: 150px; /* O el tamaño que prefieras para tu imagen */
  height: auto; /* Mantiene la proporción */
}
.flex-grow {
  flex-grow: 1; /* Toma el espacio restante */
}
</style>
      

  
  
 