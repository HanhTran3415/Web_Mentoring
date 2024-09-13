<template>
    <div class="app-left">
    <button class="close-menu">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div class="app-logo">
    <router-link to="/table">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>      
      </svg>
      <span>Danh sách</span>
    </router-link>
  </div>
  
    <ul class="nav-list">
      <router-link to="/dashboard">
    <li class="nav-list-item active">
        <a class="nav-list-link" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-columns"><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"/></svg>
        Tổng quan
        </a>
    </li>
  </router-link>
    
    <li class="nav-list-item">
        <a class="nav-list-link" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
        Jobs
        </a>
    </li>
    <li class="nav-list-item">
        <a class="nav-list-link" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
        Applications
        </a>
    </li>
    <li class="nav-list-item">
        <a class="nav-list-link" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Team
        </a>
    </li>
    <li class="nav-list-item">
        <a class="nav-list-link" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
        Reports
        </a>
    </li>
    </ul>
    </div>
</template>
<script>
import Chart from 'chart.js/auto'; 
export default {

  data() {
    return {
      isRightAreaOpen: false, // Track the right area visibility
      isMenuOpen: false, // Track the sidebar visibility
    };
  },
  methods: {
    toggleRightArea(status) {
      this.isRightAreaOpen = status;
    },
    toggleMenu(status) {
      this.isMenuOpen = status;
    },
    initializeChart() {
      const chart = document.getElementById('chart').getContext('2d');
      const gradient = chart.createLinearGradient(0, 0, 0, 450);

      gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
      gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');

      const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Applications',
          backgroundColor: gradient,
          pointBackgroundColor: '#00c7d6',
          borderWidth: 1,
          borderColor: '#0e1a2f',
          data: [60, 45, 80, 30, 35, 55, 25, 80, 40, 50, 80, 50]
        }]
      };

      const options = {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          easing: 'easeInOutQuad',
          duration: 520
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: '#5e6a81'
            },
            gridLines: {
              color: 'rgba(200, 200, 200, 0.08)',
              lineWidth: 1
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: '#5e6a81'
            }
          }]
        },
        elements: {
          line: {
            tension: 0.4
          }
        },
        legend: {
          display: false
        },
        tooltips: {
          titleFontFamily: 'Poppins',
          backgroundColor: 'rgba(0,0,0,0.4)',
          titleFontColor: 'white',
          caretSize: 5,
          cornerRadius: 2,
          xPadding: 10,
          yPadding: 10
        }
      };

      new Chart(chart, {
        type: 'line',
        data: data,
        options: options
      });
    }
  },
  mounted() {
    this.initializeChart(); // Initialize the chart when the component is mounted
  }
};
</script>
<style lang="css" scoped>
  @import '../assets/dashboard.css';
</style>