<template>
  <div>
    <div class="data-holder2 underlined-text">
      <div class="img-wrapper">
        <!-- <img src="@/assets/remote_assets/icon/occupancy.svg" /> -->
      </div>
      <div>
        Assets Maintainance
      </div>
    </div>
    <div class="assets-titles-h">
      <span>
        Assets
      </span>
      <span>
        No. Of Reepairs
      </span>
      <span>
        Alerts
      </span>
    </div>
    <div class="assets-content">
      <div class="assets-titles-v">
        <span>
          Fire Fighting
        </span>
        <span>
          Plumping
        </span>
        <span>
          lighting
        </span>
        <span>
          Elevators
        </span>
      </div>
      <div class="assets-bars">
        <div>
          <BasicProgressBar :width="bar_width" :height="bar_height" :fill_color="'#d4c464'" :empty_color="'#8a6c4c'"
            :value="(80)" :duration="8000" :showArrow="true" />
        </div>
        <div>
          <BasicProgressBar :width="bar_width" :height="bar_height" :fill_color="'#d4c464'" :empty_color="'#8a6c4c'"
            :value="(80)" :duration="8000" :showArrow="true" />
        </div>
        <div>
          <BasicProgressBar :width="bar_width" :height="bar_height" :fill_color="'#d4c464'" :empty_color="'#8a6c4c'"
            :value="(80)" :duration="8000" :showArrow="true" />
        </div>
        <div>
          <BasicProgressBar :width="bar_width" :height="bar_height" :fill_color="'#d4c464'" :empty_color="'#8a6c4c'"
            :value="(80)" :duration="8000" :showArrow="true" />
        </div>
      </div>
      <div class="assets-bars-values">
        <div>
           <AnimatedGradully :targetVolume="5" :duration="2000" unit="" />
         </div>
        <div>
           <AnimatedGradully :targetVolume="5" :duration="2000" unit="" />
         </div>
        <div>
           <AnimatedGradully :targetVolume="5" :duration="2000" unit="" />
         </div>
        <div>
           <AnimatedGradully :targetVolume="5" :duration="2000" unit="" />
         </div>
        
      </div>
    </div>
  </div>
</template>
<script setup>
import BasicProgressBar from '@/components/BasicProgressBar.vue'
import AnimatedGradully from '@/components/AnimatedGradully.vue'
let radialbar_empty_color = '#4c5a6c'
let radial_bar_fill_color1 = '#75aaff'
let bar_width = '8.5vi'
let bar_height = '0.4vi'

</script>
<style scoped>
*:not(.data-holder2) {
  color: #ffffff;
  font-weight: 500;
  font-size: .8vi;
}
.assets-bars-values
{
  padding-top: .5vi;
  padding-left:10vi;
  display: grid;
  gap: 1vi;
}
.assets-titles-h {
  padding: .1vi 1vi;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, transparent, #2f3537 50%, transparent);
}

.assets-titles-v {
  padding: .5vi 1vi;
  display: grid;
  gap: 1vi;
}
.assets-bars
{
  padding: 0vi 0vi;
  /* margin:2.5vi; */
  display: grid;
  gap: 2vi;
  /* width:40%;
   */
   padding-right: 0%;
}
.assets-content {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* gap: 1vi; */
}
</style>