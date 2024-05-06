
import { ref, watch, computed } from 'vue';
import { displaysApi } from '../api/displaysApi';
import { useSelectedQuery } from './useSelectedQuery';

interface DisplayResponse {
    totalCount: number;
    data:       Display[];
}

 interface Display {
    id:                number;
    name:              string;
    description:       string;
    picture_url:       string;
    user_id:           number;
    price_per_day:     string;
    resolution_height: string;
    resolution_width:  string;
    type:              Type;
}

 enum Type {
    Indoor = "indoor",
    Outdoor = "outdoor",
}
const products = ref<Display[]>([]);
const productsMeters = ref<Display[]>([]);
const totalItems = ref(0);


export const useDisplays = () => {
    const productsCount = ref(0);
    const totalCount = ref(0)
    const { selectedPageSize,selectedOptionType,searchQuery,selectOffset } = useSelectedQuery()
    const token = 'OC1iZXJuYXJkb2NrZGV2QGdtYWlsLmNvbQ=='
    const headers = {
        Authorization: `Bearer ${token}`
    };

    const getDisplays = async () => {
        try {
            
            let url = `/display?offset=${selectOffset.value}&pageSize=${selectedPageSize.value}`;
            if (searchQuery.value) url += `&name=${encodeURIComponent(searchQuery.value)}`;
            if (selectedOptionType.value.value!='todos') url += `&type=${encodeURIComponent(selectedOptionType.value.value)}`;
            
            const response = await displaysApi.get<DisplayResponse>(url, { headers });
            const { data: responseData } = response; 
    
            // Actualizar los estados reactivos
            products.value = responseData.data;
            console.log('products.value::: ', products.value);
            totalItems.value = responseData.totalCount;
    
        } catch (error) {
            console.error('Error fetching displays:', error);
            throw error;
        }
    }
    const getTotalDisplays = async () => {
        try {
            let url = `/display?offset=0&pageSize=1000`; // pageSize=0 podría indicar que solo queremos metadatos
                       
            const response = await displaysApi.get<DisplayResponse>(url, { headers });
            productsCount.value = response.data.data;
            totalCount.value = response.data.totalCount; 

        } catch (error) {
            console.error('Error fetching display totals:', error);
        }
    };
    
    const itemsOutdoor = computed(() => {
            const results = productsCount.value.filter(product => product.type === 'outdoor')
            return results
        }
    );
    const itemsIndoor = computed(() => productsCount.value.filter(product => product.type === 'indoor'));

    const outDoorPercent = computed(() => {
        return totalCount.value ? Math.round((itemsOutdoor.value.length / totalCount.value) * 100) : 0;
    });

    
    const inDoorPercent = computed(() => {
        return 100 - outDoorPercent.value;
    });
    return{
        products,
        totalItems,
        getDisplays,
        outDoorPercent,
        inDoorPercent,
        getTotalDisplays
    }
}