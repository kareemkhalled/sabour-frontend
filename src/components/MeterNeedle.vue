<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const props = defineProps({
  value: Number,
  maxValue: Number,
  direction: {
    type: Number,
    default: 0, 
  }
})

const needleRotation = ref(props.direction === 0 ? -90 : 90) // Set initial rotation based on direction

const constrainToRange = (value, min, max) => {
  if (min > max) {
    const temp = min
    min = max
    max = temp
  }
  value = Math.max(min, Math.min(value, max))
  const range = max - min
  const normalizedValue = (value - min) / range

  // Adjust rotation range based on direction (90° to -90° if left-to-right, or -90° to 90° if right-to-left)
  const startAngle = props.direction === 0 ? -90 : 90
  const endAngle = props.direction === 0 ? 90 : -90

  const outputValue = normalizedValue * (endAngle - startAngle) + startAngle
  return outputValue
}

const startNeedleAnimation = () => {
  const startValue = needleRotation.value
  const endValue = constrainToRange(props.value, 0, props.maxValue) 
  const duration = 3000 
  const startTime = performance.now()

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    needleRotation.value = startValue + (endValue - startValue) * progress

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}

onMounted(() => {
  startNeedleAnimation()
})

watch(() => props.value, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    startNeedleAnimation() 
  }
})
</script>

<template>
  <div class="meter-needle" :style="{ transform: `rotateZ(${needleRotation}deg)` }">
    <img src="@/assets/remote_assets/icon/meter-needle.svg" />
  </div>
</template>

<style scoped>
.meter-needle {
  transform-origin: 50% 86.5%;
}
</style>
