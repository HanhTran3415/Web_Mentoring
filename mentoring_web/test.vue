<template>
    <div class="main-content">
      <!-- ...other content... -->
  
      <!-- Page content -->
      <div class="container-fluid mt--7">
        <div class="row">
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
                          />
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
                  <!-- Description -->
                  <h6 class="heading-small text-muted mb-4">Giới thiệu bản thân</h6>
                  <div class="pl-lg-4">
                    <div class="form-group focused">
                      <label>Cá nhân tôi</label>
                      <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        placeholder="A few words about you ..."
                        :disabled="!isEditing"
                        v-model="profile.description"
                      ></textarea>
                    </div>
                  </div>
  
                  <h6 class="heading-small text-muted mb-4">Giải thưởng</h6>
                  <div class="pl-lg-4">
                    <div class="form-group focused">
                      <label>Chi tiết giải thưởng</label>
                      <textarea
                        rows="4"
                        class="form-control form-control-alternative"
                        placeholder="A few words about you ..."
                        :disabled="!isEditing"
                        v-model="profile.awards"
                      ></textarea>
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
        isEditing: false, // Trạng thái chỉnh sửa
      };
    },
    methods: {
      toggleEdit() {
        this.isEditing = !this.isEditing;
        if (!this.isEditing) {
          this.saveChanges();
        }
      },
      saveChanges() {
        // Xử lý lưu thông tin ở đây, ví dụ như lưu vào localStorage hoặc gửi lên server
        console.log('Lưu thông tin:', this.profile);
        // Có thể sử dụng localStorage để lưu thông tin:
        // localStorage.setItem('currentUser', JSON.stringify(this.profile));
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
  