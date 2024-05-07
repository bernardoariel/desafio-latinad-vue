import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const token = localStorage.getItem('authToken');
 
  if (!token) {
    return next({
      name: 'Login',
    });
  }

  return next();
};

export default isAuthenticatedGuard;
