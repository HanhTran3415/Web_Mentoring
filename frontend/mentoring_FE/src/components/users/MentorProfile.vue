<template>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
  
    <div class="main-content">
      <!-- Top navbar -->
      <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <!-- Your existing navbar code -->
      </nav>
      <!-- Header -->
      <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" :style="{ 'min-height': '600px', 'background-image': `url(${coverImage})`, 'background-size': 'cover', 'background-position': 'center top' }">
        <div class="header-overlay">
          <div class="container">
            <div class="row align-items-center">
              <!-- Left side: Update Cover Photo button -->
              <div class="col-lg-4 text-center text-lg-left">
                <button @click="triggerCoverInput" class="btn btn-primary">
                  Cập nhật ảnh bìa
                </button>
              </div>
              <!-- Right side: Avatar and Name -->
              <div class="col-lg-8 text-center text-lg-right">
                <div class="avatar-container">
                  <a href="#" @click="triggerFileInput">
                    <img :src="profile.avatar || defaultAvatar" class="rounded-circle" alt="Avatar">
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Page content -->
      <div class="container-fluid mt--7">
        <div class="row">
          <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div class="card card-profile shadow">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                    <div class="avatar-container text-center">
                        <a href="#" @click="triggerFileInput">
                            <img :src="profile.avatar || defaultAvatar" class="rounded-circle">
                            <input type="file" ref="fileInput" class="d-none" @change="handleAvatarUpload" />
                        </a>
                        <div class="mentor-name">{{ profile.firstName }} {{ profile.lastName }}</div> <!-- Updated Mentor's name -->
                        </div>

                  </div>
                </div>
              </div>
              <div class="card-body pt-0 pt-md-4">
                <div class="row">
                  <div class="col">
                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                    <div>
                        <i class="fas fa-users"></i> <!-- Mentee icon -->
                        <span class="heading">22</span>
                        <span class="description">Mentee</span>
                    </div>
                    <div>
                        <i class="fas fa-pencil-alt"></i> <!-- Posts icon -->
                        <span class="heading">10</span>
                        <span class="description">Bài đăng</span>
                    </div>
                    <div>
                        <i class="fas fa-thumbs-up"></i> <!-- Likes icon -->
                        <span class="heading">89</span>
                        <span class="description">Thích</span>
                    </div>
                    </div> 
                  </div>
                </div>
                <div class="personal-info">
                    <p><i class="fas fa-user"></i> Tên: {{ profile.firstName }} {{ profile.lastName }}</p>
                    <p><i class="fas fa-envelope"></i> Email: {{ profile.email }}</p>
                    <p><i class="fas fa-phone"></i> Điện thoại: {{ profile.contactNo }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 order-xl-1">
          <div class="custom-background card-custom">
            <div class="card-header bg-white border-0">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Giới thiệu về tôi</h3>
                </div>
                <div class="col-4 text-right">
                  <button
                    @click="toggleEdit"
                    class="btn btn-sm"
                    :class="{ 'btn-primary': !isEditing, 'btn-success': isEditing }"
                  >
                    {{ isEditing ? "Lưu" : "Chỉnh sửa" }}
                  </button>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="biography">
                <h5>Tiểu sử</h5>
                <textarea
                  v-model="profile.description"
                  :disabled="!isEditing"
                  class="form-control"
                  placeholder="Nhập tiểu sử của bạn ở đây..."
                ></textarea>

                <h5>Chuyên môn</h5>
                <input
                  type="text"
                  v-model="profile.specialty"
                  :disabled="!isEditing"
                  class="form-control"
                  placeholder="Nhập chuyên môn của bạn ở đây..."
                />

                <h5>Công tác</h5>
                <input
                  type="text"
                  v-model="profile.work"
                  :disabled="!isEditing"
                  class="form-control"
                  placeholder="Nhập công tác của bạn ở đây..."
                />

                <h5>Kiến thức</h5>
                <input
                  type="text"
                  v-model="profile.knowledge"
                  :disabled="!isEditing"
                  class="form-control"
                  placeholder="Nhập kiến thức của bạn ở đây..."
                />

                <h5>Kinh nghiệm</h5>
                <input
                  type="text"
                  v-model="profile.experience"
                  :disabled="!isEditing"
                  class="form-control"
                  placeholder="Nhập kinh nghiệm của bạn ở đây..."
                />

                <h5>Thành tích</h5>
                <input
                  type="text"
                  v-model="profile.awards"
                  :disabled="!isEditing"
                  class="form-control"
                  placeholder="Nhập thành tích của bạn ở đây..."
                />
              </div>
            </div>
          
          </div>
        </div>
        </div>
      </div>
      <!-- Cover photo input -->
      <input type="file" ref="coverInput" class="d-none" @change="handleCoverUpload" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        id: '',
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        description: '',
        awards: '',
        contactNo: '',
        escription: '',
        specialty: '',
        work: '',
        knowledge: '',
        experience: '',
        awards: '',
        avatar: 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'
      },
      coverImage: 'https://wallpaperaccess.com/full/2397719.png', // Default cover image URL
      isEditing: false,
      defaultAvatar: 'https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'
    };
  },
  methods: {
    
    handleAvatarUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profile.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleCoverUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.coverImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  
    toggleEdit() {
      this.isEditing = !this.isEditing;
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleAvatarUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profile.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    triggerCoverInput() {
      this.$refs.coverInput.click();
    },
    handleCoverUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.coverImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    goToCalendar() {
      // Logic to navigate to calendar
    }
  }
};
</script>

<style scoped>
@import '@/assets/styles/MentorProfile.css';
</style>
