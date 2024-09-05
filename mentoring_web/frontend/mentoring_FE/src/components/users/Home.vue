<template>
  <TopNavBar />
  <div class="home">
    <h1><b>Danh Sách Mentor</b></h1>
    <div class="search-bar">
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
        placeholder="Tìm kiếm theo thời gian rảnh (VD: Mon 13:00)"
      />
    </div>
    <div class="mentor-cards">
      <div 
        v-for="mentor in filteredMentors" 
        :key="mentor.id" 
        class="mentor-card"
        @mouseover="showDetails(mentor.id)"
        @mouseleave="hideDetails"
      >
        <img :src="mentor.avatar" alt="Mentor Avatar" class="mentor-avatar"/>
        <h2>{{ mentor.name }}</h2>
        <p><strong>Chức vụ:</strong> {{ mentor.position }}</p>
        <p><strong>Mentor:</strong> {{ mentor.mentee }} mentees</p>
        <p><strong>Thời gian rảnh:</strong> {{ mentor.FreeTime }}</p>
        <p><strong>Chuyên môn:</strong> {{ mentor.Major }}</p> 
        
        <!-- Nút Kết nối -->
        <button @click="connectMentor(mentor)" class="connect-button">
          Kết nối
        </button>

        <div v-if="activeMentorId === mentor.id" class="mentor-details">
          <h3>Chi tiết:</h3>
          <p><strong>Giới thiệu bản thân:</strong> {{ details[mentor.id].content }}</p>
          <div v-for="(value, key) in details[mentor.id]['Chủ đề Mentoring']" :key="key">
            <p><strong>{{ key }}:</strong> {{ value }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Thông báo kết quả -->
    <div v-if="notification.message" :class="['notification', notification.type]">
      {{ notification.message }}
    </div>
  </div>
</template>

<script>
import TopNavBar from './navigations/NavBar.vue'
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
      notification: {
        message: '',
        type: '' 
      }
    };
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
    }
  },
  methods: {
    showDetails(id) {
      this.activeMentorId = id;
    },
    hideDetails() {
      this.activeMentorId = null;
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
      } finally {
        // Xóa thông báo sau 5 giây
        setTimeout(() => {
          this.notification.message = '';
          this.notification.type = '';
        }, 5000);
      }
    }
  }
}
</script>

<style scoped>
@import '@/assets/styles/Home.css';
</style>