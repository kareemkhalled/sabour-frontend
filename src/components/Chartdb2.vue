<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watch, watchEffect } from 'vue'
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
  'labels',
  'data',
  'value',
  'max_value',
  'line_color',
  'fill_flag',
  'fill_color',
  'enable_ygrid',
  'font_x',
  'font_y',
  'refresh_rate',
  'max_history',
  'chart_label',
  'maxTicksLimit'
])

const current_value = computed(() => props.value)
const max_value = computed(() => props.max_value || 160000)
const line_color = computed(() => props.line_color || '#ff0000')
const fill_flag = computed(() => props.fill_flag || false)
const enable_ygrid = computed(() => props.enable_ygrid || false)
const fill_color = computed(() => props.fill_color || '#00c9c922')
const font_x_scale = computed(() => props.font_x || '8vi')
const font_y_scale = computed(() => props.font_y || '8vi')
const refresh_rate = computed(() => props.refresh_rate || 1)
const max_history = computed(() => props.max_history || 5)
const chart_values = computed(() => props.data || [])
const chart_label = computed(() => props.labels || [])

const font_x = ref(props.font_x || 8)
const font_y = ref(props.font_y || 10)
const labelPadding = ref(10)
const datapadding = ref(4)
watchEffect(() => {
  if (screen.width < 1400) {
    font_x.value = 5
    font_y.value = 5
    labelPadding.value = 2
    datapadding.value = 2
  } else {
    font_x.value = props.font_x || 8
    font_y.value = props.font_y || 6
    labelPadding.value = 4
    datapadding.value = 4
  }
})

const chart = ref<ChartComponentRef>()

const chart_data = ref({
  labels: chart_label,
  datasets: [
    {
      label: props.chart_label || 'chart',
      data: chart_values,
      fill: fill_flag.value,
      borderColor: line_color.value,
      backgroundColor: fill_color.value,
      tension: 0.4
    }
  ]
})

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
      padding: labelPadding.value,
      includeBounds: true,
      font: {
        size: font_x.value
      },
      color: '#81D9EC',
      maxTicksLimit: props.maxTicksLimit || 7
    },
    border: {
      color: '#81818180'
    }
  },
  y: {
    ticks: {
      color: '#81D9EC',
      font: {
        size: font_y.value
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
      borderWidth: 1
    }
  },
  animation: {
    animation: {
      duration: 1000,
      easing: 'linear',
      delay: 250,
      loop: false
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
    //   let label = moment().format('LTS')
    //   if (get_chart_dataset_data(chart_instance, 0).length > CHART_MAX_DATA_LIMIT) {
    //     remove_chart_data(chart_instance, 0, 0, 1)
    //   }
    //   add_chart_data(chart_instance, 0, current_value.value, label)
    chart_instance.data.labels = chart_label.value
    chart_instance.data.datasets[0]['data'] = chart_values.value
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
