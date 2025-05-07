<template>
  <div class="chiller-system">
    <div class="px12" >
      <div class="underline" style="width: 30%;margin-bottom: .7vh;margin-top: .5vh;padding-left: 0.4vi;color: white;  white-space: nowrap;">
        Chillers System
      </div>
    </div>
    <div class="chiller-consumtiom-cost">
      <div class="chiller-consumtion" >
        <!-- <img style="height: .7vi;width: .7vi;" src="@/assets/remote_assets/icon/elec9.svg" alt=""> -->
        <span style="color: #8cb6b5;">
          Consumptions:
        </span>
        <span style="padding-left: .2vi;">
          <AnimatedGradully :targetVolume="9736" :duration="2000" unit="Kw" unit-color="#DBCEF3" />
        </span>
      </div>
      <div class="chiller-cost">
        <span style="color: #8cb6b5;">
          Cost:
        </span>
        <span style="padding-left: .2vi;">
          <AnimatedGradully :targetVolume="18751" :duration="2000" unit="SR" unit-color="#DBCEF3" />
        </span>
      </div>
        
    </div>
    <div class="chiller-bars">
      <div class="assets-content">
      <div class="assets-titles-v">
        <span class="title_name_icon">
          <img src="@/assets/remote_assets/icon/upward.svg" style="height: 1.6vh;width: 1.6vh;" alt="" /> Supply
        </span>
        <span class="title_name_icon">
          <img src="@/assets/remote_assets/icon/upward3.svg" style="height: 1.6vh;width: 1.6vh;" alt="" /> Return
        </span>
      </div>
      <div class="assets-bars">
        <div>
          <BasicProgressBar :width="bar_width" :height="bar_height"  :bar_color="'#00E1BD'"  

             :value="50" :duration="4000" :showArrow="true" />
        </div>
        <div>
          <BasicProgressBar :width="bar_width" :height="bar_height" :bar_color="'#43BAFE  '"
            :value="90" :duration="4000" :showArrow="true" />
        </div>
      </div>
      <div class="assets-bars-values">
        <div style="white-space: nowrap;">
          <AnimatedGradully :targetVolume="9" :duration="2000" unit="°C" unit-color="whitea"/>
        </div>
        <div style="white-space: nowrap;">
          <AnimatedGradully :targetVolume="15" :duration="2000" unit="°C" unit-color="white" />
        </div>
      </div>
    </div>
   </div>
    <div class="chiller-table">
    <div style="left: 5.5%; font-weight: 300; width: 100%; top: 4vh; color: white;" @mouseenter="pauseScrolling"
      @mouseleave="resumeScrolling">
      <div class="scroll-wrapper">
        <table>
          <thead>
            <tr class="px10" style="background: rgba(0, 0, 0, .2);font-size: 0.4vi;">
              <th style="color: aqua;">Chillers&nbsp;&nbsp; </th>
              <th style="color: aqua;">Status</th>
              <th style="color: aqua;">Temp</th>
              <th style="color: aqua;">Running Hours</th>
            </tr>
          </thead>
        </table>
        <div class="scroll-container">
          <table>
            <tbody ref="tableBody">
              <tr v-for="(chiller, index) in Chillers" :key="chiller.name + index">
                <td style="width: 26%;color:white;">{{ chiller.name }}</td>
                <td
                  :style="chiller.status === 'ON' ? { color: 'white', fontWeight: '500' } : { color: 'white', fontWeight: 'normal' }"
                  style="width: 19%; text-align: center;">
                  {{ chiller.status }}
                </td>
                <td style="width:16%;text-align: center;">{{ chiller.temperature }}</td>
                <td style="text-align: center;">{{ chiller.last_maintenance }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>      
  </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import AnimatedGradully from '@/components/AnimatedGradully.vue'
import BasicProgressBar from '@/components/BasicProgressBar2.vue'
let bar_width = '9vi'
let bar_height = '0.6vh'

const Chillers = [
  { name: 'Chiller 1', status: 'ON', temperature: '5°C', last_maintenance: '72h' },
  { name: 'Chiller 2', status: 'OFF', temperature: '--', last_maintenance: '48h' },
  { name: 'Chiller 3', status: 'OFF', temperature: '--', last_maintenance: '36h' },
  { name: 'Chiller 4', status: 'ON', temperature: '7°C', last_maintenance: '24h' },
]

const tableBody = ref(null);

const startScrolling = () => {
  if (tableBody.value) {
    tableBody.value.style.animationPlayState = "running";
  }
};

const pauseScrolling = () => {
  if (tableBody.value) {
    tableBody.value.style.animationPlayState = "paused";
  }
};

const resumeScrolling = () => {
  startScrolling();
};

onMounted(() => {
  startScrolling();
});

</script>

<style scoped>
.underline::after {
  content: '';
  display: block;
  width: 100%;
  height: 0.2vh;
  margin-top: .3vh;
  background: linear-gradient(to right, transparent, #1b606b 50%, transparent);
  transform: scaleX(0.9);
  animation: underlineAnimation 8s infinite;
}
.title_name_icon {
  display: flex;
  gap: .4vi;
  align-items: center;
  /* background-color: rgba(13, 5, 7, 0.337);border-radius: .4vi; */
}

.assets-bars-values {
  /* padding: 0vi .3vi; */
  font-size: .5vi;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  text-align: center;
  margin-left: .3vi;
  /* background-color: rgba(13, 5, 7, 0.337);border-radius: .1vi; */

}

.assets-titles-h {
  padding: .2vh 1vi;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, transparent, #00ccff 50%, transparent);
}

.assets-titles-v {
  /* padding: .5vi 1vi;*/
  display: grid;
  gap: 1vh;
  font-size: .5vi;
  font-weight: 500;
  letter-spacing: .05vi;
  margin-right: .6vi;
}

.assets-bars {
  padding: .2vh 0vi;
  /* margin:2.5vi; */
  display: grid;
  gap: 2vh;
  /* width:40%;
   */
  padding-right: 0%;
}

.assets-content {
  color:rgb(161, 161, 161);
  font-size: .6vi;
  display: flex;
  align-items: center;
  font-size: .6vi;
  padding: .6vi;

}

.chiller-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: .5vi;
}

.chillers {
  display: flex;
  position: relative;
  justify-content: start;
  font-size: .5vi;

}

.chiller-data {
  display: flex;
  justify-content: space-around;
  /* gap: 1vi; */
  font-size: .5vi;

}

.values {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  /* gap: 0.1vi; */
  font-size: .5vi;

}

.chiller-system {
  /* background: linear-gradient(to top, rgb(0, 0, 0), rgb(0 0 0 / 60%)); */
  border: .15vi solid rgba(170, 162, 162, 0.4);
  border-bottom: none;
  border-top: none;
  border-left: none;
  padding-right: .25vi;
  color:rgb(161, 161, 161);
  font-size: .5vi;
  width: 16vi;
}

.chiller-system h3 {
  text-align: left;
  /* margin-bottom: 1vi; */
  font-size: .5vi;
}

table {
  /* padding-left: 5%; */
  width: 96%;
  border-collapse: collapse;
  /* table-layout: fixed;  */
  background-color: rgba(0, 0, 0, 0.1);
}

thead {
  background: linear-gradient(to bottom, #2a2a2a 0%, transparent);
  letter-spacing: 0.06vi;
  position: sticky;
  /* Keeps header fixed */
  top: 0;
  z-index: 2;
}

th,
td {
  /* padding: .2vh .2vi; */
  padding: 0.25vi;

  font-size: .45vi;
  text-align: left;
  font-weight: 500;
  color:rgb(161, 161, 161);

}

tr {
  height: 1.2vh;
}

tr:nth-child(even) {
  background-color: rgba(124, 212, 243, 0.09);
}

tr:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.2);
}

.status {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.5vi;
}

.status.on {
  color: #4caf50;
}

.status.off {
  color: #f44336;
}

.table-container {
  max-height: 10vh;
  /* Define container height */
  overflow-y: auto;
  /* Enable vertical scrolling */

}

.scroll-wrapper {
  position: relative;
  padding-left:.6vi ;

}

.scroll-container {
  height: 7vh;
  overflow: hidden;
  position: relative;
  margin-top: -0.25vi;
  /* Prevent gaps between header and scrolling rows */
}

tbody {
  animation: scroll-up 15s linear infinite;
}

@keyframes scroll-up {
  0% {
    transform: translateY(0%);
  }

  90% {
    transform: translateY(-50%);
  }

  100% {
    transform: translateY(-50%);
  }
}
.chiller-consumtiom-cost {
 font-size: .6vi;
 font-weight: 500;
  display: flex;
  padding-top: .5vh;
  padding-bottom: .5vh;
  align-items: center;
  justify-content: space-around;
  color: rgb(161, 161, 161)  ;
  border: .15vi solid rgba(19, 113, 180, 0.4);
  border-radius: .5vi;
/*  border-top-style: dotted;*/
/*  border-bottom-style: dotted;*/
  margin-right: .25vi;
  margin-left: .25vi;
}
.chiller-consumtion{
 display: flex;
 gap: .5vi;
 /* padding-left: .6vi; */
 
}
.chiller-cost{
  display: flex;
 gap: .5vi;
 /* padding-left: .6vi; */
}
.chiller-bars{
  margin-top: .6vh;
  margin-right: .25vi;
  margin-left: .25vi;
  border: .15vi solid rgba(19, 113, 180, 0.4);
  border-radius: .8vi;
  /* border-bottom-left-radius: 13%;
  border-bottom-right-radius: 13%; */
/*  border-top-style: dotted;*/
/*  border-bottom-style: dotted;*/
}
.chiller-table{
  margin-top: .7vh;
  margin-left: .25vi;
  margin-right: .25vi;
  /* margin-bottom: .5vi; */
  border: .15vi solid rgba(19, 113, 180, 0.4);
  border-radius: .8vi;
/*  border-top-style: dotted;*/
/*  border-bottom-style: dotted;*/
}

</style>
