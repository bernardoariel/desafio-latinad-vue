import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import isAuthenticatedGuard from '../../../auth/guards/is-authenticated.guard';


describe('isAuthenticatedGuard', () => {
    let to, from, next, mockNext;

    beforeEach(() => {
        to = {} as RouteLocationNormalized; 
        from = {} as RouteLocationNormalized; 
        next = jest.fn(); 
        mockNext = next as unknown as NavigationGuardNext;

        localStorage.clear();
    });

    test('should redirect to Login if no authToken is present', async () => {
        localStorage.removeItem('authToken'); 

        await isAuthenticatedGuard(to, from, mockNext);

        expect(next).toHaveBeenCalledWith({ name: 'Login' });
    });

    test('should proceed to route if authToken is present', async () => {
        localStorage.setItem('authToken', 'valid-token'); 

        await isAuthenticatedGuard(to, from, mockNext);

        expect(next).toHaveBeenCalledWith(); 
    });
});
