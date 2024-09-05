import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router đã cập nhật
import './assets/styles/app.css'

const app = createApp(App);

app.use(router); // Sử dụng router
app.mount('#app');
