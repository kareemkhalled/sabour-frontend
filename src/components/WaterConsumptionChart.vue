
<template>
        
  <div>
    <div class="photo-percent">
        <div class="image-container">
            <img class="img" src="@/assets/remote_assets/Atal/watericonn.png" alt="Water Icon" />
            <div class="percentage">{{ percentage }}%</div>
        </div>
        <div class="water-text ">
            <!-- <div style="color: #e17619;">commercial Consumption</div>
               <AnimatedGradully class="consumption" :targetVolume="64520" :duration="2000" unit="m³" /> -->
            <!-- <div style="color: #e17619;">resdintial Consumption</div>
               <AnimatedGradully class="consumption" :targetVolume="64520" :duration="2000" unit="m³" /> -->
               <div class="inbox px14 longer" style="top: -1.4vi; left: 1%;">
                   commercial
            </div>
            <div class="inbox" style="top: -1.5vi; left: 40%;">
              <BasicProgressBar :width="'7vi'" :height="'.4vi'" :fill_color="'#e17619'" :empty_color="'#8a6c4c'"
                :value="(60)" :duration="8000" :showArrow="true"  /> 
            </div>
            <!-- <div class="inbox px16" style="top: -1.3vi; left: 104%;font-weight: 500;">5
            </div> -->



               <div class="inbox px14 longer" style="top: 1.0vi; left: 1%;">
                resdintial  
            </div>
            <div class="inbox" style="top: 1.0vi; left: 40%;">
              <BasicProgressBar :width="'7vi'" :height="'.4vi'" :fill_color="'#f7c83d'" :empty_color="'#8a6c4c'"
                :value="(20)" :duration="8000" :showArrow="true"  /> 
            </div>
            <!-- <div class="inbox px16" style="top: 1.5vi; left: 104%;font-weight: 500;">5
            </div> -->
        </div>
    </div>
    <!-- <div class="middele-div">
        <div class="tank-label">Water Tank</div>
            <div class="tank-bar">
                <div class="tank-fill" :style="{ width: percentage + '%' }">
                   <span class="tank-capacity">{{ tankCapacity }} m³</span>
                </div>
            </div>
   </div> -->
       
       <!-- <div class="pumps text">
            <div class="pump">Water Pump1
                <span class="green_2">Running </span>
            </div>
            <div class="pump">Water Pump2
                <span class="green_2">Running </span>
            </div>
            <div class="pump">Water Pump3
                <span class="red">stopping </span>
            </div>
       </div> -->
       
    </div> 
</template>

<script setup>
import AnimatedGradully from '@/components/AnimatedGradully.vue'
import BasicProgressBar from '@/components/BasicProgressBar.vue'


</script>
<script >  
  export default {
    name: "WaterConsumptionCard",
    props: {
      percentage: {
        type: Number,
        default: 30, 
      },
      consumption: {
        type: Number,
        default: 4679,   
      },
      tankCapacity: {
        type: Number,
        default: 0, 
      },
    },
    
  };
  </script>
   
  <style scoped>
  .photo-percent {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  /* background-color: rgba(108, 116, 128, 0.3); */
  padding: 0%;
  margin: 2%;
}

.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8vi;
  height: 5vi;
  right: 1vi;
}

.img {
  width: 50%;
  height: 80%;
  border-radius: 50%;
  object-fit: cover;
}

.percentage {
  position: absolute;
  font-size: .7vi;
  font-weight: bold;
  color: #ffffff;
  top: 1.5vi;
}

.water-text {
  display: grid;
  text-align: center;
  color: white;
  font-size: .8vi;
  position: relative;
  right: 1.5vi;
  background-color: rgba(108, 116, 128, 0.3);
  border-radius: 20%;
  width: 13vi;
  font-weight: 600;

}

.water-text .consumption {
  font-size: .7vi;
  margin-top: 0.5vi;
  position: relative;
  /* left: 2.9vi; */
  color: rgb(255, 255, 255);
  top: -.4vi;
  
}

/* Responsive design using vi to ensure consistency */
@media (max-width: 50vi) {
  .percentage {
    font-size: 1.8vi;
  }

  .water-text {
    font-size: 1.4vi;
  }

  .water-text .consumption {
    font-size: 1.1vi;
  }
}

.middele-div {
  /* background-color: rgba(108, 116, 128, 0.3); */
  color: white;
  font-size: 0.7vi;
  position: relative;
  top: -.5vi;
  width: 100%;
  height: 3vi;
  padding: 0%;
  margin: 2%;
}

.tank-label {
  padding: 0.2vi;
  font-size: .8vi;
}

.tank-bar {
  background-color: #5a5757;
  height: 0.5vi;
  width: 80%;
  margin: 0.5vi ;
  position: relative;
  display: flex;
  /* border-radius: 0.9vi; */
  
}

.tank-fill {
  display: flex;
  background:  #cb9b41 ;
  height: 100%;
  /* border-radius: 40%; */
  position: relative;
}

.tank-capacity {
  position: absolute;
  right: -70%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.7vi;
  color: white;
  white-space: nowrap; 
}

@media (max-width: 50vi) {
  .tank-label {
    font-size: 0.9vi;
  }

  .tank-capacity {
    font-size: 0.6vi;
  }
}
  /* .pumps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 3vi;
  background-color: rgba(108, 116, 128, 0.3);
  margin: 5%;
  padding: 0%;
  color: rgba(255, 255, 255, 0.692);
  font-weight: 500;
  position: relative;
  left: -3%;
} */

/* .pump {
  padding: 0.5vi;
  text-align: center;
  width: 30%; 
  font-size: 0.7vi;   
  gap: 2vi;

} */

/* @media (max-width: 50vi) {
  .pump {
    font-size: 0.8vi;
  }
} */

.underline::after {
  content: ''; /* Empty content for underline */
  position: relative; /* Position relative to the text */
  top: -1.3vi; /* Adjust to control underline distance */
  left: 0;
  width: 100%; /* Matches text width */
  height: .10vi; /* Thickness of the underline */
  /* background-color: #8a6c4c;  */
  background: linear-gradient(to right, transparent, #06709d 50%, transparent);
}

  </style> 