<script setup>
import { computed, ref, onMounted, watch } from 'vue'

const props = defineProps({
  value: Number,
  color_fill_1: String,
  color_fill_2: String,
  height: String,
  width: String,
  font_color: String,
  font_size: String,
  font_family: String,
  duration:String
})

const animatedValue = ref(0)

const duration = computed(() => Number(props.duration) || 5000);
const width = computed(() => props.width || '2.5vi')
const height = computed(() => props.height || '8vi')
const color_fill_1 = computed(() => props.color_fill_1 || '#55fa')
const color_fill_2 = computed(() => props.color_fill_2 || '#55f2')

const cylinderStyle = computed(() => ({
  position: 'relative',
  width: width.value,
  height: height.value,
  borderRadius: '50%',
  background: 'none',
  backgroundImage: `
    conic-gradient(${color_fill_2.value} 0%, ${color_fill_2.value} ${animatedValue.value}%, ${color_fill_1.value} ${animatedValue.value}%)
  `,
  maskImage: `radial-gradient(circle closest-side, transparent 80%, black 85%)`
}))

const textStyle = computed(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: props.font_color || '#fff',
  fontSize: props.font_size || '1vi',
  fontFamily: props.font_family || 'Arial, sans-serif',
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: '1',
  whiteSpace: 'nowrap',
  zIndex: 1
}))

const startAnimation = () => {
  const durationValue = duration.value;
  const endValue =  props.value;
  const startValue = 0;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / durationValue, 1); 
    animatedValue.value = startValue + (endValue - startValue) * progress;
    
    if (progress < 1) {
      requestAnimationFrame(animate); // Continue animating
    }
  };

  requestAnimationFrame(animate);
}

onMounted(() => {
  startAnimation();
});

watch(() => props.value, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    startAnimation();
  }
});
</script>

<template>
  <div :style="cylinderStyle">
    <!-- <div :style="textStyle">{{ parseFloat(animatedValue.value).toFixed(1) }}%</div> -->
  </div>
</template>
