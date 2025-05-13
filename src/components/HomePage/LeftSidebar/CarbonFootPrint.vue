<template>
  <div class="carbon-wrapper">
    <div class="px12">
      <div class="underline" style="font-size:.6vi ; font-weight:350; width: 30%; margin-bottom: .7vh; margin-top: .5vh; padding-left: 0.4vi; color: white; white-space: nowrap;">
        Carbon Foot Print
      </div>
    </div>

    <div class="Dounght_chart">
      <DoughnutChart
        :value="data.totalValue"
        :segment-values="[
          data.carbonResidentialPercentage,
          data.carbonCommercialPercentage,
          data.carbonInfrastructurePercentage
        ]"
        :segment-colors="[colors.dounght3, colors.dounght2, colors.dounght4]"
        bg_color="#000"
        center-text="Total"
        glow-color="rgba(255, 255, 255, .5)"
        height="5.8vi"
        width="5.8vi"
        unit=" "
      />

      <div class="doughnut-container">
        <!-- Row 1 -->
        <div class="data-row">
          <div class="data-item">
            <img class="dot" src="@/assets/remote_assets/icon/rcfp.svg" alt="" />
            Residention
          </div>
          <span class="value" style="color: #d4c464;">{{ data.carbonResidential }} kg</span>
          <span class="percentage" style="color: #d4c464;">{{ data.carbonResidentialPercentage }} %</span>
        </div>
        <!-- Row 2 -->
        <div class="data-row">
          <div class="data-item">
            <img class="dot" src="@/assets/remote_assets/icon/ccfp.svg" alt="" />
            Commercial
          </div>
          <span class="value" style="color: #e29003;">{{ data.carbonCommercial }} kg</span>
          <span class="percentage" style="color: #e29003;">{{ data.carbonCommercialPercentage }} %</span>
        </div>
        <!-- Row 3 -->
        <div class="data-row">
          <div class="data-item">
            <img class="dot" src="@/assets/remote_assets/icon/icfp.svg" alt="" />
            Infrastructure
          </div>
          <span class="value" style="color: #b2b1b5;">{{ data.carbonInfrastructure }} kg</span>
          <span class="percentage" style="color: #b2b1b5;">{{ data.carbonInfrastructurePercentage }} %</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DoughnutChart from '@/components/DoughnutChart.vue';
import { reactive } from 'vue';
import { Data } from '@/helpers/data_sample';

const data = reactive(Data);

const colors = {
  dounght3: '#d4c464',
  dounght2: '#e29003',
  dounght4: '#b2b1b5',
  dounght1: '#c3690f',
};
</script>

<style scoped>
.carbon-wrapper {
  width: 16vi;
  padding: 0.8vh 0.5vi 0.6vh 0.5vi;
  display: flex;
  flex-direction: column;
  gap: .8vi;
  font-size: 0.6vi;
  font-weight: 500;
  color: #8cb6b5;
  background-color: rgba(0, 0, 0, 0.1);
  border: .15vi solid rgba(170, 162, 162, 0.4);
  border-bottom: none;
  border-top: none;
  border-right: none;
  margin-top: -0.7vh;
}

.Dounght_chart {
  display: flex;
  align-items: center;
  gap: 1vi;
}

.data-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(108, 116, 128, 0.137);
  border-radius: 0.2vi;
  padding: 0.4vi 0.5vi;
  gap: .5vi;
  width: 8.5vw;
}

.doughnut-container {
  display: grid;
  gap: 1.5vi;
  position: relative;
}

.doughnut-container::before,
.doughnut-container::after {
  content: "";
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  width: 110%;
  left: 0;
}

.doughnut-container::before {
  top: -0.55vi;
}

.doughnut-container::after {
  bottom: -0.55vi;
}

.data-item {
  display: flex;
  color: #a1a1a1;
  align-items: center;
  gap: 0.3vi;
}

.dot {
  width: 0.6vi;
  height: 0.6vi;
}

.value,
.percentage {
  font-weight: 500;
  font-size: 0.6vi;
}
</style>
