
import { displaysApi } from '../api/displaysApi';

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
export const useDisplays = () => {
    const token = 'OC1iZXJuYXJkb2NrZGV2QGdtYWlsLmNvbQ=='
    const headers = {
        Authorization: `Bearer ${token}`
    };
    const getDisplays = async (): Promise<Display[]> =>{
        try {
            const { data } = await displaysApi.get<DisplayResponse>('/display?offset=0&pageSize=10', { headers });
            return data; 
        } catch (error) {

            console.error('Error fetching displays:', error);
            throw error; // O devuelve un error personalizado
        }
       
    }
    return{
        getDisplays
    }
}