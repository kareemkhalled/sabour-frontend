<template>
    <div>
        <!-- <div class="data-holder2 underlined-text" style="padding-bottom: 0%;margin-bottom: 0%;">
            <div>
                Environmental sustainability
            </div>
        </div>
        <div class="RadarChart">

            <div class="RadarData">
                <div class="RadarROW">
                    <div>
                        Recycle
                    </div>
                    <div class="radar_value">
                        70 Tone
                    </div>
                </div>
                <div class="RadarROW">
                    <div>
                        Reduce
                    </div>
                    <div class="radar_value">
                        85 Tone
                    </div>
                </div>
                <div class="RadarROW">
                    <div>
                        Reuse
                    </div>
                    <div class="radar_value">
                        60 Tone
                    </div>
                </div>
                <div class="RadarROW">
                    <div>
                        Dispoe
                    </div>
                    <div class="radar_value">
                        71 Tone
                    </div>
                </div>
            </div>
            <div>
                <RadarChart />
            </div>
        </div> -->

        <div class="data-holder2 underlined-text"
            style="padding-bottom: 0%;margin-bottom: 0%;padding-top: 0%;margin-top: 0%;">
            <div>
                Sustainability - Month
            </div>
        </div>



        <!-- <div class="recycle-section" style="border-radius: 1.5vi; margin-top: 0.5vi; padding: 0.3vi; color: #db5; display: flex; justify-content: space-between; align-items: center;  background-color: rgba(108, 116, 128, 0.19); height: 2.1vi;
">          <div style="color:#3de ;">♻</div>
            <div class="px16"> Recycle</div>
            <div class="px16" style="color: #a1a1a1;">14 Tone</div>
            <div><BasicProgressBar :width="bar_width" :height="'.5vi'" :fill_color="'#3de'" :empty_color="'gray'"
                :value="(80)" :duration="8000" :showArrow="true" /></div>
            <div class="px12" style="font-weight: bold; color: rgb(238, 196, 90);">
                <AnimatedGradully :targetVolume="4000" :duration="2000" unit="EGP" />
            </div>


        </div> -->



        <div class="solar_system" style="padding-top: .5vi;">
            <div>
                <img src="@/assets/remote_assets/icon/recycle5.svg" style="height: 2.5vi;width: 2.5vi;" />
            </div>
             <!-- <div style="color:#3de ;">♻</div> -->

             <div class="solar-data-item">
                 <div class="title">Recycle Revenue</div>
                 <div class="valuerecycle">213k Egp</div>
             </div>
            <div class="solar-data-item" style="margin-right:.3vi ;">
                <div class="title">Compound Recycle</div>
                <div class="valuerecycle">134 Tone</div>
            </div>
            <!-- <div class="solar-data-item">
                <div class="title">Portion In Operation</div>
                <div class="valuerecycle">23%</div>
            </div> -->
        </div>
        <div class="underline" style="top: -.9vi;"></div>
        <div class="solar_system" style="margin-top: 1vi;margin-bottom: .5vi;">
            <div>
                <img src="@/assets/remote_assets/icon/solar8.svg" style="height: 2.6vi;width: 2.6vi;" />
            </div>
            <div class="solar-data-item">
                <div class="title">Solar PV Energy  </div>
                <div class="value">124 Mwh</div>
            </div>
            <div class="solar-data-item">
                <div class="title">Ratio Of Total Energy</div>
                <div class="value">23%</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import AnimatedGradully from '@/components/AnimatedGradully.vue';
import RadarChart from '@/components/RadarChart.vue';
import { resolveComponent } from 'vue';
import BasicProgressBar from '@/components/BasicProgressBar.vue';


// export default {
//   name: "App",
//   components: {
//     RadarChart
//   }
// };
</script>

<style scoped>
.radar_value {
    color: #b2b1b5;
}

.solar-data-item {
    display: grid;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(to bottom, #2a2a2a 0%, transparent);
    padding: 0.2vi;
    border-radius: 0.2vi;
}

.title {
    font-size: .6vi;
    font-weight: 600;
    color: #a6abb5;
    /* Light bluish text */
    letter-spacing: .04vi;
    margin-bottom: .5vi;
}

.value {
    font-size: .6vi;
    font-weight: 600;
    color: rgb(238, 196, 90);
    /* text-shadow: 0 0 .5vi #ffd700; */

}

.valuerecycle {
    font-size: .6vi;
    font-weight: 600;
    color: rgb(238, 196, 90);
    text-shadow: 0 0 .5vi #023e07;

}

.solar_system {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f6f0f0a1;
    font-size: .7vi;
    font-weight: 600;
    /* margin-top: .2vi; */
    margin-bottom: .4vi;
}

.RadarChart {
    display: flex;
    padding: 0%;
    justify-content: space-around;
    align-items: center;
}

.RadarData {
    display: grid;
    gap: .4vi;
}

.RadarData::after,
.RadarData::before {
    content: "";
    position: relative;
    height: .05vi;
    /* background:linear-gradient(to right,#ffffff80 70%,transparent); */
    background-color: rgba(255, 255, 255, 0.5);
    width: 120%;
    left: 0;
}

.RadarData::before {
    top: -.15vi;
}

.RadarData::after {
    bottom: -.15vi;
}

.RadarROW {
    /* padding-left: 1.5vi; */
    font-size: .7vi;
    font-weight: 600;
    display: flex;
    gap: .95vi;
    justify-content: center;
    align-items: center;
    color: #a1a1a1a1;
    background: linear-gradient(to right, #2a2a2a 50%, transparent);
    border-radius: .5vi;
    /* box-shadow: -4px 4px 8px rgba(206, 23, 23, 0.5);  */
    padding: .2vi 0.1vi;
    border-radius: 0.2vi;

}

.recycle-section{

border-radius: .5vi; 
margin-top: 0.7vi;
margin-bottom: 0.7vi; padding: 0.3vi;
color: #db5; 
display: flex;
justify-content: space-between;
align-items: center;
background: linear-gradient(to bottom, #2a2a2a 0%, transparent);
 height: 1vi;
}



/* body {
  background-color: #000;
  color: #fff;
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 0;
} */
</style>