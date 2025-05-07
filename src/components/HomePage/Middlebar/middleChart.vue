
<template>
    <div>
      <div class="px12" >
      <div class="underline" style="width: 30%;margin-bottom: .7vh;margin-top: .5vh;padding-left: 0.4vi;color: white;white-space: nowrap;">
        Chillers System Tempreture Monitor
      </div>
    </div>
        <div class="chartTitles" > 
          <div class="tab-container">
            <div class="tab" :class="{ clicked: isELEClicked }" @click="ElEButtonClick" style="color: #53FBC3;">Supply</div>
            <div class="tab" :class="{ clicked: isWaterClicked  }" @click="WaterButtonClick" style="color: #1A8CC7;">Return</div>
          </div>          
          <div  class="px14" style="font-weight: 400; ;padding: .8v 1vi;color: white;" >
            {{ parseFloat(chartData[7]).toFixed(0) }}&nbsp;{{chart_unit}}&nbsp;
          </div>
         
        </div>
        <!-- div >
            <Chartdb style="width:19vw; height: 7vw" :labels="chartLabels" :data="chartData" :line_colors="lineColors"
                :fill_colors="fillColors" :chart_label="'temp'" :max_value="ChartMaxVale" :font_x="8" :refresh_rate="1"
                :maxTicksLimit="24" :enable_ygrid="true"  />
        </div -->
        <div >
          <Chart style="width:24.7vw; height: 9.2vw ; margin-left: .3vi;"  
          :value="chartData[7] || 0"
          :fill_flag="true"
          :font_x="'10em'"
          :font_y="'12em'"
          :max_value="chartMaxValue"
          :refresh_rate="1"
          :fill_color="fillColor"
          :line_color="lineColors"
          />
        </div>
        <!-- :line_color="'#faac27'" -->
    </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount, onMounted } from 'vue';
import Chart from '@/components/Chart.vue';

// Chart properties
const chartTitle = ref('Electric Monthly Cost');
const chartData = ref(new Array(8).fill(0)); // Initial data
const lineColors = ref(['#02E9E9']); // Default line color
const fillColor = ref('#00c9c922'); // Default fill color
const chart_unit =ref('°C');
// Chart max value calculation
//const chartMaxValue = computed(() => Math.max(...chartData.value) * 1.6);
const chartMaxValue = ref(Math.max(...chartData.value) * 1.6);

// Active interval ID for cleanup
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
const startUpdatingChart = (color, fill, min, max) => {
  clearActiveInterval();

  // Update chart properties
  lineColors.value = [color];
  fillColor.value = fill;

  activeInterval = setInterval(() => {
    const newValue = customRandom(min, max);
    chartData.value.push(newValue);
    if (chartData.value.length > 4) chartData.value.shift(); // Keep chartData at max 8 items
    chartMaxValue.value = Math.max(...chartData.value) * 1.6;
  }, 3000); // Update interval
};

// Button click handlers for chart tabs
const isOxygenClicked = ref(false);
const isELEClicked = ref(true);
const isWaterClicked = ref(false);

const ElEButtonClick = () => {
  chartTitle.value = 'Electric Monthly Cost';
  isELEClicked.value = true;
  isOxygenClicked.value = false;
  isWaterClicked.value = false;
  chart_unit.value='°C';
  startUpdatingChart('#02E9E9', '#02E9E9', 6, 8);
};

const WaterButtonClick = () => {
  chartTitle.value = 'Water Monthly Cost';
  isWaterClicked.value = true;
  isELEClicked.value = false;
  isOxygenClicked.value = false;
  chart_unit.value="°C";
  startUpdatingChart('#56ace0', '#56ace022', 14, 16);
};

onMounted(()=>{
  startUpdatingChart('#02E9E9', '#00c9c922', 6, 6.9);

})
// Cleanup interval on component unmount
onBeforeUnmount(() => {
  clearActiveInterval();
});
</script>
<style scoped>
/* Tab container */
.tab-container {
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  gap: .25vi;
  background-color: #0e0f104f; /* Dark blue background */
  border-radius: .15vi;
  margin-left: 8.5vi;
  width: fit-content;
  white-space: nowrap;
}
.underline::after {
  content: '';
  display: block;
  width: 100%;
  height: 0.2vh;
  margin-top: .3vh;
  background: linear-gradient(to right, transparent, #1b606b 50%, transparent);
  transform: scaleX(0.9);
  animation: underlineAnimation 8s infinite;
}
/* Individual tab */
.tab {
  padding: .15vi .35vi;
  font-size: .6vi;
  font-weight: 600;
  color: #77829a; /* Grayish text color */
  border-radius: .25vi;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Active tab style */
.tab.clicked {
  background-color: #3e4d6c; /* Slightly lighter blue background */
  color: #d3cdcd; /* White text for the active tab */
  box-shadow: inset 0 0 .25vi rgba(255, 255, 255, 0.3);
}
/* Hover Effect */
.tab:hover {
  color: #ffffff;
}

.chartTitles
{
  padding-right: 1vi;
  display:flex;
  /* justify-content:space-; */
  /* font-size: .5vi;
  font-weight: 400; */
  gap: 1vi;
  color: #ebe7e3;
}
button {
  font-size: .55vi;
  font-weight: 300;
  user-select: none;
  /* border: 0.1vi solid #ffffff;
  border-radius: 0.2vi; */
  padding: 0.07vi .3vi;
  /* color: #fffffc; */
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.1s ease;
}

button:hover {
  color: #ffffff;
}

button.clicked {
  transform: translateY(+0.3vi);
}

.chart_table
{

}
</style>