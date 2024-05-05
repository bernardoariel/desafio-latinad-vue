<template>
  <Card>
    <template #title>Agregar nuevo item</template>
      <template #content>

        <div class="flex flex-column gap-2 mb-2">
          <label for="name">Name</label>
          <InputText id="name" aria-describedby="name-help" />
        </div>

        <div class="flex flex-column gap-2 mb-2">
            <label for="description">Description</label>
            <InputText id="description" aria-describedby="description-help" />
        </div>

        <div class="flex flex-row gap-4 mb-2"> 
          <div class="image-container mt-4">
            <img src="../assets/noImage.gif" alt="image" class="image-size">
          </div>

          <div class="flex flex-column gap-2 flex-grow"> <!-- Uso de flex-grow para ocupar el espacio restante -->
            <div class="flex flex-column gap-2">
              <label for="price_per_day">Price Per Day</label>
              <InputText id="price_per_day" aria-describedby="price_per_day-help" />
            </div>

            <div class="flex flex-column gap-2">
              <label for="resolution_height">Resolution Height</label>
              <InputText id="resolution_height" aria-describedby="resolution_height-help" />
            </div>

            <div class="flex flex-column gap-2">
              <label for="resolution_width">Resolution Width</label>
              <InputText id="resolution_width" aria-describedby="resolution_width-help" />
            </div>
          </div>
        </div>
          
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
              <Button label="Cancel" severity="secondary" outlined class="w-full" />
              <Button label="Save" class="w-full" />
          </div>
        </template>
    </Card>
</template>


  
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
      

  
  
 