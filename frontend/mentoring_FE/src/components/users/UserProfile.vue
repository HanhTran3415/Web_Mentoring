<template>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    
    <div class="main-content">
      <!-- Top navbar -->
      <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
        <div class="container-fluid">
           <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="#" @click="triggerFileInput">Cập nhật ảnh bìa</a>
          <!-- Form -->
          <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <div class="form-group mb-0">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-search"></i></span>
                </div>
                <input class="form-control" placeholder="Search" type="text">
              </div>
            </div>
          </form>
          <!-- User -->
          <ul class="navbar-nav align-items-center d-none d-md-flex">
            <li class="nav-item dropdown">
              <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <!-- <img alt="Image placeholder" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba56a465-265c-4688-9d51-58622cc0fe3e/d7i70mg-682de519-2f5a-4829-8317-bc23e002a1de.jpg/v1/fit/w_504,h_756,q_70,strp/op_luffy_by_zzyzzyy_d7i70mg-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzU2IiwicGF0aCI6IlwvZlwvYmE1NmE0NjUtMjY1Yy00Njg4LTlkNTEtNTg2MjJjYzBmZTNlXC9kN2k3MG1nLTY4MmRlNTE5LTJmNWEtNDgyOS04MzE3LWJjMjNlMDAyYTFkZS5qcGciLCJ3aWR0aCI6Ijw9NTA0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ju9xyBL_lMGsPWYtPn1Jw5WokCKQ_-mTzQsgYjA0t6M"> -->
                    <img :src="profile.avatar || 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba56a465-265c-4688-9d51-58622cc0fe3e/d7i70mg-682de519-2f5a-4829-8317-bc23e002a1de.jpg/v1/fit/w_504,h_756,q_70,strp/op_luffy_by_zzyzzyy_d7i70mg-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzU2IiwicGF0aCI6IlwvZlwvYmE1NmE0NjUtMjY1Yy00Njg4LTlkNTEtNTg2MjJjYzBmZTNlXC9kN2k3MG1nLTY4MmRlNTE5LTJmNWEtNDgyOS04MzE3LWJjMjNlMDAyYTFkZS5qcGciLCJ3aWR0aCI6Ijw9NTA0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ju9xyBL_lMGsPWYtPn1Jw5WokCKQ_-mTzQsgYjA0t6M'" class="rounded-circle" />
                  </span>
                  <div class="media-body ml-2 d-none d-lg-block">
                    <span class="mb-0 text-sm font-weight-bold">{{ profile.firstName }} {{ profile.lastName }}</span>
                  </div>
                </div>
              </a>
              <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                <div class="dropdown-header noti-title">
                  <h6 class="text-overflow m-0">Welcome!</h6>
                </div>
                <a href="../examples/profile.html" class="dropdown-item">
                  <i class="ni ni-single-02"></i>
                  <span>My profile</span>
                </a>
                <a href="../examples/profile.html" class="dropdown-item">
                  <i class="ni ni-settings-gear-65"></i>
                  <span>Lưu</span>
                </a>
                <a href="../examples/profile.html" class="dropdown-item">
                  <i class="ni ni-calendar-grid-58"></i>
                  <span>Activity</span>
                </a>
                <a href="../examples/profile.html" class="dropdown-item">
                  <i class="ni ni-support-16"></i>
                  <span>Support</span>
                </a>
                <div class="dropdown-divider"></div>
                <a href="#!" class="dropdown-item">
                  <i class="ni ni-user-run"></i>
                  <span>Logout</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Header -->
      <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center" style="min-height: 600px; background-image: url(https://wallpaperaccess.com/full/2397719.png); background-size: cover; background-position: center top;">
        <!-- Mask -->
        <span class="mask bg-gradient-default opacity-8"></span>
        <!-- Header container -->
        <div class="container-fluid d-flex align-items-center">
          <div class="row">
            <div class="col-lg-7 col-md-10">
                <h1 class="display-2 text-white">Xin chào <br> {{ profile.firstName }} {{ profile.lastName }} !</h1>
              <p class="text-white mt-0 mb-5">Đây là trang hồ sơ của bạn. Bạn có thể xem tiến độ bạn đã thực hiện với công việc của mình và quản lý các dự án hoặc nhiệm vụ được giao</p>
              <!-- <a href="#!" class="btn btn-info">Lịch hẹn của tôi</a> -->
              <a href="#!" class="btn btn-info" @click.prevent="goToCalendar">Lịch hẹn của tôi</a>

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
                    <div class="avatar-container">
                      <a href="#" @click="triggerFileInput">
                        <img :src="profile.avatar || 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba56a465-265c-4688-9d51-58622cc0fe3e/d7i70mg-682de519-2f5a-4829-8317-bc23e002a1de.jpg/v1/fit/w_504,h_756,q_70,strp/op_luffy_by_zzyzzyy_d7i70mg-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzU2IiwicGF0aCI6IlwvZlwvYmE1NmE0NjUtMjY1Yy00Njg4LTlkNTEtNTg2MjJjYzBmZTNlXC9kN2k3MG1nLTY4MmRlNTE5LTJmNWEtNDgyOS04MzE3LWJjMjNlMDAyYTFkZS5qcGciLCJ3aWR0aCI6Ijw9NTA0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ju9xyBL_lMGsPWYtPn1Jw5WokCKQ_-mTzQsgYjA0t6M'" class="rounded-circle" />
                        <input type="file" ref="fileInput" class="d-none" @change="handleAvatarUpload" />
                        <div class="upload-icon">
                          <i class="fa fa-upload"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div class="d-flex justify-content-between">
                  <!-- <a href="#" class="btn btn-sm btn-info mr-4">Đăng ký làm mentor</a> -->
                  <a href="#" class="btn btn-sm btn-default float-right">Đăng ký dự án</a>
                </div>
              </div>
              <div class="card-body pt-0 pt-md-4">
                <div class="row">
                  <div class="col">
                    <div class="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span class="heading">22</span>
                        <span class="description">Bạn bè</span>
                      </div>
                      <div>
                        <span class="heading">10</span>
                        <span class="description">Bài đăng</span>
                      </div>
                      <div>
                        <span class="heading">89</span>
                        <span class="description">Thích</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <h3>
                    {{ profile.lastName }}<span class="font-weight-light">, 27 year-old</span>
                  </h3>
                  <div class="h5 font-weight-300">
                    <!-- <i class="ni location_pin mr-2"></i>Bucharest, Romania -->
                  </div>
                  <div class="h5 mt-4">
                    <i class="ni business_briefcase-24 mr-2"></i>IT - AI
                  </div>
                  <div>
                    <i class="ni education_hat mr-2"></i>Trường đại học Công Thương thành phố Hồ Chí Minh
                  </div>
                  <hr class="my-4">
                  <!-- <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p> -->
                  <a href="#">Hiển thị thêm</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8 order-xl-1">
            <div class="card bg-secondary shadow">
              <div class="card-header bg-white border-0">
                <div class="row align-items-center">
                  <div class="col-8">
                    <h3 class="mb-0">Tài khoản của tôi</h3>
                  </div>
                  <div class="col-4 text-right">
                    <button @click="toggleEdit" class="btn btn-sm" :class="{'btn-primary': !isEditing, 'btn-success': isEditing}">
                      {{ isEditing ? 'Lưu' : 'Chỉnh sửa' }}
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form>
                  <h6 class="heading-small text-muted mb-4">Thông tin cá nhân</h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-username">Tên đăng nhập</label>
                          <input 
                            type="text" 
                            id="input-username" 
                            class="form-control form-control-alternative" 
                            :placeholder="profile.username ? profile.username : 'Username'" 
                            v-model="profile.username"
                            :disabled="!isEditing"
                          />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label class="form-control-label" for="input-email">Email address</label>
                          <input 
                            type="email" 
                            id="input-email" 
                            class="form-control form-control-alternative" 
                            placeholder="jesse@example.com" 
                            v-model="profile.email"
                            :disabled="!isEditing"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-first-name">First name</label>
                          <input 
                            type="text" 
                            id="input-first-name" 
                            class="form-control form-control-alternative" 
                            placeholder="First name" 
                            v-model="profile.firstName"
                            :disabled="!isEditing"
                            >
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-last-name">Last name</label>
                          <input 
                            type="text" 
                            id="input-last-name" 
                            class="form-control form-control-alternative" 
                            placeholder="Last name" 
                            v-model="profile.lastName"
                            :disabled="!isEditing"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4">
                  <!-- Address -->
                  <!-- <h6 class="heading-small text-muted mb-4">Contact information</h6>
                  <div class="pl-lg-4">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-address">Address</label>
                          <input id="input-address" class="form-control form-control-alternative" placeholder="Home Address" value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-4">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-city">City</label>
                          <input type="text" id="input-city" class="form-control form-control-alternative" placeholder="City" value="New York">
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group focused">
                          <label class="form-control-label" for="input-country">Country</label>
                          <input type="text" id="input-country" class="form-control form-control-alternative" placeholder="Country" value="United States">
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="form-group">
                          <label class="form-control-label" for="input-country">Postal code</label>
                          <input type="number" id="input-postal-code" class="form-control form-control-alternative" placeholder="Postal code">
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr class="my-4"> -->
                  <!-- Description -->
                  <h6 class="heading-small text-muted mb-4">Giới thiệu bản thân</h6>
                  <div class="pl-lg-4">
                    <div class="form-group focused">
                      <label>Cá nhân tôi</label>
                      <textarea 
                        rows="4" 
                        class="form-control form-control-alternative" 
                        placeholder="Viết về cá nhân bạn"
                        :disabled="!isEditing">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.
                      </textarea>
                    </div>
                  </div>

                  <h6 class="heading-small text-muted mb-4">Giải thưởng</h6>
                  <div class="pl-lg-4">
                    <div class="form-group focused">
                      <label>Chi tiết giải thưởng</label>
                      <textarea 
                        rows="4" 
                        class="form-control form-control-alternative" 
                        placeholder="Viết về cá nhân bạn"
                        :disabled="!isEditing">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.
                      </textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </template>

<script>
export default {
  data() {
    return {
      profile: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        description: '',
        awards: '',
        avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba56a465-265c-4688-9d51-58622cc0fe3e/d7i70mg-682de519-2f5a-4829-8317-bc23e002a1de.jpg/v1/fit/w_504,h_756,q_70,strp/op_luffy_by_zzyzzyy_d7i70mg-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzU2IiwicGF0aCI6IlwvZlwvYmE1NmE0NjUtMjY1Yy00Njg4LTlkNTEtNTg2MjJjYzBmZTNlXC9kN2k3MG1nLTY4MmRlNTE5LTJmNWEtNDgyOS04MzE3LWJjMjNlMDAyYTFkZS5qcGciLCJ3aWR0aCI6Ijw9NTA0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ju9xyBL_lMGsPWYtPn1Jw5WokCKQ_-mTzQsgYjA0t6M',
      },
      isEditing: false,
    };
  },
  methods: {
    toggleEdit() {
        this.isEditing = !this.isEditing;
        if (!this.isEditing) {
          this.saveChanges();
        }
      },
      goToCalendar() {
      this.$router.push('/calendar');
    },
      saveChanges() {
        console.log('Lưu thông tin:', this.profile);
        // Có thể sử dụng localStorage để lưu thông tin:
        // localStorage.setItem('currentUser', JSON.stringify(this.profile));
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
    loadProfileFromLocalStorage() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser) {
        this.profile.firstName = currentUser.firstName || '';
        this.profile.lastName = currentUser.lastName || '';
        this.profile.username = currentUser.username || '';
        this.profile.email = currentUser.email || '';
        this.profile.avatar = currentUser.avatar || this.profile.avatar;
      }
    }
  },
  mounted() {
    this.loadProfileFromLocalStorage();
  }
};
</script>

<style scoped>
@import '@/assets/styles/userProfile.css';
</style>