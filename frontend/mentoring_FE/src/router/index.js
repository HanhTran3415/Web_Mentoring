import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/users/Home.vue";
import Login from "@/components/users/Login.vue";
import SignUp from "@/components/users/SignUp.vue";
import UserProfile from "@/components/users/UserProfile.vue";
import Calendar from "@/components/users/Calendar.vue";
import Feedback from "@/components/users/Feedback.vue"; // Import Feedback component
import ContactForm from "@/components/users/ContactForm.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
import Dashboad from "@/components/admin/Dashboard.vue";
import Table from "@/components/admin/Table.vue";
import MentorProfile from "@/components/users/MentorProfile.vue";
import ProfileMentors from "@/components/mentors/ProfileMentors.vue";

// import Tablementee from '@/components/admin/Components/Tablementee.vue';
//import MentorPage from '@/components/users/Mentor.vue';

//import Dashboard from '@/components/users/admin/dashboard.vue';

const routes = [
    {
        path: "/",
        name: "SignUp",
        component: SignUp,
        meta: { requiresGuest: true }, // Trang dành cho khách
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requiresGuest: true }, // Trang dành cho khách
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        // meta: { requiresAuth: true }
    },
    {
        path: "/profile",
        name: "UserProfile",
        component: UserProfile,
        meta: { requiresAuth: true, role: "user" },
    },
    {
        path: "/calendar",
        name: "Calendar",
        component: Calendar,
        meta: { requiresAuth: true },
    },
    {
        path: "/feedback",
        name: "Feedback",
        component: Feedback,
        meta: { requiresAuth: true, role: "user" },
    },
    {
        path: "/contact",
        name: "Contact-Form",
        component: ContactForm,
        // meta: { requiresAuth: true },
    },
    {
        path: "/dashboard",
        name: "Dashboad",
        component: Dashboad,
        meta: { requiresAuth: true, role: "admin" },
    },
    {
        path: "/table",
        name: "Table",
        component: Table,
        meta: { requiresAuth: true, role: "admin" },
    },
    {
        path: "/mentorprofile",
        name: "MentorProfile",
        component: MentorProfile,
    },
    {
        path: "/mentor-info/:id",
        name: "ProfileMentors",
        component: ProfileMentors,
        props: true,
    },

    {
        path: "/:catchAll(.*)",
        redirect: "/login",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.afterEach((to, from) => {
    window.scrollTo(0, 0);
});

router.beforeEach((to, from, next) => {
    // const isAuthenticated = !!localStorage.getItem("currentUser");

    // if (to.matched.some((record) => record.meta.requiresAuth)) {
    //     if (!isAuthenticated) {
    //         next("/login");
    //     } else {
    //         next();
    //     }
    // } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    //     if (isAuthenticated) {
    //         next("/home");
    //     } else {
    //         next();
    //     }
    // } else {
    //     next();
    // }
    const currentUser = JSON.parse(localStorage.getItem("currentUser")); // Lấy thông tin người dùng
    const isAuthenticated = !!currentUser; // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const userRole = isAuthenticated ? currentUser.role : null; // Lấy vai trò của người dùng

    // Kiểm tra trang yêu cầu xác thực
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next("/login"); // Chuyển hướng đến trang đăng nhập nếu chưa xác thực
        } else if (to.meta.role && to.meta.role !== userRole) {
            next("/unauthorized"); // Chuyển hướng đến trang không có quyền nếu vai trò không khớp
        } else {
            next(); // Tiếp tục nếu đã xác thực và vai trò khớp
        }
    }
    // Kiểm tra trang yêu cầu khách
    else if (to.matched.some((record) => record.meta.requiresGuest)) {
        if (isAuthenticated) {
            next("/home"); // Chuyển hướng đến trang chính nếu đã đăng nhập
        } else {
            next(); // Tiếp tục nếu chưa đăng nhập
        }
    } else {
        next(); // Tiếp tục cho các trang khác
    }
});

export default router;
