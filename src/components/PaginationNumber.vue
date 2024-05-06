<script lang="ts" setup>
import { ref, watch, onMounted, computed, defineEmits } from 'vue';
import { useSelectedQuery } from '../composables/useSelectedQuery';
import { useDisplays } from '../composables/useDisplays';

const { selectedPageSize, selectOffset } = useSelectedQuery();
const { getDisplays, totalItems } = useDisplays();
const currentPage = ref(1);

const pageSizeOptions = [5, 10, 15, 30];
const emit = defineEmits(['pageChange']);

const startIndex = computed(() => selectOffset.value + 1);
const endIndex = computed(() => Math.min(selectOffset.value + selectedPageSize.value, totalItems.value));
const displayRange = computed(() => `Mostrando ${startIndex.value} - ${endIndex.value} de ${totalItems.value}`);
watch(currentPage, (newPage) => {
    emit('pageChange', newPage);
    
});

onMounted(async () => {
    await getDisplays();
});

// Calcular el número total de páginas
const totalPages = computed(() => Math.ceil(totalItems.value / selectedPageSize.value));
const handlePageChange = (newPage:number):any =>{
    currentPage.value = newPage;
}
// Calcular el array de números de página para la paginación
const totalPagesNumbers = computed(() => 
    Array.from({ length: totalPages.value }, (_, i) => i + 1)
);
</script>

<template>
    <div class="flex align-items-center justify-content-between w-full">
        
        <div class="flex align-items-center">
            <label for="pageSize">Registros por Página:</label>
            <select class="select select-bordered" id="pageSize" v-model="selectedPageSize">
                <option v-for="size in pageSizeOptions" :value="size" :key="size">{{ size }}</option>
            </select>
        </div>

        <div class="flex align-items-center">
            <button :disabled="currentPage === 1" @click="handlePageChange(currentPage - 1)">
                Anterior
            </button>
            <button v-for="number in totalPagesNumbers" :key="number" :class="{ 'active': currentPage === number }"
                @click="handlePageChange(number)">
                {{ number }}
            </button>
            <button :disabled="currentPage === totalPages" @click="handlePageChange(currentPage + 1)">
                Siguiente
            </button>
        </div>
        <div class="flex align-items-center">
           {{ displayRange }}
        </div>
    </div>

</template>

<style scoped>
    div{
        margin-top: 10px;
    }
    button{
        background-color: transparent;
        border-radius: 5px;
        border:1px solid var(--color-border);
        color:var( --color-text);
        cursor:pointer;
        margin-right: 5px;
        padding: 10px;
        transition:all .5s
    }
    button:hover{
        background-color: hsla(160, 100%, 37%, 0.2);
        transition: all .5;
    }
    button:disabled{
        cursor: not-allowed;
    }
    .active{
        background-color: hsla(160, 100%, 37%, 0.2);
    }
    .select-bordered {
    border: 1px solid var(--surface-d);
    padding: .5rem;
    border-radius: 4px;
}

</style>