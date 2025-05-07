<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  targetVolume: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    default: '',
  },
  duration: {
    type: Number,
    default: 9000, // Default duration is 4000ms (4 seconds)
  },
  decimalPlaces: {
    type: Number,
    default: 0, 
  },  
});

const animatedVolume = ref(0);

const animateVolume = (targetValue) => {
  const start = 0;
  const end = targetValue || 0;
  const duration = props.duration; // Use the passed duration prop
  const increment = (end - start) / (duration / 10);
  let current = start;

  const interval = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(interval);
    }
    if (props.decimalPlaces === 0) {
      animatedVolume.value = Math.round(current); // Round to the nearest integer
    } else if (props.decimalPlaces === 1) {
      animatedVolume.value = current; 
    }
  }, 10);
};

onMounted(() => animateVolume(props.targetVolume));
watch(() => props.targetVolume, (newVal) => animateVolume(newVal));
</script>

<template>
  <div>
    {{ animatedVolume.toFixed(props.decimalPlaces) }}&nbsp;<span v-html="unit"></span>
  </div>
</template>

<style scoped>
</style>
