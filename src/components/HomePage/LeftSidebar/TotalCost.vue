<template>
  <div class="container">
    <div class="data-holder2 underlined-text" style="margin-bottom: 0.5vi;">
      <div class="img-wrapper">
        <img src="@/assets/remote_assets/icon/invoice2.svg" />
      </div>
      <div>
        Operation Cost - Month (EGP) 
      </div>
    </div>
    <div>
      <div class="invoices">
        <div class="text-icon">
          <div class="icon"><img src="@/assets/remote_assets/icon/electric.svg" alt=""></div>
          <div class="text">Electrical</div>
        </div>
        <div class="invoicesValues background-bar bright_cyan  ">
          <div >
            <AnimatedGradully :targetVolume="34510" :duration="2000" />
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
            <AnimatedGradully :targetVolume="64520" :duration="2000" />
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
            <AnimatedGradully :targetVolume="57600" :duration="2000" />
          </div>
          <div style="font-weight:500 ; font-size: 0.6vi;">+9%</div>
          <div>
            <img src="@/assets/remote_assets/icon/up.png" alt="" style="width: 1.2vi;">
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AnimatedGradully from '@/components/AnimatedGradully.vue'

</script>
<style scoped>
.container
{
  letter-spacing: .07vi;
  font-weight: 600;
  font-size: .7vi;
}
.invoices {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5vi;
  /* Align items vertically in the center */
  height: 2.5vi;
  height: 2.5vi;
  /* Add spacing between the divs */
  padding-left: 0.5vi;
}
.invoicesValues
{
  display: flex;
  /* padding-right: .8vi; */
  justify-content:center;
  gap: 2vi;
  align-items: center;
}
.bright_cyan
{
  /* color: rgba(191, 171, 121, 1); */
  color: rgb(238, 196, 90);
}
.icon img {
  width: 1vi;
  height: 1vi;
  padding-top: 40%;
  /* width: 20px;
  height: 20px; */
}

.text {
  color:#a1a1a1;
  /* Adjust the text color */
  font-size: .7vi;
  letter-spacing: 0.01vi;
  font-weight: 600;
  /* Adjust the text size */
}

.background-bar {
  width: 97%;
  /* Set the width of the third div */
  height: 60%;
  /* Set height to match the design */
  background-color: rgba(108, 116, 128, 0.137);
  /* Background color with transparency */
  border-radius: .15v;
  margin-bottom: 0.5vi;
}

.text-icon {
  display: flex;
  background-color: rgb(108 116 128 / 16%);
  padding-left: .5vi;
  align-items: center;
  gap: .5vi;
  height: 60%;
  width: 50%;
  border-radius:.2vi;
  margin-bottom: 0.5vi;
}
</style>
