<script setup>
import { computed } from 'vue';

const props = defineProps({
  segmentValues: {
    type: Array,
    required: true,
  },
  segmentColors: {
    type: Array,
    required: true,
  },
  height: {
    type: String,
    default: '10rem',
  },
  width: {
    type: String,
    default: '10rem',
  },
  bgColor: {
    type: String,
    default: '#000',
  },
  innerRadius: {
    type: String,
    default: '62%',
  },
  innerRadius2: {
    type: String,
    default: '55%',
  },
  glowColor: {
    type: String,
    default: 'rgba(255, 255, 255, 0.3)', // Light shadow
  },
  centerText: {
    type: String,
    default: 'CFP',
  },
  centerIcon: {
    type: String,
    default: '', // Icon class or URL
  },
});

function reduceColorBrightness(color, factor) {
  // Extract the RGB components
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Apply brightness factor
  const newR = Math.min(255, Math.max(0, Math.round(r * factor)));
  const newG = Math.min(255, Math.max(0, Math.round(g * factor)));
  const newB = Math.min(255, Math.max(0, Math.round(b * factor)));

  // Return the updated color in hex format
  return `rgb(${newR}, ${newG}, ${newB})`;
}
const segmentAngles = computed(() => {
  let total = 0;
  return props.segmentValues.map((value) => {
    const angle = (value / 100) * 360;
    const startAngle = total;
    total += angle;
    return {
      start: startAngle,
      end: total,
    };
  });
});

const chartStyle = computed(() => {
  const gap = 1.5; // Gap size in degrees (adjust as needed)
  
  let total = 0;
  const gradients = props.segmentValues
    .map((value, index) => {
      const angle = (value / 100) * 360;
      const start = total;
      const end = total + angle - gap; // Subtract gap size
      total += angle;
      return `${props.segmentColors[index]} ${start}deg ${end}deg, black ${end}deg ${total}deg`; // Add black gap
    })
    .join(', ');

  return {
    width: props.width,
    height: props.height,
    borderRadius: '50%',
    background: `
      radial-gradient(circle, ${props.bgColor} ${props.innerRadius}, transparent ${props.innerRadius}),
      conic-gradient(${gradients})
    `,
    boxShadow: `0 0 1vi ${props.glowColor}`,
    position: 'relative',
  };
});

const chartStyle2 = computed(() => {
  const gap = props.gapDegrees || 2; // Gap size in degrees
  const reducedBrightnessColors = props.segmentColors.map((color) =>
    reduceColorBrightness(color, 0.38) // Reduce brightness by 50%
  );

  let total = 0;
  const gradients = segmentAngles.value
    .map((angle, index) => {
      const start = angle.start;
      const end = angle.end - gap; // Subtract gap size
      total = angle.end; // Update total for next segment
      return `${reducedBrightnessColors[index]} ${start}deg ${end}deg, black ${end}deg ${angle.end}deg`;
    })
    .join(', ');
  return {
    width: `calc(${props.width} * 0.82)`,
    height: `calc(${props.height} * 0.82)`,
    borderRadius: '50%',
    background: `
      radial-gradient(circle, ${props.bgColor} ${props.innerRadius2}, transparent ${props.innerRadius2}),
      conic-gradient(${gradients})
    `,
    // boxShadow: `0 0 1vi ${props.glowColor}`,
    position: 'relative',
  };
});

const innerCircleStyle = computed(() => ({
  width: `calc(${props.width} * 0.55)`,
  height: `calc(${props.height} * 0.55)`,
  borderRadius: '50%',
  background: props.bgColor,
  opacity: 0.8,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: `inset 0 0 .5vi ${props.glowColor}`,
}));
</script>

<template>
  <div class="chart-container">
    <div :style="chartStyle" class="doughnut-chart">
      <div :style="chartStyle2" class="doughnut-chart">
      <div :style="innerCircleStyle" class="inner-circle">
        <div class="center-content">
          <!-- <div class="center-text">{{ centerText }}</div> -->
          <div class="center-text">39</div>
          <div class="center-icon">
            <img v-if="centerIcon" :src="centerIcon" alt="Icon" />
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.doughnut-chart {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.inner-circle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.center-content {
  text-align: center;
  color: white;
  font-size: .7vi;
  font-weight: 600;
}

.center-icon img {
  width: 2rem;
  height: 2rem;
  margin-top: 0.5rem;
}
</style>
