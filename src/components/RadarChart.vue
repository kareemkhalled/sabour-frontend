<template>
    <div class="chart-container" style="position: relative; height: 10vi; width:10vi;">
      <canvas ref="radarChart"></canvas>
    </div>
  </template>
<script>
import { Chart, registerables, RadarController } from 'chart.js';

Chart.register(...registerables, RadarController);

export default {
  name: "RadarChart",
  mounted() {
    this.createRadarChart();
  },
  methods: {
    createRadarChart() {
      const ctx = this.$refs.radarChart.getContext('2d');
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Recycle', 'Reduce', 'Reuse', 'Dispose'],
          datasets: [{
            label: 'Waste Management',
            data: [70, 85, 60, 71], 
            backgroundColor: 'rgba( 160, 144, 102, 0.7)', 
            borderColor: '#8e6e1c',
            borderWidth: 2,
            pointBackgroundColor: '#007BFF',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#007BFF',
          },
          {
            label: 'Waste Management',
            data: [100, 100, 100, 100], 
            backgroundColor: 'rgba(0, 123, 255, 0.0)',
            borderColor: '#8e6e1c',
            borderWidth: 1,
            borderDash: [4, 4], 
            pointHitRadius:0,
            fill:false,
            pointBackgroundColor: '#007BFF',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#007BFF'
          }       
        ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: { display: true },
              suggestedMin: 0,
              suggestedMax: 100,
              ticks: { display: false },
              pointLabels:{
                color:'#a1a1a1'
              }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false } // Hide tooltips
          }
        },
        // plugins: [this.customValueLabelsPlugin()] 
      });
    },
    customValueLabelsPlugin() {
      return {
        id: 'customValueLabels',
        afterDraw(chart) {
          const { ctx, scales: { r }, data } = chart;
          const { datasets } = data;

          ctx.save();
          ctx.font = '.6vi Arial'; // Font for the values
          ctx.fillStyle = '#fff'; // Text color
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          const centerX = r.xCenter;
          const centerY = r.yCenter;
          const radius = r.drawingArea +10; // Place text just outside the labels

          data.labels.forEach((label, i) => {
            const angle = r.getIndexAngle(i);
            const value = datasets[0].data[i];

            const x = centerX + Math.cos(angle) * radius;
            const y = centerY + Math.sin(angle) * radius;

            ctx.fillText(value, x, y); // Draw the value
          });

          ctx.restore();
        }
      };
    }
  }
};
</script>

  <style scoped>
  .chart-container {
    padding-left: 0%;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* background-color: #000;  */
  }
  </style>
  