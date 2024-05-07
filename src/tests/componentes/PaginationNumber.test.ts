import { mount } from '@vue/test-utils';
import PaginationNumber from '@/components/PaginationNumber.vue'
import { ref } from 'vue';


vi.mock('../../composables/useSelectedQuery.ts', () => ({
    useSelectedQuery: () => ({
      selectedPageSize: ref(5),
      selectOffset: ref(0)
    })
}));
vi.mock('@/composables/useDisplays', () => ({
    useDisplays: () => ({
        getDisplays: vi.fn(),  // Mock the function if needed
        totalItems: ref(100)  // Provide an initial mock value
    })
}));
describe('<PaginationNumber />',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = mount(PaginationNumber)
    })

    test('should initialize with default values', () => {
        expect(wrapper.vm.selectedPageSize).toBe(5);
    });
    test('updates currentPage and emits pageChange on page change', async () => {
        const newPage = 2;
        await wrapper.vm.handlePageChange(newPage);
        expect(wrapper.vm.currentPage).toBe(newPage);
        expect(wrapper.emitted('pageChange')[0]).toEqual([newPage]);
    });
    test('calculates start and end index correctly', async () => {
        wrapper.vm.selectOffset = 0;
        wrapper.vm.selectedPageSize = 10;
        wrapper.vm.totalItems = 35;
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.startIndex).toBe(1);
        expect(wrapper.vm.endIndex).toBe(10);
        expect(wrapper.vm.displayRange).toBe('Mostrando 1 - 10 de 35');
    });
    test('loads displays on component mount', async () => {
        expect(wrapper.vm.totalItems).toBeGreaterThan(0); 
    });
    test('calculates total pages correctly', async () => {
        wrapper.vm.selectedPageSize = 10;
        wrapper.vm.totalItems = 45;
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.totalPages).toBe(5);
    });
    test('generates page numbers array for pagination', async () => {
        wrapper.vm.selectedPageSize = 10;
        wrapper.vm.totalItems = 50;  
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.totalPagesNumbers).toEqual([1, 2, 3, 4, 5]);
    });
    
})