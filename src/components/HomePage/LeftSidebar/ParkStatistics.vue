    <template>
  <div class="local_container">
    <div class=" data-holder2 section-title">
      <div class="square-icon"></div>
      <div>Parking Statistics</div>
    </div>
    <div class="park-content">
      <div class="box-content">
        <div class="text-icon">
          <div class="   " style="top: 3vi; left: 0%;">
          <img style="width:1.2vi;height: 1.4vi;" src="@/assets/remote_assets/icon/park2.svg" />
        </div>
        <div class="  ">
          Owners Vehicle
        </div>
        </div>
        <div class="   bright_cyan" style="text-align: center;margin-bottom:2vh">
          <AnimatedGradully :targetVolume="324" :duration="2000" unit="" />
        </div>
      </div>
      <div class="box-content">
        <div class="text-icon">
          <div class="   " style="top: 3vi; left: 0%;">
          <img style="width:1.2vi;height: 1.4vi;" src="@/assets/remote_assets/icon/park2.svg" />
        </div>
        <div class="  " >
          Visitors  Vehicle
        </div>
        </div>
        <div class="   bright_cyan" style="text-align: center;">
          <AnimatedGradully :targetVolume="175" :duration="2000" unit="" />
        </div>
      </div>
      <div class="box-content" style="padding-right: 4vi;">
        <div class="text-icon">
          <div class="   " style="top: 3vi; left: 0%;">
            
          <img style="width:1.2vi;height: 1.4vi;" src="@/assets/remote_assets/icon/electric2.svg" />
        </div>
        <div class="  ">
          Electric Slot Occupied
        </div>
        </div>
        <div class="   bright_cyan" style="text-align: right;">
          <AnimatedGradully :targetVolume="31" :duration="2000" unit="" />
        </div>
      </div>
      <div class="box-content">
        <div class="text-icon">
          <div class="   " style="top: 3vi; left: 0%;">
          <img style="width:1.2vi;height: 1.4vi;" src="@/assets/remote_assets/icon/electric3.svg" />
        </div>
        <div class="  " >
          Electric Slot Free
        </div>
        </div>
        <div class="   bright_cyan" style="text-align: center;">
          <AnimatedGradully :targetVolume="87" :duration="2000" unit="" />
        </div>
      </div>
    </div>
    <div class="underline" style="top: -4vi;"></div>
  </div>
</template>
<script setup>
import AnimatedGradully from '@/components/AnimatedGradully.vue'
</script>
<style scoped>
.local_conatiner
{
  letter-spacing: .05vi;
  font-weight: 500;
  font-size: .7vi;
}
.park_content
{
  /* display: flex;
  justify-content: space-between; */
}
.bright_cyan
{
  /* color: rgba(191, 171, 121, 1); */
  color: rgb(238, 196, 90);
  margin-top: -0.4vi;
}
.park-content
{
  color: #a1a1a1;
  display: grid;
  grid-template-columns: repeat(2, 9vi); 
  /* grid-template-rows: repeat(2, fr);    */
  font-size: .60vi;
  letter-spacing: .04vi;
  font-weight: 600;
  gap: 1vi; 
  height: 100%; 
  padding-left: 1vi;
}
/* .park-content::after
{
  content: "";
  position: relative;
  height:.05vi; 
  background-color:  rgba(255, 255, 255, 0.5);
  width: 195%;
  left: 0;
  top:-3.6vi
} */
.text-icon
{
  display: flex;
  justify-content: flex-start;
  gap: 7%;
  text-wrap: nowrap;
}
</style>