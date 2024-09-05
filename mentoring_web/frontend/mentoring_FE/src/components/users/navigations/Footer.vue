<template>
    <div class="footer" id="waterdrop">
        <!-- Heading Section -->
        <div class="heading">
          <div class="logo" @click="navigateToHome">
            <img loading="lazy" width="960" height="960" src="https://mentoring.edu.vn/wp-content/uploads/2024/03/logo_TTHLKN.jpg" class="custom-logo" alt="MENTORING" decoding="async">
          </div>
          <h1 class="center-text">TRUNG TÂM HUẤN LUYỆN THẾ HỆ TRẺ</h1>
        </div>


        <!-- Content Section -->
        <div class="content">
                <!-- Details Section -->
                <div class="details">
            <h4 class="address">Địa chỉ</h4>
            <p>14 Lam Sơn<br />phường 2 quận Tân Bình</p>
            <h4 class="mobile">Hotline</h4>
            <p><a href="#">0373 0404 87</a></p>
            <h4 class="mail">Email</h4>
            <p><a href="#">mentoringvn@gmail.com</a></p>
            <a href="https://www.facebook.com/mentoringvn/?ref=embed_page" target="_blank" class="social-link">
                <i class="fab fa-facebook fa-2x"></i> <!-- Adjust fa-2x for size -->
            </a>

        </div>
        <!-- Services Section -->
        <div class="services">
            <h4>Dịch vụ</h4>
            <p><a href="https://mentoring.edu.vn/trac-nghiem-tam-ly">Trắc nghiệm tâm lý</a></p>
            <p><a href="https://mentoring.edu.vn/thau-hieu-ban-than-387493">Thấu hiểu bản thân</a></p>
            <p><a href="https://mentoring.edu.vn/phat-trien-nang-luc">Phát triển năng lực</a></p>
            <!-- <p><a href="#">Web designing</a></p> -->
        </div>

        <!-- Social Media Section -->
        <div class="social-media">
            <h4>TIN TỨC</h4>
            <p><a href="https://mentoring.edu.vn/bai-viet-tham-khao-2/bai-viet-tham-khao-bai-viet-tham-khao-2"> Câu chuyện chia sẻ</a></p>
            <p><a href="https://mentoring.edu.vn/hoat-dong"> Hoạt động</a></p>
            <p><a href="https://mentoring.edu.vn/lien-he"> Liên hệ</a></p>
            <!-- <p><a href="https://www.instagram.com/codewithfaraz"><i class="fab fa-instagram"></i> Instagram</a></p> -->
        </div>

        <!-- Quick Links Section -->
        <div class="links">
            <h4>Quick links</h4>
            <!-- <p><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Blogs</a></p>
            <p><a href="#">Contact</a></p> -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3919.0343768989997!2d106.6668!3d10.808679!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292372e7a611%3A0xf3bc3b3986dce92c!2zMTQgxJAuIExhbSBTxqFuLCBQaMaw4budbmcgMiwgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1725169169972!5m2!1sen!2sus" width="300" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>


        </div>

        <!-- Footer Section -->
        <footer>
        <hr />
       <b> Địa chỉ: 14 Lam Sơn, Phường 2, Quận Tân Bình, Tp.HCM</b>
        </footer>
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.min.css';

export default {
  mounted() {
    this.initializeRaindropsEffect();
  },
  methods: {
    initializeRaindropsEffect() {
      const scriptRaindrops = document.createElement('script');
      scriptRaindrops.src = "https://daniellaharel.com/raindrops/js/raindrops.js";
      scriptRaindrops.onload = () => {
        $('#waterdrop').raindrops({
          color: '#1c1f2f',
          canvasHeight: 150,
          density: 0.1,
          frequency: 20,
        });
      };
      document.body.appendChild(scriptRaindrops);
    },
    navigateToHome() {
      this.$router.push({ name: 'Home' }); 
    }
  }
};
</script>

<style scoped>
@import '@/assets/styles/Footer.css';


/* Add any scoped styles specific to this component here */
</style>

