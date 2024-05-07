<template>
  <Card>
    <template #title>{{ itemSelected.id ? 'Editar Display' : 'Agregar nuevo item' }}</template>
      <template #content>
        <ProgressSpinner v-if="isLoading" style="width: 50px; height: 50px;" />
        <div v-if="!isLoading">
          <div class="flex flex-column gap-2 mb-2">
          <label for="name">Nombre</label>
          <InputText id="name" aria-describedby="name-help" v-model="itemSelected.name" @blur="setTouched('name')" :invalid="!validations.nameValid && touched.name"/>
          <small v-if="!validations.nameValid && touched.name" class="p-error">El nombre debe tener al menos 3 caracteres.</small>

        </div>

        <div class="flex flex-column gap-2 mb-2">
            <label for="description">Descripcion</label>
            <InputText id="description" aria-describedby="description-help" v-model="itemSelected.description" @blur="setTouched('description')" :invalid="!validations.descriptionValid && touched.description"/>
            <small v-if="!validations.descriptionValid && touched.description" class="p-error">La descripción debe tener al menos 3 caracteres.</small>
        </div>

        <div class="flex flex-row gap-4 mb-2"> 
          <div class="image-container mt-4">
            <img v-if="itemSelected.id" :src="itemSelected.picture_url" alt="Display Image" class="image-size">
            <img v-else src="../assets/noImage.gif" alt="Default Image" class="image-size">
          </div>

          <div class="flex flex-column gap-2 flex-grow">
            <div class="flex flex-column gap-2">
              <label for="price_per_day">Alquiler por dia</label>
              <InputText id="price_per_day" aria-describedby="price_per_day-help" v-model="itemSelected.price_per_day" @blur="setTouched('price_per_day')" :invalid="!validations.priceValid && touched.price_per_day"/>
              <small v-if="!validations.priceValid && touched.price_per_day" class="p-error">El precio debe ser un número positivo.</small>
            </div>

            <div class="flex flex-column gap-2">
              <label for="resolution_height">Resolucion Height</label>
              <InputText id="resolution_height" aria-describedby="resolution_height-help" v-model="itemSelected.resolution_height" @blur="setTouched('resolution_height')" :invalid="!validations.resolutionHeightValid && touched.resolution_height" />
              <small v-if="!validations.resolutionHeightValid && touched.resolution_height" class="p-error">La altura de resolución debe ser un número positivo.</small>
            </div>

            <div class="flex flex-column gap-2">
              <label for="resolution_width">Resolucion Width</label>
              <InputText id="resolution_width" aria-describedby="resolution_width-help" v-model="itemSelected.resolution_width" @blur="setTouched('resolution_width')" :invalid="!validations.resolutionWidthValid && touched.resolution_width"/>
              <small v-if="!validations.resolutionWidthValid && touched.resolution_width" class="p-error">El ancho de resolución debe ser un número positivo.</small>
            </div>

            <div class="flex flex-column gap-2">
              <label for="type">Outdoor - Indoor</label>
              <Dropdown v-model="selectedType" :options="typeItem" optionLabel="name" placeholder="Seleccione una opcion" class="w-full" @blur="setTouched('type')"  :invalid="!validations.typeValid && touched.type"  />
              <small v-if="!validations.typeValid && touched.type" class="p-error">Por favor seleccione un tipo.</small>
            </div>
          </div>
        </div>
        </div>
        
          
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button :label="itemSelected.id ? 'Cancelar' : 'Limpiar'" @click="resetForm" severity="secondary" outlined class="w-full"/>
            <Button label="Guardar" data-testid="save-button" @click="saveDisplay" class="w-full" :disabled="!isValidForm">
          
        </Button>
          </div>
        </template>
    </Card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDisplays } from '../composables/useDisplays';
import { useValidationForm } from '../composables/useValidationForm';
import { useSelectedQuery } from '../composables/useSelectedQuery';




const { itemSelected, clearDataSelected, } = useSelectedQuery();
const { validations, isValidForm, touched, setTouched, touchAll,setClearInput } = useValidationForm(itemSelected);
const { createDisplay,updateDisplay } = useDisplays();
const selectedType = ref(null);
const isLoading = ref(false)
const typeItem = ref([
    { name: 'Outdoor', value: 'outdoor' },
    { name: 'Indoor', value: 'indoor' },
]);


const saveDisplay = async () => {
  touchAll();
  if (!isValidForm.value) return;

  try {
    isLoading.value = true
    if (itemSelected.id) {
      await updateDisplay(itemSelected);
    } else {
      await createDisplay(itemSelected);
    }
    resetForm()
    isLoading.value = false
  } catch (error) {
    console.error('Error al guardar o actualizar el display:', error);
    alert('Error al guardar o actualizar el display. Por favor, inténtelo de nuevo.');
  }
};

const resetForm = () => {
    clearDataSelected(); // Limpia el formulario y la selección
    setClearInput()
};
watch(selectedType, (newValue) => {
    if (newValue) {
        itemSelected.type = newValue.value; // Asegúrate de asignar el valor de la propiedad 'value' del tipo seleccionado.
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
      

  
  
 