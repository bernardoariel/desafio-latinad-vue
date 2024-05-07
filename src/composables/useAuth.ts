import { ref } from 'vue';
import { displaysApi } from '../api/displaysApi';
import { useRouter } from 'vue-router';

export const useAuth = ()=>{
    const isLoading = ref(false);
    const errorMessage = ref('');
    const router = useRouter();
    const login = async (email, password) => {
        isLoading.value = true;
        errorMessage.value = '';

        try {
            const response = await displaysApi.post('/login', {
                email,
                password
            });
            // Suponiendo que el token se devuelve en la respuesta
            const token = response.data.data.token; 
            localStorage.setItem('authToken', token);
            isLoading.value = false;


            return true;
        } catch (error) {
            
            errorMessage.value = error.response?.data?.message || 'Error al iniciar sesión. Compruebe sus credenciales!!.';
            isLoading.value = false;
            return false;
        }
    };
    const logout = () => {
        localStorage.removeItem('authToken'); // Elimina el token de autenticación
        router.push({ name: 'Login' }); // Redirige al usuario a la página de inicio de sesión
    };
   
    return { 
        login,
        isLoading,
        errorMessage ,
        logout
    }
}