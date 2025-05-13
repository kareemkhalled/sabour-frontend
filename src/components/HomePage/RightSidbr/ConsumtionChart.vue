<template>
  <div class="water-tanks">
    <div class="data-holder2 section-title underlined-text">
      <div class="square-icon"></div>
      <div>Water & Fire Tank Levels</div>
    </div>

    <div class="horizontal-group">
      <!-- Water Tanks -->
      <div class="tank-group" style="flex: 2">
        <div class="tank" v-for="(tank, index) in waterTanks" :key="'water-' + index">
          <div class="tank-label">{{ tank.name }}</div>
          <div class="tank-visual">
             <div class="radial-wrapper">
          <CylinderProgressBar
            :width="bar_width"
            :height="bar_height"
            :value="100 - tank.level"
            :color_cover_1="tank.color_cover_1"
            :color_cover_2="tank.color_cover_2"
            :color_cover_3="tank.color_cover_3"
            :color_fill_1="tank.color_fill_1"
            :color_fill_2="tank.color_fill_2"
          />
        </div>

          </div>
          <div class="tank-percentage">
            {{ tank.level }}% {{ tank.levelInMeters }} m
          </div>
          <!-- <div class="tank-info">P: {{ tank.pressure }} bar</div> -->
          <!-- <div class="tank-info" style="white-space: nowrap">
            F: {{ tank.flow }} L/min
          </div> -->
        </div>
      </div>

      <!-- <div class="vertical-divider" style="flex: 0.2"></div> -->

      <!-- Fire Tanks -->
      <!-- <div class="tank-group" style="flex: 2">
        <div
          class="tank"
          v-for="(tank, index) in fireTanks"
          :key="'fire-' + index"
        >
          <div class="tank-label">{{ tank.name }}</div>
          <div class="tank-visual">
            <div class="radial-wrapper">
              <CylinderProgressBar
                :width="bar_width"
                :height="bar_height"
                :value="100 - tank.level"
                :color_cover_1="'#1d9dc240'"
                :color_cover_2="'#49fadc'"
                :color_cover_3="'#1d9dc240'"
                :color_fill_1="'#1d9dc240'"
                :color_fill_2="'#31b8aa'"
              />
            </div>
          </div>
          <div class="tank-percentage">
            {{ tank.level }}%  {{ tank.levelInMeters }} m
          </div>
          <div class="tank-info">P: {{ tank.pressure }} bar</div>
          <div class="tank-info" style="white-space: nowrap">
            F: {{ tank.flow }} L/min
          </div>
        </div>
      </div> -->
      <div class="water-info" style="display: flex; flex-direction: column; margin-right: 0.5vw">
        <div class="tank-info" style="display: flex; gap: 0.5vw">
          <img class="icon" src="@/assets/remote_assets/icon/pressurepump.svg" style="height: 1vi; width: 1vi" />
          <div style="display: flex; flex-direction: column; ">
            <span style="color: #248CB0; font-weight: 600; font-size: 0.5vi">Water Pressure</span>
            <span style="font-size: 0.5vi; position: relative; left: 3.4vw;color: #a1a1a1;width: 2.5vi;  box-shadow: 0 0 0.5vh rgba(213, 175, 80, 0.47);
">2.1 par</span>
          </div>
        </div>
        <div class="tank-info" style="display: flex; gap: 0.5vw">
          <img class="icon" src="@/assets/remote_assets/icon/waterpump.svg" style="height: 1vi; width: 1vi" />
          <div style="display: flex; flex-direction: column;">
            <span style="color: #248CB0; font-weight: 600; font-size: 0.5vi">Water flow</span>
            <span style="font-size: 0.5vi; position: relative; left: 3.5vw;color: #a1a1a1;  box-shadow: 0 0 0.5vh rgba(213, 175, 80, 0.47);
">215 L/m</span>
          </div>
        </div>
<span style="margin-top: -.3vi;"> <br></span>  
      <div class="chiller-content-1">
          <!-- <span style="
              font-size: 0.4vi;
              text-align: center;
              margin-top: 0.4vh;
              margin-bottom: -1vh;
            ">Pump running & pump stopping</span> -->

          <div style="display: flex; justify-content: center">
            <div class="chiller-item">
              <span style="font-size: 0.3vi;
              text-align: center;margin-bottom: -1vh;margin-top: 0.4vh;">Pump running</span>
              <div>
                <DounghtRadial :chartData="chartData" />
              </div>
              <!-- <div class="chiller-info">
            <div class="chiller-power"> 4000 kw</div>
            <div class="chiller-label" > chiller 1 </div>
        </div> -->
            </div>
            <div class="Line-between"></div>

            <div class="chiller-item">
              <span style="font-size: 0.3vi;
              text-align: center; margin-bottom: -1vh;margin-top: 0.4vh;">Pump stopping</span>

              <div>
                <DounghtRadial :chartData="chartData2" />
              </div>
              <!-- <div class="chiller-info">
            <div class="chiller-power"> 3200 kw</div>
          <div class="chiller-label" > chiller 2 </div>
        </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showAlarmPopup" class="alarm-popup">
      <div class="alarm-message">🚨 LOW TANK LEVEL!</div>
    </div>
  </div>
</template>

<script setup>

import { ref, watch, onMounted } from "vue";
import CylinderProgressBar from "@/components/CylinderProgressBar.vue";
import alarmSrc from "@/assets/sounds/alarm.wav";
import DounghtRadial from "@/components/DounghtRadial.vue";

let bar_width = "1.5vi";
let bar_height = "4vi";

const chartData = [
  {
    percentage: 12,
    color: "#1D9DC2",
  },
];
const chartData2 = [
  {
    percentage: 5,
    color: "#1D9DC2",
  },
];

const waterTanks = ref([
  {
    name: "Water Tanks",
    level: 70,
    levelInMeters: 5.2,
    pressure: 2.1,
    flow: 120,
    color_cover_1: "#1d9dc240",
    color_cover_2: "#49fadc",
    color_cover_3: "#1d9dc240",
    color_fill_1: "#1d9dc240",
    color_fill_2: "#31b8aa",
  },
  {
    name: "Fire Tanks",
    level: 40,
    levelInMeters: 3.4,
    pressure: 1.8,
    flow: 90,
    color_cover_1: "#1d9dc240",
    color_cover_2: "#49fadc",
    color_cover_3: "#1d9dc240",
    color_fill_1: "#1d9dc240",
    color_fill_2: "#31b8aa",
  },
]);

const fireTanks = ref([
  {
    name: "Fire Tank 1",
    level: 90,
    levelInMeters: 4.0,
    pressure: 5.5,
    flow: 100,
    
  },
  {
    name: "Fire Tank 2",
    level: 85,
    levelInMeters: 2.9,
    pressure: 5.5,
    flow: 85,
  },
]);

const alarmSound = new Audio(alarmSrc);
alarmSound.loop = true;

const showAlarmPopup = ref(false);
const soundEnabled = ref(true);

const checkAllTanks = () => {
  const allTanks = [...waterTanks.value, ...fireTanks.value];
  const lowTank = allTanks.some((tank) => tank.level < 30);

  if (lowTank) {
    showAlarmPopup.value = true;
    if (soundEnabled.value && alarmSound.paused) {
      alarmSound.play().catch((e) => {
        console.warn("Failed to play alarm:", e);
      });
    }
  } else {
    showAlarmPopup.value = false;
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }
};

watch(waterTanks, checkAllTanks, { deep: true });
watch(fireTanks, checkAllTanks, { deep: true });

onMounted(() => {
  checkAllTanks();
});
</script>


<style scoped>
.chiller-item {
  height: 3.5vi;
  display: flex;
  flex-direction: column;
  color: white;;
}

.chiller-content-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-top: -1.9vh; */
  /* margin-bottom: -1.6vh; */
  box-shadow: 0 0 0.5vh rgba(213, 175, 80, 0.47);
  border-radius: 0.4vi;
}

.water-tanks {
  padding: 0.2vi;
  color: #ccc;
  font-size: 0.6vi;
  font-weight: 500;
  margin-bottom: 1.5vh;
}

.tank {
  width: 1.5vi;
  height: 14vh;
  padding: 0.7vi;
  border-radius: 0.4vi;
  box-shadow: 0 0 0.5vh rgba(213, 175, 80, 0.47);
  display: flex;
  flex-direction: column;
  margin-left: 1vi;
  align-items: center;  
}

.tank-label {
  font-size: 0.4vi;
  margin-bottom: 0.3vi;
  color: #a1a1a1;
  font-weight: 600;
  white-space: nowrap;
}

.tank-visual {
  width: 100%;
  height: 10vh;
  background-color: rgba(255, 255, 255, 0.05);
  border: 0.05vi solid rgba(255, 255, 255, 0.2);
  border-radius: 0.3vi;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  position: relative;
}

.tank-percentage {
  font-size: 0.45vi;
  margin-top: 0.3vi;
  color: #ccc;
  text-align: center;
}

.tank-info {
  font-size: 0.55vi;
  align-items: center;
  align-content: center;
  text-align: center;
  margin-top: 0.2vi;
  font-weight: 500;
  color: #a1a1a1;
  /* border: solid 0.1vi #1d9dc2; */
  padding: 0.1vi;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1vw;
  font-size: 0.5vi;
  margin-bottom: 0.5vh;
}

.horizontal-group {
  display: flex;
  align-items: stretch;
  gap: 0.5vi;
  justify-content: space-around;
  margin-top: 1vh;
}

.tank-group {
  display: flex;
  gap: 0.5vi;
  flex-wrap: wrap;
}

.vertical-divider {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1vi;
  margin: 0 0.5vi;
}

.alarm-popup {
  position: fixed;
  top: 21.5vi;
  left: 20.5vi;
  width: 10vw;
  height: 10vh;
  background-color: rgba(255, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: blink 1s infinite alternate;
}

.alarm-message {
  font-size: 0.8vi;
  color: white;
  font-weight: bold;
  text-shadow: 0 0 1vi black;
  animation: shake 0.5s infinite;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes blink {
  0% {
    background-color: rgba(255, 0, 0, 0.7);
  }

  100% {
    background-color: rgba(255, 0, 0, 0.4);
  }
}

.tank-info .icon {
  font-size: 0.5vi;
  color: #1d9dc2;
  text-align: start;
  background-color: rgba(255, 255, 255, 0.745);
  margin-top: -.5vi;
  border-radius: 20%;
  
}

.tank-info span:first-child {
  font-weight: bold;
  font-size: 0.5vi;
  color: #1d9dc2;
}

.tank-info span:last-child {
  font-size: 0.5vi;
  color: #ccc;
  /* Adjust color if needed */
}

.water-info {
  height: 3.5vi;
  width: 7.5vi;
  display: flex;
  flex-direction: column;
  margin-right: 2vw;
  box-shadow: 0 0 0.5vh rgba(213, 175, 80, 0.47);
  padding: 0.3vi;
  border-radius: 0.4vi;
}

</style>
