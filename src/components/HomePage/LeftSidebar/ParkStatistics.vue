   
    <template>  
  <div class="local_container">  
     <div class=" data-holder2 section-title underlined-text">
      <div class="square-icon"></div>
      <div>Parking Statistics</div>
    </div>
    <div class="park-content">  
      <div class="box-content">  
        <div class="text-icon">  
          <div class="" style="top: 3vi; left: 0%; margin-bottom: 0.5vi;">  
            <img style="width: 1.2vi; height: 1.4vi;" src="@/assets/remote_assets/icon/park2.svg" />  
          </div>  
          <div class="">Owners Vehicle</div>  
        </div>  
        <div class="bright_cyan" style="text-align: center;">  
          <AnimatedGradully :targetVolume="data.ownersVehicle" :duration="2000" unit="" />  
        </div>  
      </div>  
      <div class="box-content">  
        <div class="text-icon">  
          <div class="" style="top: 3vi; left: 0%; margin-bottom: 0.5vi;">  
            <img style="width: 1.2vi; height: 1.4vi;" src="@/assets/remote_assets/icon/park2.svg" />  
          </div>  
          <div class="">Visitors Vehicle</div>  
        </div>  
        <div class="bright_cyan" style="text-align: center; margin-bottom: 0.5vi;">  
          <AnimatedGradully :targetVolume="data.visitorsVehicle" :duration="2000" unit="" />  
        </div>  
      </div>  
      <div class="box-content" style="padding-right: 4vi;">  
        <div class="text-icon" style=" margin-top: 0.5vi;">  
          <div class="" style="top: 3vi; left: 0%;">  
            <img style="width: 1.2vi; height: 1.4vi;" src="@/assets/remote_assets/icon/electric2.svg" />  
          </div>  
          <div class="">Electric Slot Occupied</div>  
        </div>  
        <div class="bright_cyan" style="text-align: right;">  
          <AnimatedGradully :targetVolume="data.electricOccupied" :duration="2000" unit="" />  
        </div>  
      </div>  
      <div class="box-content">  
        <div class="text-icon" style=" margin-top: 0.5vi;">  
          <div class="" style="top: 3vi; left: 0%;">  
            <img style="width: 1.2vi; height: 1.4vi;" src="@/assets/remote_assets/icon/electric3.svg" />  
          </div>  
          <div class="">Electric Slot Free</div>  
        </div>  
        <div class="bright_cyan" style="text-align: center;">  
          <AnimatedGradully :targetVolume="data.electricFree" :duration="2000" unit="" />  
        </div>  
      </div>  
    </div>  
    <div class="underline" style="top: -3.5vi;"></div>  
  </div>  
</template>  

<script setup>  
import AnimatedGradully from '@/components/AnimatedGradully.vue' 
import {reactive} from 'vue'

import { Data } from '@/helpers/data_sample'
const data = reactive(Data)



// Example parking data (use your actual data)  

</script>  

<style scoped>  
.local_container {  
  letter-spacing: .05vi;  
  font-weight: 500;  
  font-size: .7vi;  
}  
.park_content {  


}  
.bright_cyan {  
  color: rgb(238, 196, 90);  
  margin-top: -0.4vi;  
}  
.park-content {  
  color: #a1a1a1;  
  display: grid;  
  grid-template-columns: repeat(2, 9vi);   
  font-size: .60vi;  
  letter-spacing: .04vi;  
  font-weight: 600;  
  gap: 1vi;   
  height: 100%;   
  padding-left: 1vi;  
}  
.text-icon {  
  display: flex;  
  justify-content: flex-start;  
  gap: 7%;  
  text-wrap: nowrap;  
}  

 
</style>