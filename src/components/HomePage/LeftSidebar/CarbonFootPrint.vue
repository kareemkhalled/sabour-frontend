     
<template>
  <div class="local_conatiner">
    <div class=" data-holder2 section-title">
      <div class="square-icon"></div>
      <div>Carbon Foot Print</div>
    </div>
    <div class="Dounght_chart">
      <div>
        <DoughnutChart :value="100" :segment-values="[35, 25, 40]"
          :segment-colors="[colors.dounght3, colors.dounght2, colors.dounght4]" bg_color="#000"  
           center-text="Total"
           glow-color="rgba(255, 255, 255, .5)"
           height="5.8vi" width="5.8vi" unit=" "   />
      </div>
    <div class="doughnut-container">
    <!-- Row 1 -->
    <div class="data-row">
      <div class="data-item">
        <img class="dot" src="@/assets/remote_assets/icon/rcfp.svg" alt="">
        Residention
      </div>
      <span class="value" style="color: #d4c464;">14 kg</span>
      <span class="percentage" style="color: #d4c464;">35 %</span>
    </div>
    <!-- Row 2 -->
    <div class="data-row">
      <div class="data-item">
        <img class="dot" src="@/assets/remote_assets/icon/ccfp.svg" alt="">
        Commercial
      </div>
      <span class="value" style="color: #e29003;">9 kg</span>
      <span class="percentage" style="color: #e29003;">25 %</span>
    </div>
    <!-- Row 3 -->
    <div class="data-row">
      <div class="data-item">
        <!-- <img class="dot" :style="{ backgroundColor: colors.dounght4 }"></img> -->
        <img class="dot" src="@/assets/remote_assets/icon/icfp.svg" alt="">
        Infrastructure
      </div>
      <span class="value" style="color: #b2b1b5;">16 kg</span>
      <span class="percentage" style="color: #b2b1b5;">40 %</span>
    </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import DoughnutChart from '@/components/DoughnutChart.vue';
const colors = {
  dounght3: '#d4c464',
  dounght2: '#e29003',
  dounght4: '#b2b1b5',
  dounght1: '#c3690f',
};
</script>

<style scoped>
.local_conatiner
{
  letter-spacing: .05vi;
  font-weight: 500;
  font-size: .6vi;
}
.Dounght_chart {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 1vi;
  padding-bottom: 5%;
  padding-left: 1vi;
}

.data-row {
  width: 100%;
  display: flex;
  gap: .5vi;
  align-items: center;
  justify-content: space-between;
  /* background-color: #2a2a2a; */
  background:linear-gradient(to right,#2a2a2a 50%,transparent);
  border-radius: .5vi;
  /* box-shadow: -4px 4px 8px rgba(206, 23, 23, 0.5);  */
  padding: .4vi 0.5vi;
  border-radius: 0.2vi;
   /* Necessary for pseudo-elements */
}
.doughnut-container {
  display: grid;
  
  gap: .7vi;
  position: relative;
  /* padding-left: .5vi; */
}

.doughnut-container::before,
.doughnut-container::after {
  content: "";
  position: absolute;
  /* height:.05vi;  */
  /* background:linear-gradient(to right,#ffffff80 70%,transparent); */
  background-color: rgba(255, 255, 255, 0.5); 
  width: 110%;
  left: 0;
}

.doughnut-container::before {
  top: -.55vi; 
}

.doughnut-container::after {
  bottom: -.55vi; 
}
/* .doughnut-container::before {
  content: "";
  position: absolute;
  top: 0%;
  left: -12%;
  height: 100%;
  width: 20%;
  background: radial-gradient(circle at right, rgba(255, 255, 255, 0.5), transparent 80%);
  border-radius: 18vi;  
  overflow-block:hidden;
}  */
.data-item {
  display: flex;
  /* color: #f9f7f780; */
  color: #a1a1a1;
  align-items: center;
  gap: .3vi;
  
}

.dot {
  width: 0.6vi;
  height: 0.6vi;
  /* border-radius: 50%; */
}

.value, .percentage {
  font-weight: 500;
  font-size: 0.6vi;
}
</style>