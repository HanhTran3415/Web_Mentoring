<template>
  <div class="container">
  <h1>BẠN ĐĂNG KÝ THÀNH VIÊN TẠI ĐÂY</h1>
    <form @submit.prevent="handleSubmit" autocomplete="on">
      <!-- First Name -->
      <div class="box">
        <label for="firstName" class="fontLabel">Họ:</label>
        <div class="iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
        <div class="inputBox">
          <input
            type="text"
            id="firstName"
            v-model="form.firstName"
            @blur="validateField('firstName')"
            placeholder="Họ"
            required
          />
          <span class="error">{{ errors.firstName }}</span>
        </div>
      </div>

      <!-- Last Name -->
      <div class="box">
        <label for="lastName" class="fontLabel">Tên:</label>
        <div class="iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
        <div class="inputBox">
          <input
            type="text"
            id="lastName"
            v-model="form.lastName"
            @blur="validateField('lastName')"
            placeholder="Tên"
            required
          />
          <span class="error">{{ errors.lastName }}</span>
        </div>
      </div>

      <!-- Username -->
      <div class="box">
        <label for="username" class="fontLabel">Tên đăng nhập:</label>
        <div class="iconBox"><i class="fa fa-user" aria-hidden="true"></i></div>
        <div class="inputBox">
          <input
            type="text"
            id="username"
            v-model="form.username"
            @blur="validateField('username')"
            placeholder="Tên đăng nhập"
            required
          />
          <span class="error">{{ errors.username }}</span>
        </div>
      </div>

      <!-- Password -->
      <div class="box">
        <label for="password" class="fontLabel">Mật khẩu:</label>
        <div class="iconBox"><i class="fa fa-key" aria-hidden="true"></i></div>
        <div class="inputBox">
          <input
            type="password"
            id="password"
            v-model="form.password"
            @blur="validateField('password')"
            placeholder="Mật khẩu"
            required
          />
          <span class="error">{{ errors.password }}</span>
        </div>
      </div>

      <!-- Confirm Password -->
      <div class="box">
        <label for="confirmPassword" class="fontLabel">Xác minh mật khẩu:</label>
        <div class="iconBox"><i class="fa fa-key" aria-hidden="true"></i></div>
        <div class="inputBox">
          <input
            type="password"
            id="confirmPassword"
            v-model="form.confirmPassword"
            @blur="validateField('confirmPassword')"
            placeholder="Xác minh mật khẩu"
            required
          />
          <span class="error">{{ errors.confirmPassword }}</span>
        </div>
      </div>

      <!-- Email -->
      <div class="box">
        <label for="email" class="fontLabel">Email:</label>
        <div class="iconBox"><i class="fa fa-envelope" aria-hidden="true"></i></div>
        <div class="inputBox">
          <input
            type="email"
            id="email"
            v-model="form.email"
            @blur="validateField('email')"
            placeholder="Email"
            required
          />
          <span class="error">{{ errors.email }}</span>
        </div>
      </div>

      <!-- Phone Number -->
      <div class="box">
        <label for="phoneNo" class="fontLabel">Số điện thoại:</label>
        <div class="iconBox"><i class="fa fa-phone" aria-hidden="true"></i></div>
        <div class="inputBox">
          <input
            type="text"
            id="phoneNo"
            v-model="form.contactNo"
            @blur="validateField('contactNo')"
            placeholder="Số điện thoại"
            required
          />
          <span class="error">{{ errors.contactNo }}</span>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="box submitBox">
        <input type="submit" class="submit" value="ĐĂNG KÝ">
      </div>

      <!-- Login Link -->
      <div class="box">
        <p class="loginLink">Đã có tài khoản? <a href="/login"><b>Đăng nhập</b></a></p>
      </div>
    </form>
  </div>
</template>
  
<script>
export default {
    name: 'Signup',
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                confirmPassword: '',
                email: '',
                contactNo: ''
            },
            errors: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                confirmPassword: '',
                email: '',
                contactNo: ''
            },
            successMessage: false
        };
    },
    methods: {
        async handleSubmit() {
            let isValid = true;

            // Validate each field
            for (const key in this.errors) {
                if (this.errors[key]) isValid = false;
            }

            if (!isValid) return;

            if (this.form.password !== this.form.confirmPassword) {
                alert('Mật khẩu không khớp!');
                return;
            }

            if (!this.isStrongPassword(this.form.password)) {
                alert('Mật khẩu không đủ mạnh! Đảm bảo mật khẩu có ít nhất 8 ký tự, bao gồm chữ cái, số và ký tự đặc biệt.');
                return;
            }

            // Kiểm tra sự tồn tại của email và số điện thoại
            try {
                const response = await fetch('https://6w35hlsj-3000.asse.devtunnels.ms/register');
                if (response.ok) {
                    const data = await response.json();

                    // Kiểm tra email và số điện thoại đã tồn tại
                    const emailExists = data.some(user => user.email === this.form.email);
                    const contactNoExists = data.some(user => user.contactNo === this.form.contactNo);

                    if (emailExists) {
                        this.errors.email = 'Email đã tồn tại!';
                        isValid = false;
                    }

                    if (contactNoExists) {
                        this.errors.contactNo = 'Số điện thoại đã tồn tại!';
                        isValid = false;
                    }

                    if (!isValid) return;

                    // Gửi yêu cầu đăng ký nếu không có lỗi
                    const registerResponse = await fetch('https://6w35hlsj-3000.asse.devtunnels.ms/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(this.form),
                    });

                    if (registerResponse.ok) {
                        this.successMessage = true;
                        // Đặt lại form
                        this.form = {
                            firstName: '',
                            lastName: '',
                            username: '',
                            password: '',
                            confirmPassword: '',
                            email: '',
                            contactNo: ''
                        };
                    } else {
                        alert('Đăng ký thất bại!');
                    }
                } else {
                    alert('Lỗi kết nối đến server!');
                }
            } catch (error) {
                console.error('Lỗi khi gửi dữ liệu:', error);
                alert('Đã xảy ra lỗi!');
            }
        },
        validateField(field) {
            switch (field) {
                case 'firstName':
                    this.errors.firstName = this.form.firstName ? '' : 'Vui lòng nhập họ';
                    break;
                case 'lastName':
                    this.errors.lastName = this.form.lastName ? '' : 'Vui lòng nhập tên';
                    break;
                case 'username':
                    this.errors.username = this.form.username ? '' : 'Vui lòng nhập tên đăng nhập';
                    break;
                case 'password':
                    this.errors.password = this.form.password
                        ? this.isStrongPassword(this.form.password) ? '' : 'Mật khẩu không đủ mạnh'
                        : 'Vui lòng nhập mật khẩu';
                    break;
                case 'confirmPassword':
                    this.errors.confirmPassword = this.form.confirmPassword
                        ? this.form.confirmPassword === this.form.password ? '' : 'Mật khẩu xác minh không khớp'
                        : 'Vui lòng xác minh mật khẩu';
                    break;
                case 'email':
                    this.errors.email = this.validateEmail(this.form.email) ? '' : 'Địa chỉ email không hợp lệ';
                    break;
                case 'contactNo':
                    this.errors.contactNo = this.validateContactNo(this.form.contactNo)
                        ? ''
                        : 'Số điện thoại không hợp lệ! Phải bắt đầu bằng 0 và có ít nhất 10 chữ số';
                    break;
                default:
                    break;
            }
        },
        clearError(field) {
            if (this.errors[field] && this.form[field]) {
                this.validateField(field);
            }
        },
        validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        validateContactNo(contactNo) {
            const contactNoRegex = /^0\d{9,}$/;
            return contactNoRegex.test(contactNo);
        },
        isStrongPassword(password) {
            // Điều kiện kiểm tra mật khẩu mạnh
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            return passwordRegex.test(password);
        }
    }
}
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});
</script>


<style scoped>
@import '@/assets/styles/SignUp.css';
</style>

  

