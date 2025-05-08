<template>
  <div class="water-tanks">
    <div class=" data-holder2 section-title">
      <div class="square-icon"></div>
      <div>Water Tank Levels</div>
    </div>

    <div class="tank-container">
      <div
        class="tank"
        v-for="(tank, index) in tanks"
        :key="index"
      >
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
        <div class="tank-percentage">{{ tank.level }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaterTanksVue",
  setup() {
    const tanks = [
      { name: "Tank A", level: 75, color: "rgba(0, 191, 255, 0.4)" },
      { name: "Tank B", level: 50, color: "rgba(255, 215, 0, 0.4)" },
      { name: "Tank C", level: 30, color: "rgba(255, 140, 0, 0.4)" },
    ];
    return { tanks };
  },
};
</script>

<style scoped>
.water-tanks {
  padding: 0.2vi;
  color: #ccc;
  font-size: 0.4vi;
  font-weight: 500;
  margin-bottom: 1vh;
}

.tank-container {
  display: flex;
  justify-content: center;
  /* justify-content: space-between; */
  gap: 1.8vw;
  height: 17vh;
  align-items: flex-end;
  margin-top: -1.5vh;
}

.tank {
  width: 3.5vi;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #151202;
  /* background:linear-gradient(#2a2a2a -50%,transparent); */
  border: 0.08vi solid rgba(255, 255, 255, 0.2);
  padding: 0.5vi;
  border-radius: 0.4vi;
    box-shadow: 0 0 .5vh rgba(213, 175, 80, 0.47)

}

.tank-label {
  font-size: 0.5vi;
  margin-bottom: 0.3vi;
  color: #a1a1a1;
}

.tank-visual {
  width: 90%;
  height: 10vh;
  background-color: rgba(255, 255, 255, 0.05);
  border: 0.05vi solid rgba(255, 255, 255, 0.2);
  position: relative;
  border-radius: 0.3vi;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
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
  transform: translate(-25%, 0); /* حتى يبدأ الموج من المنتصف */
}

.tank-percentage {
  font-size: 0.45vi;
  margin-top: 0.3vi;
  color: #ccc;
}

/* الحركة الرأسية */
@keyframes floatWater {
  0% { transform: translateY(0); }
  100% { transform: translateY(-0.3vi); }
}

/* تموّج الماء */
@keyframes waveAnimation {
  0% {
    transform: translate(-25%, 0) rotate(0deg);
  }
  25% {
    transform: translate(-30%, -3%) rotate(1deg);
  }
  50% {
    transform: translate(-25%, 0) rotate(0deg);
  }
  75% {
    transform: translate(-20%, 3%) rotate(-1deg);
  }
  100% {
    transform: translate(-25%, 0) rotate(0deg);
  }
}
</style>
