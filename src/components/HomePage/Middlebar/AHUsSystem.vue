<template>
  <div class="sidebar">
    <div class="px12" >
      <div class="underline" style="width: 30%;margin-bottom: .7vh;margin-top: .5vh;padding-left: 0.4vi;color: white;">
        AHUs System
      </div>
    </div>
    <!-- Donut Chart -->
    <div class="ahu-system">
      <div class="right-side">
        <div class="right-content px12">
          <div class="contents">
            <div style="font-weight: 600;">Warehouse1</div>
            <div style="display: flex;justify-content: space-between;color: white;font-weight: 500;">
              <div class="text-shadow">6 ON</div>
              <div class="text-shadow">24°C</div>
            </div>
          </div>
          
          <div>
            <div class="contents">
              <div >Adminstration</div>
              <div style="display: flex;justify-content: space-between; gap: 0.5vi;color: white;font-weight: 500;">
                <div class="text-shadow">6 ON</div>
                <div class="text-shadow">24°C</div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex; align-items: center;justify-content: center;margin
        : -0.5vi;padding-right:0.5vi">
        <DonutChart2 />
      </div>
        <div>
          <div class="right-content">
            <div class="contents">
              <div >Warehouse2</div>
              <div style="display: flex;justify-content: space-between;color: white;font-weight: 500;">
                <div class="text-shadow">6 ON</div>
                <div class="text-shadow">24°C</div>
              </div>
            </div>
            <div style="width:34%; display: flex;flex-direction: column">
              <div class="contents">
                <div style="text-align: center;">Service</div>
                <div style="display: flex;justify-content: space-between;color: white;font-weight: 500;">
                  <div class="text-shadow">6 ON</div>
                  <div class="text-shadow">24°C</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </div>
  </div>
</template>

<script>
import DonutChart2 from "@/components/DoughnutChart2.vue";

import AnimatedGradully from '@/components/AnimatedGradully.vue';
export default {
  name: "RightSidebar",
  components: {
    DonutChart2,
  },
};
</script>

<style scoped>
.underline::after {
  content: '';
  display: block;
  width: 100%;
  height: 0.2vh;
  margin-top: .3vh;
  /* background: linear-gradient(to right, transparent, #ffffff 50%, transparent); */
  background: linear-gradient(to right, transparent, #1b606b 50%, transparent);

  transform: scaleX(0.9);
  animation: underlineAnimation 8s infinite;
}

.sidebar {
  /* background: linear-gradient(to top, rgb(0, 0, 0), rgb(0 0 0 / 60%)); */
  border: .15vi solid rgba(170, 162, 162, 0.4);
  border-bottom: none;
  border-top: none;
  border-right: none;
  /* border-radius: .5vi; */
  width: 15vi;
  /* background-color: #020205; */
  /* background-color: rgba(3, 23, 44, 0.806); */
  padding-bottom: 0.5vh;
  /* border-radius: 1vi; */
  padding-top:0.2vh;
}
.contents{
 display: flex;
 gap: 1.2vh;
 flex-direction:column;
 /* background-color: rgba(4, 19, 70, 0.221); */
 padding: 0.2vi;
 border: .1vi solid rgba(82, 85, 94, 0.655);
 border-radius: 0.3vi;
 width: 4vi;
 text-align: center;
 /* box-shadow: 0 4px 4px rgba(85, 160, 159, 0.5); */
}
.ahu-system {
  display: flex;
  align-items: end;
  gap: 3vh;
  margin-top: 1vh;
  margin-right: 1.4vh;
  margin-left: .5vi;
  border: .15vi solid rgba(19, 113, 180, 0.4);
  border-radius: .8vi;
}

.right-side {
    padding-left: 0.5vi;
    padding-top: 0.8vh;
    padding-bottom: .6vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .8vh;
}
.text-shadow{
/* text-shadow: 1px 1px 3px rgb(164, 185, 193) ; */
}
.right-content {
  display: flex;
  gap: 3.8vi;
  color: #8cb6b5;
  width: 100%;
  font-size: .5vi;
  font-weight: 400;
}


.number {
  display: flex;
  /* justify-content: space-between; */
  /* justify-content:start; */
  gap: 1.5vi;
  width: 100%;
}

.content {
  display: flex;
  /* justify-content: center ; */
  align-items: center;
  gap: 0.5vi;
  color: #8cb6b5;
  /* background: linear-gradient(to right, transparent, #192F50 50%, transparent); */
  /* background-color: rgba(108, 116, 128, 0.068); */

}


</style>
