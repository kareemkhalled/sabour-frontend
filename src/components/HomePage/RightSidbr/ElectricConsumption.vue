   

<template>
  <div >
     <div class=" data-holder2 section-title underlined-text">
      <div class="square-icon"></div>
      <div>Energy Consumption Runtime</div>
    </div>

    <div class="half-radial">
      <div class="radial-wrapper">
          <ElecrticalRadialCom :value="newValueW" :max="1000"/>
          <div class="qqqx underline">
              <div class="title-text" > Water </div>
                <div style="font-size: .7vi;">💧</div>
            <div class="title-wrapper">
              <div class="animated-data ">
                <AnimatedGradully :targetVolume="newValueW" :duration="500" unit="m³" />
                </div>
            </div>
        </div>
      </div>

      <div class="radial-wrapper">
        <RadialElec  :value="newValue" :max="18000"   />
        <div class="qqq underline"><div class="title-text" >Electrical</div>
        <div style="font-size: .9vi;">⚡</div>
          <div class="title-wrapper">
            <div class="animated-data">
              <AnimatedGradully :targetVolume="newValue" :duration="500" unit="kw" />
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class="renewable">
          
           <div style="position: relative;right: 1.3vi; font-weight: 600;" >🔥 Gas Consumption</div>
          <div class="value" style="color: #cf7227">
             <AnimatedGradully :targetVolume="newValueG" :duration="500" unit="m³" style="position: relative;right: -.1vi;"/>
          </div>
       </div>
  </div>
</template>

<script setup>
import { ref  ,watch ,computed} from 'vue';
import AnimatedGradully from '@/components/AnimatedGradully.vue'
import RadialElec from "@/components/RadialElec.vue";
import ElecrticalRadialCom from "@/components/ElecrticalRadialCom.vue";


// Function to clear the active interval
const newValue = ref(3000);
const newValueW = ref(300);
const newValueG = ref(120);
let activeInterval = null;
// Utility function for random number generation
const customRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// Function to clear the active interval
const clearActiveInterval = () => {
  if (activeInterval) {
    clearInterval(activeInterval);
    activeInterval = null;
  }
};

// Function to start chart updates dynamically
const startUpdatingChart = () => {
  clearActiveInterval();
  activeInterval = setInterval(() => {
    newValue.value = customRandom(4000, 4500); 
    newValueW.value = customRandom(120,150); 
    newValueG.value = customRandom(90,130); 
  }, 3000); // Update interval
};

// Start updating the chart when the component is mounted
startUpdatingChart();
</script>

<style scoped>
.half-radial {
  display: flex ;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin-bottom: .5vi;
top: -.5vi;}

.radial-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.data-text {
  font-size: 0.8vi;
}

.half-radial-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7vi;
  font-size: 0.9vi;
  color: rgb(68, 24, 24);
  position: absolute;
  top: 6.5vi;
  font-weight: 500;
}

.title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.animated-data {
  font-size: 0.5vi;
  color: #d2d0d8;
}

.title-text {
  color: #a1a1a1;
  font-weight: 500;
  font-size: 0.5vi;
  position: relative;
  top: 0vi;
}
.qqq{
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: .8vi;
  margin-top: -1.5vi;
  right: .4vi;

}
.qqqx{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .8vi;
  margin-top: -1.5vi
}

 .renewable {
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #a1a1a1;
  background-color: rgba(108, 116, 128, 0.19);
  height: 1.5vi; 
  font-weight: 500;
  border-radius: .8vi;
  font-size: 0.8vi;
  position: relative;
  top: -.6vi;
 
}

.underline::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: .10vi;
  top: 1.25vi;
  background: linear-gradient(to left, transparent, #01eeff 30%, transparent);
  transform: scaleX(0.9);
  animation: underlineAnimation 8s infinite;
}


.fire-icon {
  font-size: 1.5rem; 
  animation: flicker 1.5s infinite alternate ease-in-out;
  transform-origin: center;
}

@keyframes flicker {
  0% {
    transform: scale(1.2) translate(0, 0);
    opacity: 1;
  }
  50% {
    transform: scale(1.1) translateY(-1.5vi) rotate(deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) translateY(0px) rotate(-2deg);
    opacity: 1;
  }
}
</style>