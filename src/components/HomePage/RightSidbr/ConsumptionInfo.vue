<template>
    <div class=" data-holder2 section-title underlined-text">
      <div class="square-icon"></div>
      <div>Security System</div>
    </div>
  <div class="security-wrapper">
    <div>
      <!-- <div class="sub-section">
      <div class="dot"></div>
      <div>Access Control</div>
    </div> -->
    <div class="item-row">
      <div class="item-card">
        <img src="@/assets/remote_assets/icon/gates.svg" alt="door" class="icon" />
        <div class="label">Gates</div>
        <div class="value">25</div>
      </div>
     
      <div class="item-card1">
        <img src="@/assets/remote_assets/icon/cctv.svg" alt="door" class="icon" />
        <div class="label">CCTV</div>
        <div class="value">184</div>
      </div>
    </div>
    </div>
    <div>
      <!-- <div class="sub-section">
      <div class="dot"></div>
      <div>Lighting Control</div>
    </div> -->
    <div class="item-row">
       <div class="item-card">
        <img src="@/assets/remote_assets/icon/street-light.svg" alt="door" style="width: 4vw;height:3vh " />
        <div class="label">St Light</div>
        <div class="value">159</div>
      </div>
      <div class="item-card1">
        <img src="@/assets/remote_assets/icon/light-emergency.svg" alt="door" class="icon" />
        <div class="label">Emrg light</div>
        <div class="value">14</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.security-wrapper {
  width: 17.5vi;
  padding: 0.6vi;
  border-radius: 0.8vi;
  /* background-color: rgba(0, 0, 0, 0.1); */
  font-size: 0.6vi;
  color: #ccc;
  display: flex;
  justify-content: space-around;
  /* flex-direction: column; */
  margin-bottom: 1.2vh;
  margin-top: -.8vh;
  gap: 0.4vi;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.5vi;
  /* font-weight: 600; */
  color: white;
}

.square-icon {
  width: 0.6vi;
  height: 0.6vi;
  border: 0.1vi solid #94591e;
}

.sub-section {
  display: flex;
  align-items: center;
  gap: 0.5vi;
  /* font-weight: 500; */
  color: #909090;
  margin-top: -1vi;
    margin-bottom: .5vi;

}

.dot {
  width: 0.25vi;
  height: 0.25vi;
  border-radius: 50%;
  background-color: #00cfff;
}

.item-row {
  display: flex;
  justify-content: space-between;
  gap: 0.4vi;
}

.item-card {
  /* background-color: #151202; */
  /* width: 55%; */
  width: 3.4vi;
  border-radius: 0.4vi;
  padding: 0.4vi;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3vi;
  align-items: center;
    box-shadow: 0 0 .5vh rgba(213, 175, 80, 0.47)

}
.item-card1 {
    width: 3.4vi;

  /* background-color: #151202; */
  /* height: 8vh; */
  border-radius: 0.4vi;
  padding: 0.4vi;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3vi;
  align-items: center;
    box-shadow: 0 0 .5vh rgba(213, 175, 80, 0.47)

}

.icon {
  width: 1.9vi;
  height: 3.2vh;
}

.label {
  font-size: 0.6vi;
  font-weight: 600;
  color: #a6abb5;
  /* Light bluish text */
  letter-spacing: 0.04vi;
  margin-bottom: -0.2vi;
}

.value {
  font-size: 0.6vi;
  font-weight: 600;
  color: #E2BA56;
  /* font-weight: bold; */
}
</style>
