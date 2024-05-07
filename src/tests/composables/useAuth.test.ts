import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useAuth } from '@/composables/useAuth';
import { ref } from 'vue';
import axios from 'axios';
import { displaysApi } from '@/api/displaysApi';

import MockAdapter from 'axios-mock-adapter';
import { useRouter } from 'vue-router';

const mockDisplayApi = new MockAdapter(displaysApi);

const mockPush = vi.fn()
// Mock de vue-router
vi.mock('vue-router', () => ({
    useRouter: () => ({
      push: mockPush  
    })
  }));
  
  // Configuración de localStorage mockeado
  global.localStorage = {
    setItem: vi.fn(),
    removeItem: vi.fn()
  };
  
  describe('useAuth', () => {
    let mock;
  
    beforeEach(() => {
      mockPush.mockReset();
      mock = new MockAdapter(displaysApi);
    });
  
    afterEach(() => {
      mock.restore();
    });
    
    it('debería eliminar el authToken y redirigir a la página de inicio de sesión al hacer logout', () => {
      const { logout } = useAuth();
        logout();

        expect(localStorage.removeItem).toHaveBeenCalledWith('authToken');
        expect(mockPush).toHaveBeenCalledWith({ name: 'Login' }); 
    }); 
  
    it('debería iniciar sesión correctamente y almacenar el token', async () => {
      mock.onPost('/login').reply(200, {
        data: {
          token: "1121121etwelkgf!sdljgoerw=="
        }
      });
    
      const { login, isLoading, errorMessage } = useAuth();
    
      const result = await login('email@gemail.com', 'password');
    
      console.log("Token received in test:", localStorage.setItem.mock.calls[0][1]);
    
      expect(result).toBe(true);
      expect(localStorage.setItem).toHaveBeenCalledWith('authToken', "1121121etwelkgf!sdljgoerw==");
      expect(isLoading.value).toBe(false);
      expect(errorMessage.value).toBe('');
    });

  })