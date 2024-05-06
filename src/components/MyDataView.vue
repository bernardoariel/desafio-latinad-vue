<template>
    <div class="card " v-if="!isLoading">
        <DataView :value="products" :layout="layout">
            <template #header>
                <div class="flex justify-content-between align-items-center px-3">
                    
                    <DataViewLayoutOptions v-model="layout" />

                    <div class="search-group">
                        <InputText v-model="searchQuery" placeholder="Buscar" @keyup.enter="getItems()" />
                        <Button label="Buscar" severity="info" text  @click="getItems()" />
                    </div>

                    <SelectButton v-model="selectedOptionType" :options="optionsType" optionLabel="name" aria-labelledby="basic" />
                </div>
            </template>

            <template #list="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                       
                        <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3" :class="{ 'border-top-1 surface-border': index !== 0 }">
                            <div class="md:w-10rem relative">
                                <img class="block xl:block mx-auto border-round w-full" :src="`${item.picture_url}`" :alt="item.name" />
                                <Tag :value="item.type" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                            </div>
                            <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                                <div class="flex flex-row md:flex-column justify-content-between align-items-start gap-2">
                                    <div>
                                        <div class="text-xl font-semibold text-900 mt-1">{{ item.name }}</div>
                                        <div class="text-base font-medium text-600 mt-1">{{ item.description }}</div>
                                        <span class="font-medium text-secondary text-sm">Resolucion: {{ item.resolution_height }} | {{ item.resolution_width }}</span>
                                    </div>
                                    <div class="surface-100 p-1" style="border-radius: 30px">
                                        <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-900 font-medium text-sm"> {{ Math.floor(Math.random() * 10) + 1 }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-column md:align-items-end gap-5">
                                    <span class="text-xl font-semibold text-900">${{ item.price_per_day }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <Button icon="pi pi-trash" severity="danger" outlined></Button>
                                        <Button icon="pi pi-shopping-cart" severity="info" label="Editar Display" class="flex-auto md:flex-initial white-space-nowrap"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template #grid="slotProps">
                <div class="grid grid-nogutter">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 xl:col-6 p-2">
                        <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
                            <div class="surface-50 flex justify-content-center border-round p-3">
                                <div class="relative mx-auto">
                                    <img class="border-round w-full" :src="`${item.picture_url}`" :alt="item.name" style="max-width: 300px"/>
                                    <Tag :value="item.type" :severity="getSeverity(item)" class="absolute" style="left: 4px; top: 4px"></Tag>
                                </div>
                            </div>
                            <div class="pt-4">
                                <div class="flex flex-row justify-content-between align-items-start gap-2">
                                    <div>
                                        <div class="text-xl font-semibold text-900 mt-1">{{ item.name }}</div>
                                        <div class="text-base font-medium text-600 mt-1">{{ item.description }}</div>
                                        <span class="font-light text-secondary text-sm">Resolucion: {{ item.resolution_height }} | {{ item.resolution_width }}</span>
                                    </div>
                                    <div class="surface-100 p-1" style="border-radius: 30px">
                                        <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-900 font-medium text-sm">{{ Math.floor(Math.random() * 10) + 1 }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-column gap-4 mt-4">
                                    <span class="text-2xl font-semibold text-900">${{ item.price_per_day }}</span>
                                    <div class="flex gap-2">
                                        <Button icon="pi pi-pencil" label="Editar Item" class="flex-auto white-space-nowrap"></Button>
                                        <Button icon="pi pi-trash" severity="danger"  outlined></Button>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </div>
    <div v-else class="flex align-items-center justify-content-center">
        <ProgressSpinner />
    </div>
    <PaginationNumber class="flex align-items-center justify-content-center"
        :totalPages="totalPages"
        :currentPage="currentPage"
        @pageChange="handlePageChange"
    />
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { useDisplays, } from "@/composables/useDisplays";
import { getSeverity } from '../helpers/getSeverity';
import { useSelectedQuery } from '../composables/useSelectedQuery';
import PaginationNumber from "./PaginationNumber.vue";

const { selectedPageSize,selectedOptionType,searchQuery,selectOffset } = useSelectedQuery()
const { getDisplays, totalItems,products } = useDisplays();
const currentPage = ref(1);

const isLoading = ref(true)

const layout = ref('grid');

const totalPages = computed(() => {
    return Math.ceil(totalItems.value / selectedPageSize.value);
});

const optionsType = ref([
    { name: 'Todos', value: 'todos' },
    { name: 'Indoor', value: 'indoor' },
    { name: 'Outdoor', value: 'outdoor' }
]);

const handlePageChange = async (newPage) => {
    currentPage.value = newPage;
    selectOffset.value = (newPage - 1) * selectedPageSize.value;
    await getItems();
};

onMounted(async() => {
    try {
    await getDisplays();
  } finally {
    isLoading.value = false; 
  }
});

const getItems = async ()=>{
    
    isLoading.value = true
    const typeValue = (selectedOptionType.value.value === '' || selectedOptionType.value.name === 'Todos') ? undefined : selectedOptionType.value.value;
    try {
    await getDisplays();
  } finally {
    isLoading.value = false;  // Desactivar el indicador de carga después de obtener los datos
    searchQuery.value=''
  }
    
}

watch(selectedPageSize, async (newVal) => {
    if (newVal) {
        console.log('newVal:!!:: ', newVal);
        await getItems();
    }
});

watch(selectedOptionType, async (newVal) => {

    if (newVal && newVal.value) {
        selectedPageSize.value = 5
        selectOffset.value = 0
        await getItems();
    }
});
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Asegúrate de que el contenedor flex use todo el ancho disponible */
}

.page-size-selector, .search-group {
  display: flex;
  align-items: center;
  gap: 10px; /* Espaciado entre elementos del formulario */
}

.select-bordered {
  min-width: 120px; /* Asegúrate de que el select no sea demasiado pequeño */
}

.search-group input, .search-group button {
  margin-right: 5px; /* Pequeño margen entre el input y el botón */
}
</style>

