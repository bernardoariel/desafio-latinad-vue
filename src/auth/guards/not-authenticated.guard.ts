import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const token = localStorage.getItem('authToken');
  if (token && to.name === 'Login') {
    return next({
      name: 'Home', // o cualquier ruta que sea la página principal después del login
    });
  }
 
  return next();
};

export default isAuthenticatedGuard;
