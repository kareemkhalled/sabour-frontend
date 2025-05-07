<script setup>
import { ref, watch, onMounted, computed } from 'vue';

const props = defineProps({
  value: Number,
  width: String,
  height: String,
  max_value: {
    type: Number,
    default: 100, // Adjust to your maximum value
  },
  duration: {
    type: Number,
    default: 3000,
  },
  showArrow: {
    type: Boolean,
    default: true, // Show the arrow by default
  },
  bar_color: {
    type: String,
    default: '#3498db', // Default fill color for the bar
  },
});

const animatedValue = ref(0);
const startTime = ref(null);

const width = computed(() => props.width || '100%');
const height = computed(() => props.height || '20px');

const fill_value = computed(() => (animatedValue.value / props.max_value) * 100);

const animate = (timestamp) => {
  if (!startTime.value) startTime.value = timestamp;
  const elapsed = timestamp - startTime.value;
  const progress = Math.min(elapsed / props.duration, 1);
  animatedValue.value = progress * props.value;

  if (progress < 1) {
    requestAnimationFrame(animate);
  }
};

watch(
  () => props.value,
  () => {
    startTime.value = null;
    requestAnimationFrame(animate);
  }
);

onMounted(() => {
  startTime.value = null;
  requestAnimationFrame(animate);
});
</script>

<template>
  <div class="progress-container" :style="{ width: width, height: height }">
    <div class="progress-bg">
      <div class="segment color"></div>
    </div>

    <!-- Dynamic filled bar -->
    <div
      class="progress-fill"
      :style="{
        width: fill_value + '%',
        backgroundColor: props.bar_color,
      }"
    ></div>
  </div>
</template>

<style scoped>
.progress-container {
  position: relative;
  background-color: #333;
  border-radius: 0vi;
  overflow: hidden;
}
/* Background segments */
.progress-bg {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
.segment {
  height: 100%;
  flex-grow: 1;
  background-size: 0.6vi 0.6vi;
  background-repeat: repeat;
}
.color {
  width: 100%;
  background-image: linear-gradient(90deg, rgba(3, 3, 3, 0.9) 25%, transparent 25%, transparent 50%, rgba(7, 6, 6, 0.9) 50%, rgba(11, 10, 10, 0.9) 75%, transparent 75%, transparent);
}

/* Filled bar */
.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 0;
  transition: width 0.3s ease;
}
</style>
