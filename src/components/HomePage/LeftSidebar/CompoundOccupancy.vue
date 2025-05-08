<template>
  <div title="Energy Consumption">
    <div class=" data-holder2 section-title">
      <div class="square-icon"></div>
      <div>Compound occupancy</div>
    </div>
    <div class="radial-chart-container">
      <div class="redial-occ" style="height: 11vh">
        <div
          class="chart-box flex flex-col items-center"
          v-for="(item, index) in chartData"
          :key="index"
        >
          <span style="font-size:.7vi; margin-left:.4vw ;display: flex;  ;margin-bottom:1.5vh">{{ item.label }}</span>
          <div class="radial-container">
            <div
              class="spinner"
              :style="{
                '--percentage': item.percentage,
                '--color': item.color || '#00c9c95c',
              }"
            ></div>
            <div
              class="circle"
              :style="{ borderColor: item.color || '#2f9ad0' }"
            ></div>
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.label"
              class="image-inside"
            />
            <div class="inbox px-2">
              <span class="flex flex-col gap-[1.5vh] circle-line text-white text-[.6vi] relative top-[1vh]">
                {{ item.value }}
                <span>{{ item.unit }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import SectionWrapper from "../section-wrapper.vue"
import newstIcon from "@/assets/remote_assets/icon/comm.jpg"
import newstIcon1 from "@/assets/remote_assets/icon/resd.jpg"
import newstIcon4 from "@/assets/remote_assets/icon/tech.jpg"


const chartData = [
  {
    label: " Commercial",
    percentage: 65,
    color: "#D4C464",
    image: newstIcon,
    value: 65,
    unit: "%",
  },
  {
    label: "Residential",
    percentage: 85,
    color: "#E29003",
    image: newstIcon1,
    value: 85,
    unit: "%",
  },
  {
    label: "services",
    percentage: 45,
    color: "#636363",
    image: newstIcon4,
    value: 45,
    unit: "%",
  },
]
</script>

<style scoped>
.redial-occ {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(108, 116, 128, 0);
  border-radius: 0.9vi;
  margin-bottom: 3.5vh;
}

.radial-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.5vh;
  height: 8.5vh;
}

.spinner {
  position: absolute;
  width: 8.5vh;
  height: 8.5vh;
  z-index: 1;
  border-radius: 50%;
  background: conic-gradient(var(--color) calc(var(--percentage) * 1%), transparent 0%);
  mask: radial-gradient(farthest-side, transparent 90%, #000 95%);
  -webkit-mask: radial-gradient(farthest-side, transparent 85%, #000 80%);
  animation: spin 7s linear infinite;
  border: 0.1vi solid var(--color);
}

.circle {
  width: 7.5vh;
  height: 7.5vh;
  border: 0.101vi solid;
  border-radius: 50%;
  z-index: 1;
}

.image-inside {
  position: absolute;
  top: .8vh;
  width: 7vh;
  height: 7vh;
  object-fit: contain;
  z-index: 2;
  border-radius: 50%;
}

.inbox {
  position: absolute;
  top: 127%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25vi;
  font-size: 0.7vi;
  z-index: 3;
  text-align: center;
}

.circle-line::after {
  position: relative;
  top: -13vh;
  content: "";
  display: block;
  justify-content: center;
  width: 100%;
  height: 0.1vh;
  margin-top: 0.5vh;
  background: linear-gradient(to right, transparent, aqua 50%, transparent);
  transform: scaleX(0.9);
  animation: underlineAnimation 8s infinite;
}

.label-bottom {
  color: #a1a1a1;
  font-size: 0.6vi;
  display: flex;
  justify-content: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
