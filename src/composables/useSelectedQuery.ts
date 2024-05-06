import { ref, reactive } from 'vue';


const selectedPageSize = ref(5); 
const selectedOptionType = ref({ name: 'Todos', value: 'todos' });
const searchQuery = ref('');
const selectOffset = ref(0)
const itemSelected = reactive({
    name: '',
    description: '',
    price_per_day: null,
    resolution_height: null,
    resolution_width: null,
    type: ''
});
export const useSelectedQuery = () =>{

    const clearDataSelected = ()=>{
        selectedPageSize.value = 5
        selectedOptionType.value = { name: 'Todos', value: 'todos' }
        searchQuery.value = ''
        selectOffset.value = 0    
    }
    return {
        selectedPageSize,
        selectedOptionType,
        searchQuery,
        selectOffset,
        clearDataSelected
    }
}