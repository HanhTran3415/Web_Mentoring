<template>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
      <div class="container-fluid py-4">
        <div class="row">
          <div class="col-12">
            <div class="card mb-4">
              <div class="card-header pb-0">
                <h6>Danh sách mentees</h6>
              </div>
              <div class="card-body px-0 pt-0 pb-2">
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Mentee</th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                        <th class="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(author, index) in authors" :key="index">
                        <td>
                          <div class="d-flex px-2 py-1">
                            <div>
                              <img :src="author.image" class="avatar avatar-sm me-3" :alt="'user' + index">
                            </div>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">{{ author.name }}</h6>
                              <p class="text-xs text-secondary mb-0">{{ author.email }}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p class="text-xs font-weight-bold mb-0">{{ author.role }}</p>
                          <p class="text-xs text-secondary mb-0">{{ author.department }}</p>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span :class="['badge badge-sm', author.statusClass]">{{ author.status }}</span>
                        </td>
                        <td class="align-middle text-center">
                          <span class="text-secondary text-xs font-weight-bold">{{ author.employmentDate }}</span>
                        </td>
                        <td class="align-middle">
                          <a href="javascript:;" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap'
  import PerfectScrollbar from 'perfect-scrollbar'
  import 'smooth-scrollbar'
  import '@fortawesome/fontawesome-free/css/all.min.css'
  import '../assets/css/nucleo-icons.css'
  import '../assets/css/nucleo-svg.css'
  import '../assets/css/soft-ui-dashboard.css'
  
  // Import hình ảnh
  import imgTeam2 from '../assets/img/teams/team-2.jpg'
  import imgTeam3 from '../assets/img/teams/team-3.jpg'
  import imgTeam4 from '../assets/img/teams/team-4.jpg'
  
  export default {
    name: 'Tablementee',
    data() {
      return {
        authors: [
          {
            image: imgTeam2,
            name: 'John Michael',
            email: 'john@creative-tim.com',
            role: 'Manager',
            department: 'Organization',
            status: 'Online',
            statusClass: 'bg-gradient-success',
            employmentDate: '23/04/18'
          },
          {
            image: imgTeam3,
            name: 'Alexa Liras',
            email: 'alexa@creative-tim.com',
            role: 'Programator',
            department: 'Developer',
            status: 'Offline',
            statusClass: 'bg-gradient-secondary',
            employmentDate: '11/01/19'
          },
          {
            image: imgTeam4,
            name: 'Laurent Perrier',
            email: 'laurent@creative-tim.com',
            role: 'Executive',
            department: 'Projects',
            status: 'Online',
            statusClass: 'bg-gradient-success',
            employmentDate: '19/09/17'
          },
          {
            image: imgTeam3,
            name: 'Michael Levi',
            email: 'michael@creative-tim.com',
            role: 'Programator',
            department: 'Developer',
            status: 'Online',
            statusClass: 'bg-gradient-success',
            employmentDate: '24/12/08'
          },
          {
            image: imgTeam2,
            name: 'Richard Gran',
            email: 'richard@creative-tim.com',
            role: 'Manager',
            department: 'Executive',
            status: 'Offline',
            statusClass: 'bg-gradient-secondary',
            employmentDate: '04/10/21'
          },
          {
            image: imgTeam4,
            name: 'Miriam Eric',
            email: 'miriam@creative-tim.com',
            role: 'Programtor',
            department: 'Developer',
            status: 'Offline',
            statusClass: 'bg-gradient-secondary',
            employmentDate: '14/09/20'
          }
        ]
      }
    },
    mounted() {
      var win = navigator.platform.indexOf('Win') > -1;
      if (win && document.querySelector('#sidenav-scrollbar')) {
        var options = {
          damping: '0.5'
        }
        PerfectScrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
      }
    }
  }
  </script>
  
  <style lang="css" scoped>
  /* Add component-specific styles here */
  </style>
  