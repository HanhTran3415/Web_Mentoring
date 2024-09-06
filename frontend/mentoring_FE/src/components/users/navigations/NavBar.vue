<template>
  <nav>
    <div class="logo" @click="navigateToHome">
      <img loading="lazy" width="960" height="960" src="https://mentoring.edu.vn/wp-content/uploads/2024/03/logo_TTHLKN.jpg" class="custom-logo" alt="MENTORING" decoding="async">
    </div>
    <div class="nav-items">
      <ul class="nav-item-list">
        <li @click="navigateToHome">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
            Trang Chủ
          </a>
        </li>
        <li class="account-item" @click="toggleDropdown" @mouseover="openDropdown" @mouseleave="closeDropdown">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
              />
            </svg>
            Tài Khoản
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 5.5a.5.5 0 0 1 .708-.707L8 10.293l5.792-5.5A.5.5 0 0 1 14.5 5.5L8 11.5 1.5 5.5z"
              />
            </svg>
          </a>
          <ul class="dropdown-menu">
            <h1 class="display-2 text-white" @click="navigateToProfile">
             <b>Xin chào</b>  <br> <b>{{ profile.firstName }} {{ profile.lastName }} !</b>
            </h1>
            <li><a href="#"><i class="bi bi-bell-fill"></i> Mã khuyến mãi</a></li>
            <li><a href="#"><i class="bi bi-gear-fill"></i> Mua gói đặt lịch tư vấn</a></li>
            <li><a href="#"><i class="bi bi-gear-fill"></i> Góp ý</a></li>
            <li><a href="#"><i class="bi bi-gear-fill"></i> Trợ giúp và hỗ trợ</a></li>
            <li><a href="#" @click="logout"><i class="bi bi-gear-fill"></i> Đăng xuất</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      profile: {
        firstName: '',
        lastName: ''
      },
      dropdownOpen: false // Track the state of the dropdown
    };
  },
  methods: {
    loadProfileFromLocalStorage() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        this.profile.firstName = currentUser.firstName || '';
        this.profile.lastName = currentUser.lastName || '';
      } else {
        this.profile.firstName = '';
        this.profile.lastName = '';
      }
    },
    navigateToProfile() {
      console.log("Navigating to profile");
      this.$router.push({ name: 'UserProfile' }); 
    },

    logout() {
    // Xóa tất cả dữ liệu trong localStorage
    localStorage.clear();
    localStorage.removeItem('currentUser');
    this.$router.push({ name: 'Login' }); 
    },

    navigateToHome() {
      this.$router.push({ name: 'Home' }); 
    }
  },
  mounted() {
    this.loadProfileFromLocalStorage();
  }
};
</script>

<style scoped>
@import '@/assets/styles/navbar.css';
</style>
