<template>
    <div>
        <div class="data-holder2 underlined-text" style="margin-bottom:.5vi ;">
            <div class="img-wrapper">
                <!-- <img src="@/assets/remote_assets/icon/occupancy.svg" /> -->
            </div>
            <div>
               Consumption Montoring 
            </div>
        </div>
        <div class="chartTitles" > 
          <div class="tab-container">
            <div class="tab" :class="{ clicked: isELEClicked }" @click="ElEButtonClick">Electric</div>
            <div class="tab" :class="{ clicked: isWaterClicked  }" @click="WaterButtonClick">water</div>
            <div class="tab" :class="{ clicked: isOxygenClicked }" @click="OxygenButtonClick">Gas</div>
          </div>          
          <div  class="px14" style="font-weight: 400;background: linear-gradient(to right,#2a2a2a 80%,transparent) ;padding: .8v 1vi;" >
            {{ parseFloat(chartData[7]).toFixed(0) }}&nbsp;{{chart_unit}}&nbsp;
          </div>
        </div>
        <!-- div >
            <Chartdb style="width:19vw; height: 7vw" :labels="chartLabels" :data="chartData" :line_colors="lineColors"
                :fill_colors="fillColors" :chart_label="'temp'" :max_value="ChartMaxVale" :font_x="8" :refresh_rate="1"
                :maxTicksLimit="24" :enable_ygrid="true"  />
        </div -->
        <div >
          <Chart style="width:19vw; height: 7vw" 
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
const lineColors = ref(['#e8bf58']); // Default line color
const fillColor = ref('#00c9c922'); // Default fill color
const chart_unit =ref('kw');
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
  chart_unit.value='KW';
  startUpdatingChart('#e8bf58', '#00c9c922', 4000, 4500);
};

const WaterButtonClick = () => {
  chartTitle.value = 'Water Monthly Cost';
  isWaterClicked.value = true;
  isELEClicked.value = false;
  isOxygenClicked.value = false;
  chart_unit.value="m³";
  startUpdatingChart('#56ace0', '#56ace022', 120, 150);
};

const OxygenButtonClick = () => {
  chartTitle.value = 'Oxygen Monthly Cost';
  isOxygenClicked.value = true;
  isELEClicked.value = false;
  isWaterClicked.value = false;
  chart_unit.value="m³";
  startUpdatingChart('#c25700', '#c2570022', 90, 130);
};
onMounted(()=>{
  startUpdatingChart('#e8bf58', '#00c9c922', 4000, 4500);

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
  align-items: center;
  justify-content: center;
  gap: .25vi;
  background-color: #0e0f10; /* Dark blue background */
  border-radius: .15vi;
  margin-left: 2.5vi;
  width: fit-content;
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
  gap: 5vi;
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