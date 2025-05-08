<template>
    <div class=" data-holder2 section-title">
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
        <img src="@/assets/remote_assets/icon/icon11.png" alt="door" class="icon" />
        <div class="label">Gates</div>
        <div class="value">21</div>
      </div>
      <div class="item-card">
        <img src="@/assets/remote_assets/icon/icon12.png" alt="door" class="icon" />
        <div class="label">Street Lighting</div>
        <div class="value">14</div>
      </div>
    </div>
    </div>
    <div>
      <!-- <div class="sub-section">
      <div class="dot"></div>
      <div>Lighting Control</div>
    </div> -->
    <div class="item-row">
      <div class="item-card1">
        <img src="@/assets/remote_assets/icon/icon13.png" alt="door" class="icon" />
        <div class="label">Cctv</div>
        <div class="value">184</div>
      </div>
      <div class="item-card1">
        <img src="@/assets/remote_assets/icon/icon14.png" alt="door" class="icon" />
        <div class="label">Emergency light</div>
        <div class="value">14</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
// لا حاجة لسكربت حاليًا، المكون ثابت
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
  margin-bottom: .5vh;
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
  background-color: #151202;
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

  background-color: #151202;
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
  width: 1.5vi;
  height: 1.5vi;
}

.label {
  font-size: 0.6vi;
}

.value {
  font-size: 0.8vi;
  color: #E2BA56;
  /* font-weight: bold; */
}
</style>
