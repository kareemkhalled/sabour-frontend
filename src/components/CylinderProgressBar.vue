<script setup>
import { computed, ref, onMounted } from 'vue';

const props = defineProps({
  value: Number,
  color_cover_1: String,
  color_cover_2: String,
  color_cover_3: String,
  color_fill_1: String,
  color_fill_2: String,
  height: String,
  width: String,
  growth_top: { type: Boolean, default: false },
});

const value = computed(() => props.value || 70); 
const width = computed(() => props.width || '2.5vi');
const height = computed(() => props.height || '8vi');
const color_cover_1 = computed(() => props.color_cover_1 || '#55f');
const color_cover_2 = computed(() => props.color_cover_2 || '#0f0');
const color_cover_3 = computed(() => props.color_cover_3 || '#fff3');
const color_fill_1 = computed(() => props.color_fill_1 || '#55fa');
const color_fill_2 = computed(() => props.color_fill_2 || '#55f2');

const animatedValue = ref(props.growth_top?100:0); // Start from 100% and decrease to the target value
const duration = 11000; 
const startTime = ref(null);

const animateFill = (timestamp) => {
  if (!startTime.value) startTime.value = timestamp;
  const elapsed = timestamp - startTime.value;

  const progress = Math.min(elapsed / duration, 1); // Cap progress at 1 (100%)
  if (props.growth_top) {
    animatedValue.value = progress * value.value;
  } else {
    animatedValue.value = 100 - progress * (100 - value.value);
  }
  if (progress < 1) {
    requestAnimationFrame(animateFill);
  }
};

onMounted(() => {
  requestAnimationFrame(animateFill); // Start animation when the component mounts
});

const cylinderStyle = computed(() => ({
  width: width.value,
  height: height.value,
  borderRadius: '100% / 8%',
  background: `
    radial-gradient(50% 4% at 50% 4%, ${color_cover_1.value} 99.99%, transparent 0),
    radial-gradient(50% 4% at 50% ${animatedValue.value}%, ${color_cover_2.value} 99.99%, transparent 0),
    radial-gradient(50% 4% at 50% 96%, ${color_cover_3.value} 99.99%, transparent 0),
    linear-gradient(${color_fill_1.value} ${animatedValue.value}%, ${color_fill_2.value} 0%)
  `,
}));
</script>

<template>
  <div :style="cylinderStyle"></div>
</template>
