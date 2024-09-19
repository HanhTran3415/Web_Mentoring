<template>
  <TopNavBar />
  <div class="home">
    <div class="slider-container">
    <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="slider-image">
        <img :src="image" />
      </div>
    </div>
    <!-- Left arrow -->
    <button class="prev" @click="prevImage">‹</button>
    <!-- Right arrow -->
    <button class="next" @click="nextImage">›</button>
  </div>

  <!--Tabs -->
  <div class="tabs-container">
  <!-- Radio buttons for switching between Tài liệu and Mentor -->
  <a-radio-group v-model="selectedTab" class="tab-radio-group">
    <a-radio-button
      value="documents"
      @mouseenter="hideMentorTabs"
      class="radio-button"
    >
      Tài liệu
    </a-radio-button>

    <a-radio-button
      value="mentor"
      @mouseenter="showMentorTabs"
      class="radio-button"
      
    >
      Mentor
    </a-radio-button>
  </a-radio-group>

  <!-- Content for Tài liệu -->
  <div v-if="selectedTab === 'documents'">
    <!-- <p>Thông tin Tài liệu</p> -->
  </div>

  <!-- Mentor Sub-tabs, visible when hovering over "Mentor" -->
  <div
    v-if="selectedTab === 'mentor'"
    class="mentor-tabs-wrapper"
    @mouseenter="keepMentorTabsVisible"
    @mouseleave="hideMentorTabs"
  >
    <a-tabs
      v-model:activeKey="activeMentorTab"
      tab-position="top"
      class="mentor-tabs"
      type="card"
    >
      <a-tab-pane
      class="mentor-tab-pane"
        v-for="mentor in mentorFields"
        :key="mentor.key"
        :tab="mentor.name"
      >
        {{ mentor.name }}
      </a-tab-pane>
    </a-tabs>
  </div>
</div>

    <div class="search-bar">
      <h1>Tìm kiếm Mentor</h1>
      <input 
        v-model="searchName"
        type="text"
        placeholder="Tìm kiếm theo tên"
      />
      <input 
        v-model="searchMajor"
        type="text"
        placeholder="Tìm kiếm theo ngành học"
      />
      <input 
        v-model="searchFreeTime"
        type="text"
        placeholder="Theo thời gian rảnh (VD: Mon 13:00)"
      />
    </div>
    





    <!-- Mentor Cards -->
    <div class="mentor-cards">
    <div 
      v-for="mentor in paginatedMentors" 
      :key="mentor.id" 
      class="mentor-card"
      @mouseover="showDetails(mentor.id)"
      @mouseleave="hideDetails"
    >
      <!-- Wrap the avatar in a router-link for navigation -->
      <router-link :to="{ name: 'ProfileMentors', params: { id: mentor.id } }">
        <img :src="mentor.avatar" alt="Mentor Avatar" class="mentor-avatar"/>
      </router-link>
      
      <h2>{{ mentor.name }}</h2>
      <p class="info"><i class="fas fa-briefcase icon"></i> {{ mentor.position }}</p> <!-- Chức vụ -->
      <p class="info"><i class="fas fa-graduation-cap icon"></i> {{ mentor.Major }}</p> <!-- Chuyên môn -->
      <p class="info"><i class="fas fa-user-tie icon"></i> {{ mentor.mentee }} mentees</p> <!-- Mentor -->
      <p class="info"><i class="fas fa-calendar-day icon"></i> {{ mentor.FreeTime }}</p>

      <!-- Nút Kết nối -->
      <button @click="connectMentor(mentor)" class="connect-button">
        Kết nối
      </button>

      <!-- Hiển thị chi tiết mentor -->
      <div v-if="activeMentorId === mentor.id" class="mentor-details">
        <h2>Chi tiết</h2>
        <p><strong>Giới thiệu bản thân:</strong> {{ details[mentor.id]?.content }}</p>
        <div v-for="(value, key) in details[mentor.id]?.['Chủ đề Mentoring']" :key="key">
          <p><strong>{{ key }}:</strong> {{ value }}</p>
        </div>
      </div>
    </div>
  </div>

    <!-- Điều hướng trang -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">
        <i class="pagination-icon">‹</i>
      </button>
      <button 
        v-for="page in totalPages" 
        :key="page"
        @click="goToPage(page)"
        :class="['pagination-page', { active: currentPage === page }]"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">
        <i class="pagination-icon">›</i>
      </button>
      <span class="pagination-info"> {{ currentPage }} / {{ totalPages }}</span>
      
    </div>

    <!-- Thông báo kết quả -->
    <div v-if="notification.message" :class="['notification', notification.type]">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import TopNavBar from './navigations/NavBar.vue';

export default {
  name: 'Home',
  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem('currentUser')) || {},
      mentors: [],
      details: {},
      activeMentorId: null,
      searchName: '',
      searchMajor: '',
      searchFreeTime: '',
      currentPage: 1,
      itemsPerPage: 12,
      gotoPage: 1,
      notification: {
        message: '',
        type: ''

      },
      selectedTab: 'documents', // Controls the selected tab group
      activeMentorTab: 'mentor-marketing', // Default active sub-tab for Mentor
      mentorFields: [
        { key: 'mentor-marketing', name: 'Mentor Marketing' },

        { key: 'mentor-consulting', name: 'Mentor Tư Vấn Khởi Nghiệp' },

        { key: 'mentor-self-awareness', name: 'Mentor Thấu Hiểu Bản Thân' },
        { key: 'mentor-psychology', name: 'Mentor Tâm Lý Học' },
        // Add more mentor fields as needed
      ],
      // Slider data
      currentIndex: 0,
      images: [
        "https://hubsaigon.vn/wp-content/uploads/2024/08/CHIEN-BINH-SOCIAL-COMMERCE-900x507.png",
        "https://hubsaigon.vn/wp-content/uploads/2024/08/z5720224038271_9ec52d9275158e2243cd7c1a023a285a-900x503.jpg",
        "https://hubsaigon.vn/wp-content/uploads/2024/08/kn.jpg",
        "https://hubsaigon.vn/wp-content/uploads/2024/08/KHOI-NGHIEP-THUC-CHIEN-1.png",
        "https://hubsaigon.vn/wp-content/uploads/2024/08/PROMT-AI-CONG-SO.jpg"
      ],
      sliderInterval: null, // Interval for automatic sliding
    };
  },
  mounted() {
    this.startSlider();
    this.scrollToTop();
  },
  beforeDestroy() {
    this.stopSlider();
  },
    
  

  async created() {
    try {
      const mentorResponse = await fetch('http://localhost:3001/mentor');
      const detailsResponse = await fetch('http://localhost:3001/details');
      
      if (mentorResponse.ok && detailsResponse.ok) {
        this.mentors = await mentorResponse.json();
        const detailsData = await detailsResponse.json();
        this.details = detailsData.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});
      } else {
        console.error('Lỗi khi tải dữ liệu:', mentorResponse.statusText, detailsResponse.statusText);
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu:', error);
    }
  },

  computed: {
    filteredMentors() {
      return this.mentors.filter(mentor => {
        const nameMatch = mentor.name.toLowerCase().includes(this.searchName.toLowerCase());
        const majorMatch = mentor.Major.toLowerCase().includes(this.searchMajor.toLowerCase());
        const freeTimeMatch = mentor.FreeTime.toLowerCase().includes(this.searchFreeTime.toLowerCase());
        return nameMatch && majorMatch && freeTimeMatch;
      });
    },
    totalPages() {
      return Math.ceil(this.filteredMentors.length / this.itemsPerPage);
    },
    paginatedMentors() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredMentors.slice(start, end);
    }
  },
  
  methods: {
    showMentorTabs() {
      this.selectedTab = 'mentor';
    },
    hideMentorTabs() {
      this.selectedTab = 'documents'; // or any other logic you prefer
    },
    keepMentorTabsVisible() {
      this.selectedTab = 'mentor';
    },
    // Slider methods
    prevImage() {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length; // Circular sliding
    },
    startSlider() {
      this.sliderInterval = setInterval(this.nextImage, 3000); // Auto slide every 3 seconds
    },
    stopSlider() {
      clearInterval(this.sliderInterval);
    },

    showDetails(id) {
      this.activeMentorId = id;
    },
    hideDetails() {
      this.activeMentorId = null;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.gotoPage = this.currentPage;
        this.scrollToTop();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.gotoPage = this.currentPage;
        this.scrollToTop();
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.gotoPage = page;
        this.scrollToTop();
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    async connectMentor(mentor) {
      const connectionData = {
        userId: this.currentUser.id,
        userName: this.currentUser.name,
        userEmail: this.currentUser.email,
        mentorId: mentor.id,
        mentorName: mentor.name,
        mentorEmail: mentor.email || '',
        timestamp: new Date().toISOString()
      };

      try {
        const response = await fetch('http://localhost:4000/matching', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(connectionData)
        });

        if (response.ok) {
          this.notification = {
            message: `Đã gửi yêu cầu kết nối tới ${mentor.name} thành công!`,
            type: 'success'
          };
        } else {
          throw new Error('Không thể kết nối tới server');
        }
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu kết nối:', error);
        this.notification = {
          message: 'Đã xảy ra lỗi khi gửi yêu cầu kết nối. Vui lòng thử lại sau.',
          type: 'error'
        };
      }
    }
  }
};
</script>


<style scoped>
@import '@/assets/styles/Home.css';
</style>