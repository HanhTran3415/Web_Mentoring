<template>
  <div class="form_wrapper">
    <div class="form_container">
      <div class="title_container">
        <h2>ĐĂNG NHẬP</h2>
      </div>
      <div class="container" @click="toggleAnimation">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h2>Please Sign In</h2>
          <input type="email" v-model="email" placeholder="email" required />
          <input type="password" v-model="password" placeholder="password" required />
          <h2>&nbsp;</h2>
        </div>
      </div>
      <div class="row clearfix">
        <div class="">
          <form @submit.prevent="handleLogin">
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
              <input v-model="email" type="email" placeholder="Email" required />
            </div>
            <div class="input_field">
              <span><i aria-hidden="true" class="fa fa-lock"></i></span>
              <input v-model="password" type="password" placeholder="Password" required />
            </div>
            <input class="button" type="submit" value="Đăng nhập" />
            <p>Chưa có tài khoản?</p><span style="font-weight: bold;"><router-link to="/"> Đăng ký
                ngay</router-link></span>
          </form>
          <p v-if="errorMessage" class="error_message">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      isAnimated: false, // Dùng để điều khiển hoạt ảnh
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await fetch('http://localhost:3005/login', {
          method: 'POST', // Sử dụng POST để gửi thông tin đăng nhập
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email, // Nếu bạn sử dụng email làm tên đăng nhập
            password: this.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Login response data:', data);
          // Lưu thông tin người dùng vào localStorage
          localStorage.setItem('currentUser', JSON.stringify(data));
          // // Điều hướng đến trang Home sau khi đăng nhập thành công
          // this.$router.push('/home');

          // Kiểm tra role của người dùng và điều hướng tương ứng
          if (data.role === 'user') {
            this.$router.push('/home');
          } else if (data.role === 'admin') {
            this.$router.push('/dashboard');
          } else {
            this.errorMessage = 'Role không xác định';
          }
        } else {
          const errorData = await response.json();
          this.errorMessage = errorData.message; // Hiển thị thông báo lỗi từ server
        }
      } catch (error) {
        console.error('Lỗi khi gửi dữ liệu:', error);
        this.errorMessage = 'Đã xảy ra lỗi!';
      }
    },
    toggleAnimation() {
      this.isAnimated = !this.isAnimated;
    },
  },

};
</script>

<style scoped>
@import '@/assets/styles/Login.css';
</style>
