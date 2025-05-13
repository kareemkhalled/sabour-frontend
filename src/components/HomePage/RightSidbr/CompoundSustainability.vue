<template>
  <div>
    <div
      class="data-holder2 underlined-text"
      style="
        padding-bottom: 0%;
        margin-bottom: 0%;
        padding-top: 0%;
        margin-top: 0%;
      "
    >
      <div>Sustainability - Month</div>
    </div>

    <div class="solar_system" style="padding-top: 1vi">
      <div>
        <img
          src="@/assets/remote_assets/icon/recycle3.svg"
          style="height: 2.5vi; width: 2.5vi"
        />
      </div>

      <div class="solar-data-item">
        <div class="title">Recycle Revenue</div>
        <div class="valuerecycle">
          <AnimatedGradully
            :targetVolume="data.recycleRevenue"
            :duration="2000"
            unit="OR"
          />
        </div>
      </div>
      <div class="solar-data-item" style="margin-right: 0.3vi">
        <div class="title">Compound Recycle</div>
        <div class="valuerecycle">
          <AnimatedGradully
            :targetVolume="data.compoundRecycle"
            :duration="2000"
            unit="Ton"
          />
        </div>
      </div>
    </div>
    <div
      class="underline"
      style="top: -1.25vi; margin-top: 4vh; margin-bottom: 7vh"
    ></div>
    <div class="solar_system" style="margin-top: 1vi; margin-bottom: 0.5vi">
      <div>
        <img
          src="@/assets/remote_assets/icon/solar10.svg"
          style="height: 2.6vi; width: 2.6vi"
        />
      </div>
      <div class="solar-data-item">
        <div class="title">Solar PV Energy</div>
        <div class="value">
          <AnimatedGradully
            :targetVolume="data.solarPVEnergy"
            :duration="2000"
            unit="mWh"
          />
        </div>
      </div>
      <div class="solar-data-item">
        <div class="title">Ratio Of Total Energy</div>
        <div class="value">
          <AnimatedGradully
            :targetVolume="data.energyRatio"
            :duration="2000"
            unit="%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AnimatedGradully from "@/components/AnimatedGradully.vue";
import RadarChart from "@/components/RadarChart.vue";
import { reactive } from "vue";

import { Data } from "@/helpers/data_sample";
const data = reactive(Data);
</script>

<style scoped>
.radar_value {
  color: #b2b1b5;
}

.solar-data-item {
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(to bottom, #2a2a2a 0%, transparent);
  padding: 0.2vi;
  border-radius: 0.2vi;
}

.title {
  font-size: 0.6vi;
  font-weight: 600;
  color: #a6abb5;
  letter-spacing: 0.04vi;
  margin-bottom: 0.5vi;
}

.value {
  font-size: 0.6vi;
  font-weight: 600;
  color: rgb(238, 196, 90);
}

.valuerecycle {
  font-size: 0.6vi;
  font-weight: 600;
  color: rgb(238, 196, 90);
  text-shadow: 0 0 0.5vi #023e07;
}

.solar_system {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f6f0f0a1;
  font-size: 0.7vi;
  font-weight: 600;
  margin-bottom: 0.4vi;
}

.RadarChart {
  display: flex;
  padding: 0%;
  justify-content: space-around;
  align-items: center;
}

.RadarData {
  display: grid;
  gap: 0.4vi;
}

.RadarData::after,
.RadarData::before {
  content: "";
  position: relative;
  height: 0.05vi;
  background-color: rgba(255, 255, 255, 0.5);
  width: 120%;
  left: 0;
}

.RadarData::before {
  top: -0.15vi;
}

.RadarData::after {
  bottom: -0.15vi;
}

.RadarROW {
  font-size: 0.7vi;
  font-weight: 600;
  display: flex;
  gap: 0.95vi;
  justify-content: center;
  align-items: center;
  color: #a1a1a1a1;
  background: linear-gradient(to right, #2a2a2a 50%, transparent);
  border-radius: 0.5vi;
  padding: 0.2vi 0.1vi;
}
</style>
