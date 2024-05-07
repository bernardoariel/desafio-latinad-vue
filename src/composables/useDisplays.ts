
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
    const isLoading = ref(false)
    const productsCount = ref(0);
    const totalCount = ref(0)

    const { selectedPageSize,selectedOptionType,searchQuery,selectOffset,clearDataSelected,setSelectedItem } = useSelectedQuery()
    const token = 'OC1iZXJuYXJkb2NrZGV2QGdtYWlsLmNvbQ=='
    const headers = {
        Authorization: `Bearer ${token}`
    };

    const getDisplays = async () => {

        isLoading.value = true    
        try {
            let url = `/display?offset=${selectOffset.value}&pageSize=${selectedPageSize.value}`;
            if (searchQuery.value) url += `&name=${encodeURIComponent(searchQuery.value)}`;
            if (selectedOptionType.value.value!='todos') url += `&type=${encodeURIComponent(selectedOptionType.value.value)}`;
            
            const response = await displaysApi.get<DisplayResponse>(url, { headers });
            const { data: responseData } = response; 
    
            // Actualizar los estados reactivos
            products.value = responseData.data;
            totalItems.value = responseData.totalCount;
            isLoading.value = false    
            searchQuery.value=''
            
        } 
        catch (error) {
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
    const createDisplay = async (displayData) => {
        try {
            const response = await displaysApi.post('/display', displayData,{ headers });
            clearDataSelected()
            getDisplays()
            return response.data; // Maneja la respuesta como necesites
        } catch (error) {
            console.error('Error al crear el display:', error);
            throw error; // Propaga el error para manejarlo en la interfaz de usuario
        }
    };
    const deleteDisplay = async (id) => {
        try {
            const response = await displaysApi.delete(`/display/${id}`, { headers });
            getDisplays()
            return response.data;
        } catch (error) {
            console.error('Error al eliminar el display:', error);
            throw error;
        }
    };
    
    const getDisplayById = async (id: number) => {
        
        try {
            const response = await displaysApi.get(`/display/${id}`, { headers });
            setSelectedItem(response.data);
            isLoading.value = false;
        } catch (error) {
            console.error('Error fetching display details:', error);
            isLoading.value = false;
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

    // En tu archivo useDisplays.js o similar

    const updateDisplay = async (displayData) => {
        isLoading.value = true;
        try {
            const response = await displaysApi.put(`/display/${displayData.id}`, displayData, { headers });
            getDisplays(); // Actualiza la lista de displays después de la actualización
            isLoading.value = false;
            return response.data;
        } catch (error) {
            console.error('Error al actualizar el display:', error);
            isLoading.value = false;
            throw error; // Propaga el error para manejarlo en la interfaz de usuario
        }
    };

    
    const inDoorPercent = computed(() => {
        return 100 - outDoorPercent.value;
    });
    
    return{
        products,
        totalItems,
        getDisplays,
        outDoorPercent,
        inDoorPercent,
        getTotalDisplays,
        createDisplay,
        isLoading,
        deleteDisplay,
        getDisplayById,
        updateDisplay
    }
}