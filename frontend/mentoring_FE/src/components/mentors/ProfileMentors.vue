<template>
    <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
    
        <header class="header">
        <div class="container">  
            <div class="header-content">
                <!-- <h4 class="header-subtitle" >Hello, I am</h4> -->
                <h1 class="header-title">Nguyễn Tấn Huy</h1>
                <h2 class="header-mono">Giám đốc TRUNG TÂM HUẤN LUYỆN KỸ NĂNG THẾ HỆ TRẺ</h2>
            </div>
            <!-- Avatar Section -->
            <div class="avatar-wrapper">
            <img :src="avatarSrc" alt="Avatar" class="avatar" id="avatar" @click="triggerFileInput">
            <input type="file" id="avatar-input" accept="image/*" style="display:none" @change="changeAvatar">
        </div>
            
        </div>
    </header>

        <div class="container-fluid">
            <div id="about" class="row about-section">
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">Giới thiệu về tôi</h3>
                    <span class="line mb-5"></span>
                    <h6 class="mb-3">- Chủ tịch HĐQT CÔNG TY CP VBI</h6>
                    <h6 class="mb-3">- Phó Viện trưởng Viện Phát triển Doanh nhân Việt Nam</h6>
                    <h6 class="mb-3">- Phó TGĐ LYND Holdings</h6>
                    <h6 class="mb-3">- Tổng TK LIÊN HIỆP KHOA HỌC DOANH NHÂN VN</h6>
                    <h6 class="mb-3">- Chủ tịch HĐ cố vấn VƯỜN ƯƠM KHỞI NGHIỆP VIỆT</h6>
                    <h6 class="mb-3">- Phó CT LIÊN HIỆP PHÁT TRIỀN KINH TÉ VÀ GIÁO DỤC</h6>
                    <h6 class="mb-3">- Phó CT CLB Doanh nhân CHỮ THẬP ĐỎ</h6>
                    <!-- <p class="mt-20">- Giám đốc TRUNG TÂM HL KỸ NĂNG THẾ HỆ TRẺ</p> -->
                </div>
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">Chuyên môn</h3>
                    <span class="line mb-5"></span>
                    <ul class="mt40 info list-unstyled">
                        <!-- <li><span>Birthdate</span> : 09/13/1996</li> -->
                        <li><h6>Chuyên viên Maketing</h6> </li>
                        <li><h6>Quản trị kinh doanh</h6>  </li>
                        <!-- <li><span>Skype</span> : John_Doe </li> -->
                        <!-- <li><span>Địa chỉ</span> :  12345 Fake ST NoWhere AB Country.</li> -->
                         
                    </ul>
                    
                </div>
                <div class="col-lg-4 about-card">
                    <h3 class="font-weight-light">Công tác</h3>
                    <span class="line mb-5"></span>
                    <!-- <div class="row">
                        <div class="col-1 text-danger pt-1"><i class="ti-widget icon-lg"></i></div>
                        <div class="col-10 ml-auto mr-3">
                            <h6>UX Design</h6>
                            <p class="subtitle"> exercitat Repellendus,  corrupt.</p>
                            <hr>
                        </div>
                    </div> -->
                    <div class="row">
                        <!-- <div class="col-1 text-danger pt-1"><i class="ti-paint-bucket icon-lg"></i></div> -->
                        <div class="col-10 ml-auto mr-3">
                            <h6>Kinh doanh + Kỹ thuật: lĩnh vực Điện tử - Thiết bị giải trí số. </h6>
                            <!-- <p class="subtitle">Lorem ipsum dolor sit consectetur.</p> -->
                            <hr>
                        </div>
                    </div>
                    <div class="row">
                        <!-- <div class="col-1 text-danger pt-1"><i class="ti-stats-up icon-lg"></i></div> -->
                        <div class="col-10 ml-auto mr-3">
                            <h6>1992 - 2012</h6>
                            <p class="subtitle">Điều hành hoạt động kinh doanh lĩnh vực điện tử dân dụng và đào tạo đội ngũ có 
                                tay nghề Điện tử từ năm 1992-2009. Phát triển thị trường lĩnh vực điện tử - thiết bị số 2002-2012 
                                cho các nhãn hàng thương hiệu của USA như IPod Apple (tiền thân IPhone), 
                                JBL - HarmanKardon, Belkin, Marvvare, XtremeMax, Mophie, Griííin, của Korea : Mobitren, Zenus, Bluetrek (France).</p>
                            <hr>
                        </div>
                    </div>
                    <div class="row">
                        <!-- <div class="col-1 text-danger pt-1"><i class="ti-stats-up icon-lg"></i></div> -->
                        <div class="col-10 ml-auto mr-3">
                            <h6>2012 - nay</h6>
                            <p class="subtitle">Thành viên hội đồng quàn trị, cố vắn các Công ty cổ phần thuộc các lĩnh vực: 
                                Thiết bị số -   Công nghệ - Giáo dục đào tạo - Nông sản - Lâm sản - Truyền thông sự kiện - Bất động sản - Đầu tư  
                                Thương mại dịch vụ & các dự án khởi nghiệp</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Resume Section-->
        <section class="section" id="resume">
            <div class="container">
                <h2 class="mb-5"><span class="text-danger">Hành trình sự nghiệp </span></h2>
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                        <div class="card-header">
                                <div class="mt-2">
                                    <h4>Kiến thức </h4>
                                    <span class="line"></span>  
                                </div>
                            </div>
                            <div class="card-body">
                                <h6 class="title text-danger">2017 - Present</h6>
                                <P>UX Developer</P>
                                <P class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</P>
                                <hr>
                                <h6 class="title text-danger">2016 - 2017</h6>
                                <P>Front-end Developer</P>
                                <P class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</P>
                                <hr>
                                <h6 class="title text-danger">2015 - 2016</h6>
                                <P>UX Designer</P>
                                <P class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</P>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card">
                        <div class="card-header">
                                <div class="mt-2">
                                    <h4>Kinh nghiệm</h4>
                                    <span class="line"></span>  
                                </div>
                            </div>
                            <div class="card-body">
                                <h6 class="title text-danger">2017 - Present</h6>
                                <P>B.E Computer Engineering</P>
                                <P class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error corrupti recusandae obcaecati odit repellat ducimus cum, minus tempora aperiam at.</P>
                                <hr>
                                <h6 class="title text-danger">2016 - 2017</h6>
                                <P>Diploma in Computer Engineering</P>
                                <P class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, id officiis quas placeat quia voluptas dolorum rem animi nostrum quae.aliquid repudiandae saepe!.</P>
                                <hr>
                                <h6 class="title text-danger">2015 - 2016</h6>
                                <P>High School Degree</P>
                                <P class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</P>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                        <div class="card-header">
                                <div class="pull-left">
                                    <h4 class="mt-2">Thành tích</h4>
                                    <span class="line"></span>  
                                </div>
                            </div>
                            <div class="card-body pb-2">
                            <h6>hTL5 &amp; CSS3</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 97%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>JavaScript</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 85%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>PHP</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>SQL</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 90%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Laborum</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 90%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Tempora</h6>
                                <div class="progress mb-3">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 90%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        

    </body>
</template>


<script>

export default {
  data() {
    return {
      avatarSrc: "", // Để trống ban đầu
    };
  },
  mounted() {
    this.loadAvatar(); // Tải ảnh từ localStorage khi trang được tải lại
  },
  methods: {
    triggerFileInput() {
      document.getElementById("avatar-input").click();
    },
    changeAvatar(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.avatarSrc = e.target.result; // Cập nhật ảnh mới
          localStorage.setItem("avatar", this.avatarSrc); // Lưu ảnh vào localStorage
        };
        reader.readAsDataURL(file); // Đọc file ảnh
      }
    },
    loadAvatar() {
      const storedAvatar = localStorage.getItem("avatar");
      if (storedAvatar) {
        this.avatarSrc = storedAvatar; // Tải ảnh từ localStorage nếu có
      } else {
        this.avatarSrc = "https://th.bing.com/th/id/OIP.yOD5jRikpBqmzEsOyH4VLAHaHa?rs=1&pid=ImgDetMain"; // Đường dẫn mặc định
      }
    },
  },
};
</script>

<style scoped>
@import './assets/css/johndoe.css';
@import './assets/vendors/themify-icons/css/themify-icons.css';
</style>
