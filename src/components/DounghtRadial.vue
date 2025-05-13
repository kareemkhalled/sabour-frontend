<template>
  <div class="radial-chart-container">
    <div class="redial-occ">
      <div class="chart-box " v-for="(item, index) in chartData" :key="index">
        <span class="px12 longer label-top">{{ item.label }}</span>
        <div class="radial-container">
          <div class="spinner" :style="{
            '--percentage': item.percentage,
            '--color': item.color || '#00c9c95c' 
          }"></div>
          <div class="circle" :style="{ borderColor: item.color || '#2f9ad0' }"></div>
          <div class="inbox px12 longer" style="top: 52%; color: white; display: flex;flex-direction: column;gap: .25vi;font-size: .7vi;">
            <span class="circle-line">
              <AnimatedGradully :targetVolume="item.percentage" :duration="4000" unit="" unitColor="white"/>
            </span>
            <div style="color:#a1a1a1; font-size: .6vi; display: flex;justify-content: center;" >{{ item.ON }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import AnimatedGradully from '@/components/AnimatedGradully.vue';

defineProps({
  chartData: Array
});
</script>

<style scoped>
.chart-box{
  height: 3.5vi;
}

.circle-line::after {
content: '';
display: block;
width: 100%;
height: 0.1vh;
margin-top: .5vh;
background: linear-gradient(to right, transparent, aqua 50%, transparent);
transform: scaleX(0.9);
animation: underlineAnimation 8s infinite;
}

/* .redial-occ {
display: flex;
justify-content: space-around;
align-items: center;
background-color: rgba(108, 116, 128, 0);
border-radius: 0.9vi;
} */

.radial-container {
position: relative;
display: flex;
justify-content: center;
align-items: center;
}

.spinner {
position: absolute;
width: 5vh;
height: 5vh;
z-index: 3;
border-radius: 50%;
background: conic-gradient(var(--color) calc(var(--percentage) * 1%), transparent 0%);
mask: radial-gradient(farthest-side, transparent calc(90%), #000 calc(95%));
-webkit-mask: radial-gradient(farthest-side, transparent calc(85%), #000 calc(80%));
animation: spin 7s linear infinite;
border: 0.1vi solid var(--color);
}

.circle {
width: 3.5vh;
height: 3.5vh;
border: 0.101vi solid;
border-radius: 50%;
z-index: 2;
}

.inbox {
position: absolute;
z-index: 3;
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
