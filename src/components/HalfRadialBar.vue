<script setup>
import { computed, ref, onMounted, watch } from 'vue'

const props = defineProps({
  value: Number,
  MaxValue: Number,
  color_fill_1: String,
  color_fill_2: String,
  gradient_fill_1: String,
  height: String,
  width: String,
  font_color: String,
  font_size: String,
  font_family: String,
  thickness:Number,
  right_to_left:
  {
    type: Number,
    default: 0,
  },  
  })

const animatedValue = ref(0)

const thickness = computed(() => props.thickness || 40)
const width = computed(() => props.width || '2.5vi')
const height = computed(() => props.height || '8vi')
const color_fill_1 = computed(() => props.color_fill_1 || '#9ed9f8'); // Default to a color, not a gradient
const gradient_fill_1 = computed(() => props.gradient_fill_1);
const color_fill_2 = computed(() => props.color_fill_2 || '#55f2')
const cylinderStyle = computed(() => ({
  position: 'relative',
  width: width.value,
  height: height.value,
  borderRadius: '50%',
  background: 'none',
  backgroundImage: animatedValue.value > 0 
    ? (props.right_to_left === 0 
        ? `conic-gradient(${color_fill_1.value} 0deg, ${color_fill_1.value} ${animatedValue.value}deg, ${color_fill_2.value} ${animatedValue.value}deg 180deg)` 
        : `conic-gradient(${color_fill_2.value} 0deg, ${color_fill_2.value} ${180 - animatedValue.value}deg, ${color_fill_1.value} ${180 - animatedValue.value}deg 0deg)`)
    : gradient_fill_1.value,
  transform: 'rotate(270deg)',  
  maskImage: `radial-gradient(circle, transparent ${thickness.value}% , black 60%)`, // Append the percentage unit here
  clipPath: 'inset(0 0 0 50% )' 
//   backgroundImage: `
//     conic-gradient(${color_fill_1.value} 0deg, ${color_fill_1.value} ${animatedValue.value * 1.8}deg , ${color_fill_2.value} ${animatedValue.value * 1.8}deg 180deg)
//   `,
//   transform: 'rotate(270deg)', 
//   maskImage: 'linear-gradient(to left , black 50%, transparent 50%)' 
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
  const duration = 3000; 
  const endValue = computed(() => (props.value / props.MaxValue) * 180)  ;
  const startValue = 0;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    animatedValue.value = startValue + (endValue.value - startValue) * progress;

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
