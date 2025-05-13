<template>
  <div class="container">
    <div class="px12" >
      <div class="underline" style=" font-size: 0.6vi;
  font-weight: 300;  width: 30%;margin-bottom: .7vh;margin-top: .5vh;padding-left: 0.4vi;color: white;white-space: nowrap;">
        Total Operation Cost - Month (OR)
      </div>
    </div>
    <div>
   <div style="display: flex;  gap:0vh; flex-direction: column  ;justify-content: space-between;align-items: center;margin-top: 2.5vh;">
       <div class="invoices">
        <div class="text-icon">
          <div class="icon"><img src="@/assets/remote_assets/icon/electric.svg" alt=""></div>
          <div class="text">Electrical</div>
        </div>
        <div class="invoicesValues background-bar bright_cyan  ">
          <div >
            <AnimatedGradully :targetVolume="data.electrical" :duration="2000" />  
          </div>
          <div style="font-weight:500 ; font-size: 0.6vi;">+14%</div>
          <div>
            
            <img src="@/assets/remote_assets/icon/up.png" alt="" style="width: 1.2vi;">
          </div>
        </div>
      </div>
      <div class="invoices">
        <div class="text-icon">
          <div class="icon"><img src="@/assets/remote_assets/icon/water2.svg" alt=""></div>
          <div class="text">Water</div>
        </div>
        <div class="invoicesValues background-bar bright_cyan ">
          <div >
            <AnimatedGradully :targetVolume="data.water" :duration="2000" />  
          </div>
          <div style="font-weight:500 ; font-size: 0.6vi;">-20%</div>
          <div>
            <img src="@/assets/remote_assets/icon/down.png" alt="" style="width: 1.2vi;">
          </div>          
        </div>
      </div>
      <div class="invoices">
        <div class="text-icon">
          <div class="icon"><img src="@/assets/remote_assets/icon/gas1.svg" alt=""></div>
          <div class="text">Gas</div>
        </div>
        <div class="invoicesValues background-bar bright_cyan ">
          <div >
            <AnimatedGradully :targetVolume="data.gas" :duration="2000" />  
          </div>
          <div style="font-weight:500 ; font-size: 0.6vi;">+9%</div>
          <div>
            <img src="@/assets/remote_assets/icon/up.png" alt="" style="width: 1.2vi;">
          </div>          
        </div>
      </div>
   </div>
    </div>
  </div>
</template>

<script setup>
import AnimatedGradully from '@/components/AnimatedGradully.vue'
import {reactive} from 'vue'

import { Data } from '@/helpers/data_sample'
const data = reactive(Data)
</script>

<style scoped>
.container {
  letter-spacing: .07vi;
  font-weight: 600;
  font-size: .7vi;
  width: 16.5vw;
  border: .15vi solid rgba(170, 162, 162, 0.4);
  border-bottom: none;
  border-top: none;
  border-left: none;
}

.invoices {
  margin-top: .5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5vi;
  height: 2.5vi;
  width: 100%;
}

.invoicesValues {
  display: flex;
  justify-content: center;
  gap: 1.5vi;
  align-items: center;
}

.bright_cyan {
  color: rgb(238, 196, 90);
}

.icon img {
  width: 1vi;
  height: 1vi;
  padding-top: 40%;
}

.text {
  color: #a1a1a1;
  font-size: .7vi;
  letter-spacing: 0.01vi;
  font-weight: 600;
}

.background-bar {
  width: 97%;
  height: 60%;
  background-color: rgba(108, 116, 128, 0.137);
  border-radius: .15v;
  margin-bottom: 0.5vi;
}

.text-icon {
  display: flex;
  padding-left: .5vw;
  background-color: rgb(108 116 128 / 16%);
  align-items: center;
  gap: .5vi;
  height: 60%;
  width: 50%;
  border-radius:.2vi;
  margin-bottom: 0.5vi;
}
</style>
