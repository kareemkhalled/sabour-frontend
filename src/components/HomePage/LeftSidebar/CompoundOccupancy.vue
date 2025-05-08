        Park Lane Occupancy / Unit
<template>
  <div>
    <div class=" data-holder2 section-title" style="width: 20vw;">
      <div class="square-icon"></div>
      <div>  Compound Occupancy / Unit
</div>
    </div>
    <div class="redial-occ">
      <div class="chart-box">
        <div class="  longer underline px12" style="margin-bottom: 0.5vi; font-weight: 600; text-align: center;color: #a1a1a1;">
          <span>Residential</span>
        </div>
        <div style="display: flex; align-items: center; position: relative; text-align: center; justify-content: center; margin-bottom: 0.3vi;">
          <div class="radial-container">
            <RadialProgressBar :width="'4.5vi'" :height="'4.5vi'" :color_fill_2="radial_bar_fill_color1"
              :color_fill_1="'#787772'" :value="40" :duration="4000" font_color="#f5604e" />
            <div class="radar-spinneryel"></div>
          </div>
          <div class="inbox px12 longer" style="font-weight: bold; top: 50%; color: white;">
            <AnimatedGradully :targetVolume="43" :duration="4000" unit="%" />
          </div>
        </div>

        <div class="after-chart">
          <div style="display: flex;flex-direction: column;align-items: center">
            <div class="box_capacity">
              <div class="small_circle" style="  background-color: #fd4;"></div> 
              <div class="px12" style="color: #fd4">Vacant</div>
            </div>
            <div class="px10" style="color: #ffff; ">65</div>
          </div>

          <div class="line-numbers"></div>

          <div style="display: flex;flex-direction: column;align-items: center">
            <div class="box_capacity">
              <div class="small_circle" style="  background-color: gray;"></div> 
              <div class="px12" style="color: gray">Not Vacant</div>
            </div>
            <div class="px10" style="color: #ffff;">85</div>
          </div>
        </div>
      </div>
      <!-- <div class="line"></div> -->
      <div class="chart-box">
        <div class=" px12 longer underline" style="margin-bottom: 0.5vi; font-weight: 600; text-align: center;color: #a1a1a1;">
          <span>Commercial</span>
        </div>
        <div style="display: flex; align-items: center; position: relative; text-align: center; justify-content: center; margin-bottom: 0.3vi;">
          <div class="radial-container">
            <RadialProgressBar :width="'4.5vi'" :height="'4.5vi'" :color_fill_2="radial_bar_fill_color2"
              :color_fill_1="'#787772'" :value="68" :duration="4000" font_color="#f5604e" />
            <div class="radar-spinner"></div>
          </div>
          <div class="inbox px12 longer" style="font-weight: bold; top: 50%; color: white;">
            <AnimatedGradully :targetVolume="69" :duration="4000" unit="%" />
          </div>
        </div>
        <div class="after-chart">
          <div style="display: flex;flex-direction: column;align-items: center">
            <div class="box_capacity">
              <div class="small_circle" style="  background-color: #e72;"></div> 
              <div class="px12" style="color: #e72">Vacant</div>
            </div>
            <div class="px10" style="color: #ffff; ">103</div>
          </div>

          <div class="line-numbers"></div>

          <div style="display: flex;flex-direction: column;align-items: center">
            <div class="box_capacity">
              <div class="small_circle" style="  background-color: gray;"></div> 
              <div class="px12" style="color: gray">Not Vacant</div>
            </div>
            <div class="px10" style="color: #ffff; ">45</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import RadialProgressBar from '@/components/RadialProgressBar.vue';
import AnimatedGradully from '@/components/AnimatedGradully.vue';
let radial_bar_fill_color1 = '#f7c83d';
let radial_bar_fill_color2 = '#e17619';

</script>
<style>
/* .chart-box{
  color: #a1a1a1;
} */
.box_capacity
{
  display: flex;
  gap: .25vi;
  align-items: baseline;
}
.small_circle{
  height: .4vi;
  width: .4vi;
  border-radius: 50%;
}
.redial-occ {
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-bottom: 1vi;
  margin-top: -0.3vi;
  position: relative;
}

.radial-container {
  position: relative;
  width: 4.5vi;
  height: 4.5vi;
  display: flex;
  justify-content: center;
  align-items: center;
}

.radar-spinner {
  position: absolute;
  width: 100%;
  height: 100%;
  background: conic-gradient(rgba(251, 246, 240, 0.447) 15% 15%, transparent 25% 100%);
  border-radius: 50%;
  animation: radar-spin 3.5s ease-in-out  infinite;
}

.radar-spinneryel {
  position: absolute;
  width: 100%;
  height: 100%;
  background: conic-gradient(rgba(251, 246, 240, 0.447) 15% 15%, transparent 25% 100%);
  border-radius: 50%;
  animation: radar-spin 3.5s ease-in-out  infinite;
}

@keyframes radar-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.after-chart {
  height: 1vi;
  display: flex;
  justify-content: space-around;
  gap: 1vi;
  margin-top: 0.9vi;
  padding-left: 1vi;
}

.line-numbers {
  background-color: #a86;
  height: 100%;
  position: relative;
  width: 0.01vi;
}

.underline {
  /* font-size: 0.7vi; */
  position: relative;
  color: #ffffff;
}

.underline::after {
  content: '';
  position: absolute;
  top: 1vi;
  left: 0;
  width: 100%;
  height: 0.10vi;
  background: linear-gradient(to right, transparent, #b9c7fe 50%, transparent);
  transform: scaleX(0.9);
  animation: underlineAnimation 8s infinite;
}

@keyframes underlineAnimation {
  0% {
    transform: scaleX(0.2);
  }
  25% {
    transform: scaleX(0.5);
  }
  50% {
    transform: scaleX(1);
  }
  75% {
    transform: scaleX(0.5);
  }
  100% {
    transform: scaleX(0.1);
  }
}
</style>

