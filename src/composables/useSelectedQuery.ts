import { ref, reactive } from 'vue';


const selectedPageSize = ref(5); 
const selectedOptionType = ref({ name: 'Todos', value: 'todos' });
const searchQuery = ref('');
const selectOffset = ref(0)

const itemSelected = reactive({
    id: null,
    name: '',
    description: '',
    price_per_day: null,
    resolution_height: null,
    resolution_width: null,
    type: ''
});
export const useSelectedQuery = () =>{

    const clearDataSelected = () => {
        itemSelected.id = null;
        itemSelected.name = '';
        itemSelected.description = '';
        itemSelected.price_per_day = null;
        itemSelected.resolution_height = null;
        itemSelected.resolution_width = null;
        itemSelected.type = '';
    };
    const setSelectedItem = (item) => {
        Object.assign(itemSelected, item);
    };
    return {
        selectedPageSize,
        selectedOptionType,
        searchQuery,
        selectOffset,
        itemSelected,
        clearDataSelected,
        setSelectedItem
    }
}