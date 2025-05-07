<script setup>
import { ref, watch, onMounted, computed } from 'vue' // Import computed
const props = defineProps({
  value: Number,
  width: String,
  height: String,
  fill_color: String,
  empty_color: String,
  border_radius: String,
  max_value: {
    type: Number,
    default: 100 // Default to 100 if not provided
  },
  duration: {
    type: Number,
    default: 3000,
  },  
  showArrow: {
    type: Boolean,
    default: false // Default to false (arrow hidden)
  },
})

const animatedValue = ref(0) 
const duration = props.duration
const startTime = ref(null);

const width = computed(() => props.width || '8vi')
const height = computed(() => props.height || '1vi')
const fill_color = computed(() => props.fill_color || '#4c86c5')
const empty_color = computed(() => props.empty_color || '#000000')
const border_radius = computed(() => props.border_radius || 'vi')

const fill_value = computed(() => (animatedValue.value / props.max_value) * 100) // Calculate fill_value based on animatedValue

const animate = (timestamp) => {
  if (!startTime.value) startTime.value = timestamp;
  const elapsed = timestamp - startTime.value;

  const progress = Math.min((elapsed / duration), 1);
  animatedValue.value = progress * props.value;

  if (progress < 1) {
    requestAnimationFrame(animate);
  }
}

watch(() => props.value, () => {
  startTime.value = null; 
  requestAnimationFrame(animate); 
});

onMounted(() => {
  startTime.value = null; 
  requestAnimationFrame(animate); 
});
</script>
<template>
  <div
    :style="{ width: width, height: height, 'background-color': empty_color }"
  >
    <div
      style="height: 100%"
      :style="{
        width: fill_value + '%',
        'background-color': fill_color,
        'border-radius': border_radius
      }"
    ></div>

    <div v-if="props.showArrow" class="arrow"
      style="position: relative; top: .1vi; right: -1vi;"
      :style="{ left: fill_value + '%', transform: 'translateX(-50%)' }"
    >
    </div>
    <div v-if="props.showArrow"
      style="font-size: .5vi ;position: relative; top: -.4vi;" 
      :style="{ left: fill_value + '%', transform: 'translateX(10%)' , color: '#efb' }"
    >
      {{ Math.round(fill_value) }}%
    </div>     
  </div>
</template>
<style scoped>
.arrow {
  width: 0;
  height: 0; 
  border-left:   .55vi solid transparent;
  border-right:  .55vi solid transparent;
  border-bottom: .55vi solid #efb; 
}
</style>
