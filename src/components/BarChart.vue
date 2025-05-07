<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { ChartComponentRef } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

let interval

const props = defineProps([
  'labels',
  'data',
  'max_value',
  'bar_color',
  'enable_ygrid',
  'font_x',
  'font_y',
  'refresh_rate',
  'chart_label',
  'maxTicksLimit'
])

const max_value = computed(() => props.max_value || 180)
const bar_color = computed(() => props.bar_color || '#4CAF50')
const enable_ygrid = computed(() => props.enable_ygrid || false)
const chart_labels = computed(() => props.labels || [])
const chart_data_values = computed(() => props.data || [])
const barThickness = computed(() => {
  return screen.width < 1400 ? 3 : 6 
})

const maxBarThickness = computed(() => {
  return screen.width < 1400 ? 5 : 10 
})
const fontSizeX = computed(() => {
  return screen.width < 1400 ? 4 : 14
})

const fontSizeY = computed(() => {
  return screen.width < 1400 ? 5 : 14
})

const labelPadding = computed(() => {
  return screen.width < 1400 ? 0:0
})
const datapadding = computed(()=>{
    return screen.width <1400 ? 0:0
}

)
const chart = ref<ChartComponentRef>()

const chart_data = ref({
  labels: chart_labels,
  datasets: [
    {
      label: props.chart_label || 'Generation Count',
      data: chart_data_values,
      backgroundColor: bar_color.value,
      barThickness: barThickness.value, 
      maxBarThickness: maxBarThickness.value 

    }
  ]
})

const chart_options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 2000, 
    easing: 'easeInOutQuart',
    onComplete: () => {
    },
    onProgress: (animation) => {
    }
  },  
  scales: {
    x: {
      grid: {
        display: false,
        color: '#000000'

      },
      ticks: {
        color: '#81D9EC',
        font: {
        //   size: props.font_x ? `${props.font_x}vi` : '1.2vi' // Converted px to vh
        size:  fontSizeX.value 
    },
    padding: labelPadding.value 

      },
      stacked: false,
    //   Colors:
      barPercentage: 0.5, 
      categoryPercentage: 0.8 ,
      

    border: {
        color:'#000000', 
        width: 1
      }
    }   ,  
    y: {
      beginAtZero: true,
      grid: {
        display: enable_ygrid.value,
        color: '#333'
      },
      ticks: {
        color: '#81D9EC',
        font: {
          size: fontSizeY.value
        },
        padding: datapadding.value,
        callback: function(value) {
          if (value >= 1000) {
            return (value / 1000).toFixed(0) + 'K';
          }
          return value;
        }
      },
      border: {
        color:'#000000', 
        width: 1
      }
    }
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        color: '#81D9EC'
      }
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`
        }
      }
    }
  }
}

function pollData() {
  let chart_instance = chart.value.chart
  if (chart_instance) {
    chart_instance.data.labels = chart_labels.value
    chart_instance.data.datasets[0].data = chart_data_values.value
    chart_instance.update()
  }
}

onMounted(() => {
  pollData()
  interval = setInterval(() => pollData(), 1000 * props.refresh_rate)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <div id="chart">
    <Bar ref="chart" :data="chart_data" :options="chart_options" />
  </div>
</template>

<style scoped>
#chart {
  position: relative;
  height: 6.6vw; 
}
</style>
