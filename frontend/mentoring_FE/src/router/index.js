
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/users/Home.vue';
import Login from '@/components/users/Login.vue';
import SignUp from '@/components/users/SignUp.vue';
import UserProfile from '@/components/users/UserProfile.vue';
import Calendar from '@/components/users/Calendar.vue';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// Cấu hình các route với meta fields để xử lý yêu cầu xác thực và khách
const routes = [
  {
    path: '/',
    name: 'SignUp',
    component: SignUp,
    meta: { requiresGuest: true }  // Trang dành cho khách
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true }  // Trang dành cho khách
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }   // Trang yêu cầu xác thực
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { requiresAuth: true }   // Trang yêu cầu xác thực
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    meta: { requiresAuth: true }   // Trang yêu cầu xác thực
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login',  // Redirect bất kỳ đường dẫn nào không xác định về trang đăng nhập
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard để kiểm tra trạng thái người dùng và điều hướng đúng
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('currentUser');
  
  // Kiểm tra xem route yêu cầu xác thực
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // Nếu không xác thực, điều hướng đến trang đăng nhập
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Kiểm tra xem route yêu cầu khách
    if (isAuthenticated) {
      // Nếu đã xác thực, điều hướng đến trang chính
      next('/home');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
