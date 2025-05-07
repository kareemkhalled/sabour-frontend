<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watch, watchEffect } from 'vue'
import { Line } from 'vue-chartjs'
import { ChartComponentRef } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

let interval

const props = defineProps([
  'labels',
  'data',
  'value',
  'max_value',
  'line_colors',
  'fill_flag',
  'fill_colors',
  'enable_ygrid',
  'font_x',
  'font_y',
  'refresh_rate',
  'max_history',
  'chart_label',
  'maxTicksLimit'
])

const current_value = computed(() => props.value)
const max_value = computed(() => props.max_value)
const line_colors = computed(() => props.line_colors || ['#ff0000']) // Default color
const fill_colors = computed(() => props.fill_colors || ['#00c9c922']) // Default fill color
const fill_flag = computed(() => props.fill_flag || false)
const enable_ygrid = computed(() => props.enable_ygrid || false)
const font_x_scale = computed(() => props.font_x || '7vi')
const font_y_scale = computed(() => props.font_y || '7vi')
const refresh_rate = computed(() => props.refresh_rate || 1)
const max_history = computed(() => props.max_history || 5)
const chart_values = computed(() => props.data || [])
const chart_label = computed(() => props.labels || [])

const font_x = ref(props.font_x || 8)
const font_y = ref(props.font_y || 7)
const labelPadding = ref(10)
const datapadding = ref(4)
const line_size = ref(1)

watchEffect(() => {
  if (screen.width < 1400) {
    font_x.value = 4
    font_y.value = 4
    labelPadding.value = 2
    datapadding.value = 2
    line_size.value=1
  }
  else if (screen.width === 1680 ) {
    line_size.value=2
    font_x.value = 8
    font_y.value = 8
    labelPadding.value = 8
    datapadding.value = 8}
   else if (screen.width > 1400 && screen.width < 2000) {
    line_size.value=2
    font_x.value = 8
    font_y.value = 8
    labelPadding.value = 8
    datapadding.value = 2
  }
   else {
    line_size.value=3
    font_x.value = 14
    font_y.value = 14
    labelPadding.value = 8
    datapadding.value = 8
  }
})

const chart = ref<ChartComponentRef | null>(null)

const chart_data = ref({
  labels: chart_label,
  datasets: chart_values.value.map((data, index) => ({
    label: `${props.chart_label} ${index + 1}`,
    data: data,
    fill: fill_flag.value,
    borderColor: line_colors.value[index] || '#f0000',
    backgroundColor: fill_colors.value[index] || '#00c9c922',
    tension: 0.4
  }))
})

const chart_scales = ref({
  x: {
    grid: {
      display: false,
      tickColor: '#f1D9EC'
    },
    ticks: {
      align: 'center',
      crossAlign: 'center',
      autoSkip: true,
      autoSkipPadding: 0,
      maxRotation: 0,
      minRotation: 0,
      padding: labelPadding.value,
      font: {
        size: font_x.value
      },
      color: '#a1a1a1',
      maxTicksLimit: props.maxTicksLimit || 7
    },
    border: {
      color: '#81818180'
    }
  },
  y: {
    ticks: {
      color: '#a1a1a1',
      font: {
        size: font_y.value
      },
      callback: (value) => {
        if (value >= 1000000) {
          return (value / 1000000).toFixed(1) + 'M';
        }
        else if (value >= 1000) {
          return (value / 1000).toFixed(0) + 'K';
        }
        return value;
      }
    },
    grid: {
      display: enable_ygrid.value,
      color: '#333',
      lineWidth: 0.6,
      tickColor: '#81818100'
    },
    min: 0,
    suggestedMax: max_value.value, // Initially set
    border: {
      color: '#81818180'
    }
  }
})

const chart_options = computed(() => ({
  maintainAspectRatio: false,
  aspectRatio: 16 / 9,
  scales: chart_scales.value,
  elements: {
    point: {
      pointStyle: 'circle',
      radius: 0.7
    },
    line: {    
      borderWidth: line_size.value
    }
  },
  animation: {
    duration: 2500,
    easing: 'linear',
    delay: 250,
    loop: false
  },
  plugins: {
    legend: {
      display: false
    }
  }
}))

// Poll Data Function to update the chart
function pollData() {
  let chart_instance = chart.value.chart
  if (chart_instance) {
    chart_instance.data.labels = chart_label.value
    chart_instance.data.datasets.forEach((dataset, index) => {
      dataset.data = chart_values.value[index] || []
      dataset.borderColor = line_colors.value[index] || '#ff0000'
      dataset.backgroundColor = fill_colors.value[index] || '#00c9c922'
    })
    chart_instance.update()
  }
}

// Watch for `max_value` changes and update the Y-axis
watch(max_value, (newValue) => {
  chart_scales.value.y.suggestedMax = newValue
  if (chart.value.chart) {
    chart.value.chart.options.scales.y.suggestedMax = newValue
    chart.value.chart.update() // Trigger re-render
  }
})

onMounted(() => {
  pollData()
  interval = setInterval(() => pollData(), 1000 * refresh_rate.value)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <div id="chart">
    <Line ref="chart" :data="chart_data" :options="chart_options" />
  </div>
</template>

<style scoped>
#chart {
  position: relative;
}
</style>
