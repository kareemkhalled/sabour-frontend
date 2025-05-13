<template>
  <div class="chart-wrapper">
    <canvas id="ahu-chart"></canvas>
    
    <div class="chart-center">
      <span class="chart-value">150</span>
    </div>
    <!-- <div class="chart-label">AHUs</div> -->
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

export default {
  name: "DonutChart2",
  components: {
    Doughnut,
  },
  mounted() {
    const ctx = document.getElementById("ahu-chart").getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 200, 0);
    gradient.addColorStop(0, "#204396");
    gradient.addColorStop(1, "#124c97");

    new ChartJS(ctx, {
      type: "doughnut",
      data: {
        labels: ["ON", "OFF"],
        datasets: [
          // Main dataset (doughnut chart)
          {
            data: [19, 13],
            backgroundColor: [gradient, "#435e79"],
            hoverBackgroundColor: [gradient, "#435e79"],
            borderWidth: 0.2,
          },
          // Decorative inner border (circle around the inner edge)
          {
            data: [1, 0, 1], // The small circle with a border
            backgroundColor: [
              "#6eb5f5",      // Thin white border on the edge
            ],
            borderWidth: 0.1,  // Thinner border
            borderColor: "#fff", // Color of the inner border
            circumference: 270,
            rotation: 225,
            cutout: "74%",  // Increase cutout to push the inner border 1px away
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "60%", // Doughnut thickness, increased to make space for the center
        rotation: 225,
        circumference: 270,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      },
    });
  },
};
</script>

<style scoped>
.chart-wrapper {
  position: relative;
  width: 9.5vh;
  height: 9.5vh;
  padding-left: 0.5vi;
}

.chart-center {
  position: absolute;
  top: 50%;
  left: 54%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(198, 192, 192);
}

.chart-value {
  padding-top: 2vw;  /* Increase padding-top to move the value down a bit */
  font-size: 0.9vi;
  font-weight: bold;
}

.chart-label {
  text-align: center;
  margin-top: -0.5vw;
  color: white;
  font-size: .7vi;
  font-weight: 400;
  position: relative;
  text-shadow: 1px 1px 3px rgb(64, 194, 241);
}

.underline::after {
  content: "";
  position: absolute;
  left: 0%;
  width: 100%;
  height: 0.10vi;
  top: 1.4vw;
  background: linear-gradient(to right, transparent, #06709d 50%, transparent);
  transform: scaleX(0.9);
  animation: underlineAnimation 8s infinite;
}

@keyframes underlineAnimation {
  0% {
    transform: scaleX(0);
  }

  50% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(0);
  }
}
</style>
