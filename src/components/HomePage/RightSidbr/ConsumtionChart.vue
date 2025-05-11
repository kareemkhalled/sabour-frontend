<template>
  <div class="water-tanks">
    <div class="data-holder2 section-title">
      <div class="square-icon"></div>
      <div>Water & Fire Tank Levels</div>
    </div>

    <div class="horizontal-group " style="margin-top: -2vh;">
      <!-- Water Tanks -->
      <div class="tank-group">
        <div class="tank" v-for="(tank, index) in waterTanks" :key="'water-' + index">
          <div class="tank-label">{{ tank.name }}</div>
          <div class="tank-visual">
            <div
              class="tank-fill"
              :style="{
                height: tank.level + '%',
                backgroundColor: tank.color,
                animationDelay: (index * 0.3) + 's'
              }"
            >
              <div class="wave"></div>
            </div>
          </div>
          <div class="tank-percentage">{{ tank.level }}% | {{ tank.levelInMeters }} m</div>
          <div class="tank-info"> P: {{ tank.pressure }} bar</div>
          <div class="tank-info" style="white-space: nowrap;"> F: {{ tank.flow }} L/min</div>
        </div>
      </div>

      <!-- Vertical Divider -->
      <div class="vertical-divider"></div>

      <!-- Fire Tanks -->
      <div class="tank-group">
        <div class="tank fire" v-for="(tank, index) in fireTanks" :key="'fire-' + index">
          <div class="tank-label" style="white-space: nowrap;">{{ tank.name }}</div>
          <div class="tank-visual">
            <div
              class="tank-fill"
              :style="{
                height: tank.level + '%',
                backgroundColor: tank.color,
                animationDelay: (index * 0.3) + 's'
              }"
            >
              <div class="wave"></div>
            </div>
          </div>
          <div class="tank-percentage">{{ tank.level }}% | {{ tank.levelInMeters }} m</div>
          <div class="tank-info"> P: {{ tank.pressure }} bar</div>
          <div class="tank-info" style="white-space: nowrap;"> F: {{ tank.flow }} L/min</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "WaterTanksVue",
  setup() {
    const waterTanks = [
      { name: "Water Tank A", level: 75, levelInMeters: 5.2, pressure: 2.1, flow: 120, color: "rgba(39, 198, 251, .7)" },
      { name: "Water Tank B", level: 50, levelInMeters: 3.4, pressure: 1.8, flow: 90, color: "rgba(39, 198, 251, .7)"},
    ];

    const fireTanks = [
      { name: "Fire Tank 1", level: 60, levelInMeters: 4.0, pressure: 5.5, flow: 100, color: "rgba(251, 95, 0, .7)" },
      { name: "Fire Tank 2", level: 45, levelInMeters: 2.9, pressure: 5.2, flow: 85, color: "rgba(251, 95, 0, .7)" },
    ];

    return { waterTanks, fireTanks };
  },
};
</script>

<style scoped>
.water-tanks {
  padding: 0.2vi;
  color: #ccc;
  font-size: 0.4vi;
  font-weight: 500;
  margin-bottom: 1.5vh;
}

.tank-group-title {
  font-size: 0.6vi;
  font-weight: bold;
  margin: 1vh 0 0.5vh;
  color: #e3b04b;
  border-bottom: 0.05vi solid #555;
  width: fit-content;
}



.tank {
  width: 2.4vi;
  height: 15vh;
  /* background-color: #151202; */
  /* border: 0.08vi solid rgba(255, 255, 255, 0.2); */
  padding: 0.6vi;
  border-radius: 0.4vi;
    box-shadow: 0 0 .5vh rgba(213, 175, 80, 0.47);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tank.fire {
  /* border-color: rgba(255, 80, 80, 0.4); */
    box-shadow: 0 0 .5vh rgba(213, 175, 80, 0.47)
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

.tank-fill {
  width: 100%;
  position: relative;
  animation: floatWater 2.5s ease-in-out infinite alternate;
}

.tank-fill .wave {
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 120%;
  background: rgba(24, 254, 254, 0.1);
  border-radius: 35%;
  animation: waveAnimation 2s ease-in-out infinite;
  transform: translate(-25%, 0);
}

.tank-percentage {
  font-size: 0.45vi;
  margin-top: 0.3vi;
  color: #ccc;
}

.tank-info {
  font-size: 0.4vi;
  margin-top: 0.2vi;
  font-weight: 600;
  color: #a1a1a1;
}
.horizontal-group {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: .3vi;
  margin-top: 1vh;
}
.tank-group {
  display: flex;
  gap: .5vi;
}

.vertical-divider {
  width: 0.15vi;
  background-color: rgba(255, 255, 255, 0.2);
  height: 20vh;
  margin: 0 0.5vi;
  border-radius: 1vi;
}

/* Animations */
@keyframes floatWater {
  0% { transform: translateY(0); }
  100% { transform: translateY(-0.3vi); }
}

@keyframes waveAnimation {
  0% { transform: translate(-25%, 0) rotate(0deg); }
  25% { transform: translate(-30%, -3%) rotate(1deg); }
  50% { transform: translate(-25%, 0) rotate(0deg); }
  75% { transform: translate(-20%, 3%) rotate(-1deg); }
  100% { transform: translate(-25%, 0) rotate(0deg); }
}
</style>
