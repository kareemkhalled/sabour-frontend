<template>
  <div id="chart" :style="{ width: computedChartWidth + 'vw' }">
    <apexchart
      type="radialBar"
      :height="computedChartHeight + 'vw'"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: 'RadialBarChart',
  components: {
    apexchart: VueApexCharts
  },
  props: {
    seriesValue: {
      type: Array,
      required: true
    },
    chartHeight: {
      type: Number,
      default: 35
    },
    chartWidth: {
      type: Number,
      default: 35
    },
    labelName: {
      type: String,
      default: 'Median Ratio'
    }
  },
  computed: {
    computedChartHeight() {
    const minScreenWidth = 915;
    const maxScreenWidth = 1560;
    const minChartHeight = 120;
    const maxChartHeight = 160;

    if (screen.width <= minScreenWidth) {
      return minChartHeight;
    } 
    // else if (screen.width >= maxScreenWidth) {
    //   return maxChartHeight;
    // }
     else {
      const interpolatedHeight = minChartHeight + (screen.width - minScreenWidth) * (maxChartHeight - minChartHeight) / (maxScreenWidth - minScreenWidth);
      return interpolatedHeight;
    }
    },
    computedChartWidth() {
      return screen.width < 1400 ? this.chartWidth   : this.chartWidth;
    },
    computedNameOffsetY() {
      return screen.width < 1400 ? 10 : 55; 
    },
    computedValueOffsetY() {
      return screen.width < 1400 ? 0: 0; 
    }
  },
  data() {
    return {
      series: this.seriesValue,
      chartOptions: {}
    };
  },
  mounted() {
    this.chartOptions = {
      chart: {
        type: 'radialBar',
        offsetY: '-1vi' ,
        // background: '#2c86e5',
        animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 3000,
        animateGradually: {
          enabled: true,
          delay: 250 
        },
        dynamicAnimation: {
          enabled: true,
          speed: 150 
        }        
      },
      },
      plotOptions: {
        radialBar: {
          startAngle: -120,
          endAngle: 120,
          dataLabels: {
            name: {
              show:false,
              fontSize: '.7vi',
              color: undefined,
              offsetY: this.computedNameOffsetY 
            },
            value: {
              show:false,
              offsetY: this.computedValueOffsetY, 
              fontSize: '.9vi',
              color: "#78a0d1",
              formatter: function (val) {
                // return val + '%';
                return val;
              }
            }
          }
        }
      },
      fill: {
          // type: 'solid',
          colors: ['#2c86e5','#D4062F','#3f86a9','#FF4560', '#00E396', '#008FFB'], 
          type: 'gradient',
          // background: '#2c86e5',
          gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91]
        }
      },
      stroke: {
        dashArray: '0.1vi' 
      },
      labels: [this.labelName]
    };
  }
}
</script>

<style scoped>
#chart {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>