<template>
  <div class="cost-wrapper">
     <div class="px12" >
      <div class="underline" style="width: 30%;margin-bottom: .7vh;margin-top: .5vh;padding-left: 0.4vi;color: white;  white-space: nowrap;">
        Operation Cost - Month (EGP)
      </div>
    </div>

    <div class="invoices">
      <div class="text-icon">
        <div class="icon">
          <img src="@/assets/remote_assets/icon/electric.svg" alt="" />
        </div>
        <div class="text">Electrical</div>
      </div>
      <div class="values">
        <div><AnimatedGradully :targetVolume="34510" :duration="2000" /></div>
        <div class="change">+14%</div>
        <div><img src="@/assets/remote_assets/icon/up.png" alt="" class="arrow" /></div>
      </div>
    </div>

    <div class="invoices">
      <div class="text-icon">
        <div class="icon">
          <img src="@/assets/remote_assets/icon/water2.svg" alt="" />
        </div>
        <div class="text">Water</div>
      </div>
      <div class="values">
        <div><AnimatedGradully :targetVolume="64520" :duration="2000" /></div>
        <div class="change">-20%</div>
        <div><img src="@/assets/remote_assets/icon/down.png" alt="" class="arrow" /></div>
      </div>
    </div>

    <div class="invoices">
      <div class="text-icon">
        <div class="icon">
          <img src="@/assets/remote_assets/icon/gas1.svg" alt="" />
        </div>
        <div class="text">Gas</div>
      </div>
      <div class="values">
        <div><AnimatedGradully :targetVolume="57600" :duration="2000" /></div>
        <div class="change">+9%</div>
        <div><img src="@/assets/remote_assets/icon/up.png" alt="" class="arrow" /></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AnimatedGradully from '@/components/AnimatedGradully.vue';
</script>

<style scoped>
.cost-wrapper {
  width: 16vi;
 border: .15vi solid rgba(170, 162, 162, 0.4);
  border-bottom: none;
  border-top: none;
  border-right: none;
  padding: 0.8vh 0.5vi 0.6vh 0.5vi;
  display: flex;
  flex-direction: column;
  gap: .8vi;
  font-size: 0.6vi;
  font-weight: 500;
  color: #8cb6b5;
  background-color: rgba(0, 0, 0, 0.1);
}

.title-section {
  display: flex;
  align-items: center;
  gap: 0.6vi;
  margin-bottom: 0.5vi;
}

.img-wrapper img {
  width: 1.2vi;
  height: 1.2vi;
}

.invoices {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(4, 19, 70, 0.221);
  padding: 0.3vi;
  border: 0.1vi solid rgba(82, 85, 94, 0.655);
  border-radius: 0.3vi;
  /* height: 2.5vi; */
}

.text-icon {
  display: flex;
  align-items: center;
  gap: 0.5vi;
  background-color: rgba(108, 116, 128, 0.16);
  border-radius: 0.2vi;
  /* padding: 0.3vi;     */
  width: 32%;
  height: 100%;
  justify-content: center;
}

.icon img {
  width: 1vi;
  height: 1vi;
}

.text {
  font-size: 0.7vi;
  font-weight: 600;
  color: #a1a1a1;
}

.values {
  display: flex;
  align-items: center;
  gap: 1.5vi;
  justify-content: center;
  background-color: rgba(108, 116, 128, 0.137);
  border-radius: 0.2vi;
  height: 100%;
  width: 65%;
}

.change {
  font-weight: 500;
  font-size: 0.6vi;
}

.arrow {
  width: 1.2vi;
}
</style>
