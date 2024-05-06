import { ref } from 'vue';


const selectedPageSize = ref(5); 
const selectedOptionType = ref({ name: 'Todos', value: 'todos' });
const searchQuery = ref('');
const selectOffset = ref(0)
export const useSelectedQuery = () =>{

    return {
        selectedPageSize,
        selectedOptionType,
        searchQuery,
        selectOffset
    }
}