<template>
    <a-modal
      v-model:open="open"
      title="Feedback"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <form @submit.prevent="submitFeedback">
        <p>Đánh giá chương trình mentoring trên thang điểm 5. Bạn cảm thấy như thế nào?</p>
        <div class="star-rating">
          <span
            v-for="star in maxStars"
            :key="star"
            class="star"
            :class="{ filled: star <= rating }"
            @click="setRating(star)"
          >
            ★
          </span>
        </div>
        <br />
        <p>{{ getDescription }}</p>
        <p>Xin vui lòng cho tôi góp ý tôi sẽ hoàn thiện tốt hơn</p>
        <textarea v-model="comment"></textarea>
        <br /><br />
        <a-button type="primary" @click="submitFeedback">Gửi đóng góp</a-button>
      </form>
    </a-modal>
  </template>
  
  <script lang="ts" setup>
  import { ref, watch, computed, defineProps, defineEmits } from 'vue';
  import { message } from 'ant-design-vue';
  
  const props = defineProps({
    modelValue: Boolean,
    maxStars: {
      type: Number,
      default: 5
    }
  });
  const emit = defineEmits(['update:modelValue']);
  
  const rating = ref<number>(0);
  const comment = ref<string>('');
  const open = ref<boolean>(props.modelValue);
  const confirmLoading = ref<boolean>(false);
  const desc = ref<string[]>(['terrible', 'bad', 'normal', 'good', 'wonderful']);
  const feedbackSubmitted = ref<boolean>(false);
  
  // Watch for changes in props to sync with local state
  watch(() => props.modelValue, (newVal) => {
    open.value = newVal;
    feedbackSubmitted.value = false; // Reset feedbackSubmitted when modal opens
  });
  
  // Set rating
  const setRating = (ratingValue: number) => {
    rating.value = ratingValue;
  };
  
  // Get description based on rating
  const getDescription = computed(() => {
    return desc.value[rating.value - 1] || '';
  });
  
  // Display a message
  const showMessage = (type: 'info' | 'success' | 'error', content: string) => {
    message[type](content);
  };
  
  // Submit feedback
  const submitFeedback = () => {
    const feedbackData = {
      rating: rating.value,
      comment: comment.value
    };
  
    console.log("Feedback submitted:", feedbackData);
    showMessage('success', 'Cảm ơn sự đóng góp ý kiển của bạn! Chúng tôi sẽ cố gắng cải thiện dựa trên đề xuất của bạn.');
    feedbackSubmitted.value = true; // Mark feedback as submitted
  };
  
  // Handle OK button click
  const handleOk = () => {
    console.log("Modal OK clicked");
    if (feedbackSubmitted.value) {
      emit('update:modelValue', false); // Close the modal if feedback is submitted
    }
  };
  
  // Handle Cancel button click
  const handleCancel = () => {
    console.log("Modal Cancel clicked");
    emit('update:modelValue', false); // Close the modal
  };
  </script>
  
  <style scoped>
@import '@/assets/styles/Feedback.css';
  </style>
  