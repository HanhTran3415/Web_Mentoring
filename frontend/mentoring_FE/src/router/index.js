import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/users/Home.vue';
import Login from '@/components/users/Login.vue';
import SignUp from '@/components/users/SignUp.vue';
import UserProfile from '@/components/users/UserProfile.vue';
import Calendar from '@/components/users/Calendar.vue';
import Feedback from '@/components/users/Feedback.vue';  // Import Feedback component
import ContactForm from '@/components/users/ContactForm.vue';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
import MentorPage from '@/components/users/Mentor.vue';

const routes = [
  {
    path: '/',
    name: 'Mentor',
    component: MentorPage,
    
  },
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
    meta: { requiresAuth: true }   
  },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    meta: { requiresAuth: true }  
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    meta: { requiresAuth: true }  
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
    meta: { requiresAuth: true } 
  },
  {
    path: '/contact',
    name: 'Contact-Form',
    component: ContactForm,
    meta: { requiresAuth: true } 
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login',  
  },
   
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('currentUser');
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (isAuthenticated) {
      next('/home');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
