<script lang="ts" setup>
import { toRef, ref, watch, onMounted, computed, defineEmits } from 'vue';
import { useSelectedQuery } from '../composables/useSelectedQuery';
import { useDisplays } from '../composables/useDisplays';

const emit = defineEmits(['pageChanges']);

const { selectedPageSize, selectOffset } = useSelectedQuery();
const { getDisplays, totalItems } = useDisplays();

// Paginación actual
const currentPage = ref(1);

// Observar cambios en currentPage para actualizar el offset y recargar los datos
watch(currentPage, (newPage) => {
    selectOffset.value = (newPage - 1) * selectedPageSize.value;
    getDisplays();
});

// Montar y cargar datos iniciales
onMounted(async () => {
    await getDisplays();
});

// Calcular el número total de páginas
const totalPages = computed(() => Math.ceil(totalItems.value / selectedPageSize.value));

// Calcular el array de números de página para la paginación
const totalPagesNumbers = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1));
</script>

<template>
    <div>
        <button
            :disabled="currentPage === 1"
            @click="emit('pageChanges', currentPage - 1)"
        >Anterior</button>
        <button
            v-for="number in totalPagesNumbers"
            :key="number"
            :class="{active: currentPage === number}"
            @click="emit('pageChanges', number)"
        >{{ number }}</button>
        <button
            :disabled="currentPage === totalPages"
            @click="emit('pageChanges', currentPage + 1)"
        >Siguiente</button>
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

</style>