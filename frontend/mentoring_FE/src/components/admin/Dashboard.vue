<template>
    <div class="app-container">
        <Sidebar />
        <Maindashboard />
        <Rightside />
    </div>
</template>
  
<script>
import Sidebar from './Components/Sidebar.vue';
import Rightside from './Components/Rightside.vue';
import Maindashboard from './Components/Maindashboard.vue';
export default {
    components:{
        Sidebar,
        Rightside,
        Maindashboard
    }

};
</script>
  <style scoped>
    @import '../admin/assets/dashboard.css';
  </style>
  