<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed ,watchEffect} from 'vue'
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
import { Line } from 'vue-chartjs'
import { ChartComponentRef } from 'vue-chartjs'
import moment from 'moment'

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
  'value',
  'max_value',
  'line_color',
  'fill_flag',
  'fill_color',
  'enable_ygrid',
  'font_x',
  'font_y',
  'refresh_rate',
  'max_history'
])
const current_value = computed(() => props.value)
const max_value = computed(() => props.max_value || 0)
const line_color = computed(() => props.line_color || '#ff0000')
const fill_flag = computed(() => props.fill_flag || false)
const enable_ygrid = computed(() => props.enable_ygrid || false)
const fill_color = computed(() => props.fill_color || '#00c9c922')
const font_x_scale = computed(() => props.font_x || '8vi')
const font_y_scale = computed(() => props.font_y || '8vi')
const refresh_rate = computed(() => props.refresh_rate || 1)
const max_history = computed(() => props.max_history || 4)
const line_size = ref(1)

let font_x = 6
let font_y = 6

watchEffect(() => {
  if (screen.width < 1400) {
    font_x= 4
    font_y= 4
    line_size.value=1
  }
  else if (screen.width === 1680 ) {
    line_size.value=2
    // font_x= 14
    // font_y= 14
  }
   else if (screen.width > 1400 && screen.width < 2000) {
    line_size.value=2
    // font_x = 10
    // font_y = 10

  }
   else {
    line_size.value=3
    // font_x = 14
    // font_y = 14

  }
})

const chart = ref<ChartComponentRef>()

const chart_data = {
  labels: [],
  datasets: [
    {
      data: [],
      fill: fill_flag.value,
      borderColor: line_color.value,
      backgroundColor: fill_color.value,
      tension: 0.4
    }
  ]
}

const chart_scales = {
  x: {
    grid: {
      display: false,
      tickColor: '#81D9EC'
    },
    ticks: {
      align: 'center',
      crossAlign: 'center',
      // sampleSize:3,
      autoSkip: true,
      autoSkipPadding: 0,
      maxRotation: 0,
      minRotation: 0,
      major: {
        enabled: true
      },
      includeBounds: true,
      font: {
        size: font_x
      },
      color: '#a1a1a1',
      maxTicksLimit: 5
    },
    border: {
      color: '#81818180'
    }
  },
  y: {
    ticks: {
      color: '#a1a1a1',
      font: {
        size: font_y
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
    // max: max_value.value,
    suggestedMax: max_value.value,
    border: {
      color: '#81818180'
    }
  }
}
const chart_options = {
  // responsive: true,
  maintainAspectRatio: false,
  aspectRatio: 16 / 9,
  scales: chart_scales,
  elements: {
    point: {
      pointStyle: false
    },
    line: {
      borderWidth: line_size.value
    }
  },
  animation: {
    animation: {
      duration: 0
      // easing:'linear',
      // delay:250,
      // loop:true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
}

function remove_chart_data(chart_instance, dataset_index, index, count) {
  chart_instance.data.datasets[dataset_index]['data'].splice(index, count)
  chart_instance.data.labels.splice(index, count)
}
function add_chart_data(chart_instance, dataset_index, data, label) {
  chart_instance.data.datasets[dataset_index]['data'].push(data)
  chart_instance.data.labels.push(label)
}
function get_chart_dataset_data(chart_instance, index) {
  return chart_instance.data.datasets[index]['data']
}

let max_history_sec = (max_history.value * 60) / refresh_rate.value
const CHART_MAX_DATA_LIMIT = max_history_sec

function pollData() {
  let chart_instance = chart.value.chart
  if (chart_instance) {
    // let label = moment().format('LTS')
    let label = moment().format('HH:mm:ss')  // 24-hour format without AM/PM

    if (get_chart_dataset_data(chart_instance, 0).length > CHART_MAX_DATA_LIMIT) {
      remove_chart_data(chart_instance, 0, 0, 1)
    }
    add_chart_data(chart_instance, 0, current_value.value, label)
    chart_instance.update()
  }
}

onMounted(() => {
  pollData()
  interval = setInterval(() => pollData(), 1000 * refresh_rate.value)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
// Watch for line_color changes
watchEffect(() => {
  if (chart.value?.chart) {
    const chart_instance = chart.value.chart;
    chart_instance.data.datasets[0].borderColor = line_color.value;
    chart_instance.options.scales.y.suggestedMax = max_value.value;
    chart_instance.update();
  }
});
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
