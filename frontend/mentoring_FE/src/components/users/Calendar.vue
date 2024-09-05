<template>
  <div class="calendar-container">
    <div class="calendar-header">
      <h1>
        {{ currentMonthName }}
        <button>▾</button>
      </h1>
      <p>{{ currentYear }}</p>
    </div>
    <div class="calendar">
      <span class="day-name" v-for="(day, index) in dayNames" :key="index">
        {{ day }}
      </span>

      <div
        class="day"
        :class="{ 'day--disabled': isDisabled(day) }"
        v-for="(day, index) in daysInMonth"
        :key="index"
      >
        {{ day }}
        <div v-for="(info, idx) in getMentorAvailabilityForDay(day)" :key="idx">
          <span class="mentor-info">{{ info.note }}</span>
        </div>
        <div v-if="isUserMatched(day)">
          <span class="user-matching">You have a match!</span>
        </div>
      </div>
    </div>

    <!-- <section class="task task--warning">Projects</section>
    <section class="task task--danger">Design Sprint</section>
    <section class="task task--primary">
      Product Checkup 1
      <div class="task__detail">
        <h2>Product Checkup 1</h2>
        <p>15-17th {{ currentMonthName }}</p>
      </div>
    </section>
    <section class="task task--info">Product Checkup 2</section> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysInMonth: [],
      currentMonthName: "",
      currentYear: "",
      mentorAvailability: [],
      userMatches: [],
    };
  },
  methods: {
    getDaysInMonth(year, month) {
      const date = new Date(year, month, 1);
      const days = [];
      while (date.getMonth() === month) {
        days.push(date.getDate());
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
    isDisabled(day) {
      const today = new Date();
      const isPastMonth = today.getMonth() !== this.getCurrentMonthIndex();
      return day < today.getDate() && isPastMonth;
    },
    getCurrentMonthIndex() {
      return new Date().getMonth();
    },
    getCurrentYear() {
      return new Date().getFullYear();
    },
    getCurrentMonthName() {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      return monthNames[this.getCurrentMonthIndex()];
    },

    // Fetch mentor availability from the API
    async fetchMentorAvailability() {
      try {
        const response = await axios.get("http://localhost:3001/mentor");

        if (response.data && Array.isArray(response.data)) {
          const mentorData = response.data;

          // Store mentor data with availability information
          this.mentorAvailability = mentorData.map(mentor => ({
            id: mentor.id,
            name: mentor.name,
            freeTime: mentor.FreeTime,
            availability: this.parseAvailability(mentor.FreeTime) // Array of days and time range
          }));
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching mentor data:", error);
      }
    },

    // Fetch user matches from the API
    async fetchUserMatches() {
      try {
        const response = await axios.get("http://localhost:4000/matching");
        this.userMatches = response.data.matching || [];
      } catch (error) {
        console.error("Error fetching matching data:", error);
        this.userMatches = [];
      }
    },

    // Parse the availability string into a more usable format
    parseAvailability(freeTime) {
      const [daysPart, timesPart] = freeTime.split(" ");
      const daysRanges = daysPart.split(",").map(dayRange => dayRange.trim());

      const dayNames = this.dayNames;
      let days = [];
      
      daysRanges.forEach(range => {
        const [startDay, endDay] = range.split(" - ").map(day => day.trim());
        const startIndex = dayNames.indexOf(startDay);
        const endIndex = endDay ? dayNames.indexOf(endDay) : startIndex;
        if (startIndex !== -1) {
          for (let i = startIndex; i <= endIndex; i++) {
            days.push(dayNames[i]);
          }
        }
      });

      days = [...new Set(days)];

      const [startTime, endTime] = timesPart.split("-");
      return {
        days: days,  // Array of days (e.g., ["Mon", "Tue", "Wed"])
        timeRange: `${startTime.trim()} - ${endTime.trim()}` // Time range as "hh:mm - hh:mm"
      };
    },

    // Check if mentor is available on a specific day and return the info
    getMentorAvailabilityForDay(day) {
      // Tính toán tên ngày của tuần cho ngày hiện tại
      const dayOfWeek = new Date(this.currentYear, this.getCurrentMonthIndex(), day).getDay();
      const dayName = this.dayNames[dayOfWeek]; // "Mon", "Tue", "Wed", ...

      const availabilityInfo = [];

      // Lặp qua từng mentor để kiểm tra lịch rảnh
      this.mentorAvailability.forEach(mentor => {
        const { days, timeRange } = mentor.availability;
        // Kiểm tra nếu mentor có mặt trong ngày hiện tại
        if (days.includes(dayName)) {
          // Thêm thông báo cho ngày hiện tại
          const note = `Gặp gỡ mentor ${mentor.name} ${timeRange}`;
          availabilityInfo.push({ note });
        }
      });

      return availabilityInfo;
    },

    // Check if the user has a match on this day
    isUserMatched(day) {
      const date = new Date(this.currentYear, this.getCurrentMonthIndex(), day);
      return this.userMatches.some(match => {
        const matchDate = new Date(match.timestamp);
        return matchDate.toDateString() === date.toDateString();
      });
    },

    // Load current user from localStorage
    loadProfileFromLocalStorage() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      return currentUser ? currentUser.id : null; // Giả sử bạn lưu trữ userId dưới khóa 'id'
    },

    // Display the current user's mentor matches with available times on console
    displayUserMatchingWithMentors() {
      const currentUserId = this.loadProfileFromLocalStorage();

      if (!currentUserId) {
        console.error('No user found in localStorage');
        return;
      }

      // Filter matches for the current user
      const userMentorMatches = this.userMatches.filter(match => match.userId === currentUserId);

      userMentorMatches.forEach(match => {
        const mentor = this.mentorAvailability.find(mentor => mentor.id === parseInt(match.mentorId));
        if (mentor) {
          console.log(`User is matched with Mentor: ${mentor.name}`);
          console.log(`Available Time: ${mentor.freeTime}`);
          console.log('---');
        }
      });
    },
  },

  async mounted() {
    this.currentMonthName = this.getCurrentMonthName();
    this.currentYear = this.getCurrentYear();
    this.daysInMonth = this.getDaysInMonth(
      this.currentYear,
      this.getCurrentMonthIndex()
    );

    await this.fetchMentorAvailability();
    await this.fetchUserMatches();
    
    // Display the matching information on the console
    this.displayUserMatchingWithMentors();
  },
};
</script>


<style scoped>
@import '@/assets/styles/calendar.css';
</style>
