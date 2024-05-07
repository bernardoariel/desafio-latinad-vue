import { ref, reactive } from 'vue';
import { useSelectedQuery } from '../../composables/useSelectedQuery';
const mockItem = {
    id: 123,
    name: 'Item Name',
    description: 'Description',
    price_per_day: 200,
    resolution_height: 720,
    resolution_width: 1280,
    type: 'type'
}
const mockInitialValues ={
    id: null,
    name: '',
    description: '',
    price_per_day: null,
    resolution_height: null,
    resolution_width: null,
    type: ''
}

describe('useSelectedQuery', () => {
    test('should initializes with default values', () => {
        const {
            selectedPageSize,
            selectedOptionType,
            searchQuery,
            selectOffset,
            itemSelected
        } = useSelectedQuery();

        expect(selectedPageSize.value).toBe(5);
        expect(selectedOptionType.value).toEqual({ name: 'Todos', value: 'todos' });
        expect(searchQuery.value).toBe('');
        expect(selectOffset.value).toBe(0);


        expect(itemSelected).toEqual(mockInitialValues);
    });

    test('should clears item selected data', () => {
        const { itemSelected, clearDataSelected } = useSelectedQuery();
        
        Object.assign(itemSelected, mockItem);

        clearDataSelected();

        expect(itemSelected).toEqual(mockInitialValues);
    });

    it('should sets item selected data', () => {
        const { itemSelected, setSelectedItem } = useSelectedQuery();
        

    
        setSelectedItem(mockItem);

        expect(itemSelected).toEqual(mockItem);
    });
});