<template>
    <div class="app-container">
        <Sidebar />
        <Tablementor />
        <Tablementee />
        
    </div>
</template>
  
<script>
import Sidebar from './Components/Sidebar.vue';
import Tablementee from './Components/Tablementee.vue';
import Tablementor from './Components/Tablementor.vue';
export default {
    components:{
        Sidebar,
        Tablementor,
        Tablementee
    }

};
</script>
  <style scoped>
    @import '../admin/assets/dashboard.css';
  </style>
  