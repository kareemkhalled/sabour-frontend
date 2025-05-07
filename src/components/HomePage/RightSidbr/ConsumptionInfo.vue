<template>
    <div>
        <div class="data-holder2 underlined-text">
          <div class="img-wrapper">
            <!-- <img  src="@/assets/remote_assets/icon/occupancy.svg" /> -->
          </div>       
            <div>
                Water Consumption 
            </div> 
                
        </div>
        <!-- <div>
      <div class="photo-percent">
        <div>
              <img class="img"  src="@/assets/remote_assets/Atal/watericonn.png" />
              <div class="percentage">{{ percentage }}%</div>
        </div> 
            <div class=" water-text underline " >
                <div>Water Consumption </div>
                <span style="position: relative;left: 2vi;top: .3vi;">{{ consumption }} m³/h</span>
            </div>
      </div>
      <div class="middele-div ">
            <div  style="padding: .2vi;">
                Water Tank 
            </div>

            <div class="tank-bar">
        
                <div  class="tank-fill" :style="{ width: percentage + '%' }" >
                    <span style="position: relative;left: 150%; top:-70%;" >{{ tankCapacity }} m³</span> 
                </div>

            </div>
       </div>
       <div class="pumps text">
            <div style="padding: .2vi;" >water pump1</div>
            <div  style="padding: .2vi;">water pump2</div>
            <div  style="padding: .2vi;">water pump3</div>
       </div>
    </div>  -->
        <div id="app">
          <WaterConsumptionChart :percentage="70" :consumption="4679" :tankCapacity="50" />
        </div>  
        
       
    </div>
    
</template >




<script>
import WaterConsumptionChart from "@/components/WaterConsumptionChart.vue";

 

export default {
name: "App",
components: {
  WaterConsumptionChart,
},
};
</script>

<!-- <style scoped>


.photo-percent{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: rgba(108, 116, 128, 0.3);
    padding: 0%;
    margin: 2%;
  }
  .img{
    position: relative;
    left: 1vi;
    top: .5vi;
    height:50% ;
    width: 50%;
    border-radius: 50%;
  }
  .percentage {
    position: relative;
    top: -2.5vi;
    left: 30%;
    font-size: 10px;
    font-weight: bold;
    color: #ffa500;
  }

.water-text{
    display: grid;
    left: -15%;
    color: white;
   font-size: .8vi;
   position: relative;
}

  .middele-div{
    background-color: rgba(108, 116, 128, 0.3);
    color: white;
   font-size: .7vi;
   position: relative;
   top: .4vi;
   width: 18.66vi;
   height: 3vi;
   padding: 0%;
   margin: 2%;
}

  .tank-bar {
    background-color: #333;
    height: 8px;
    width: 80%;
    margin: 5px;
    position: relative;
    display: flex;
  }
  
  .tank-fill {
    display: flex;
    background: linear-gradient(to left, #ffa500, #000);
    height: 100%;
    border-radius: 20%;
  }
  .pumps{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: 400;
    font-size: small;
    position: relative;
    left: -3%;
    width: 100%;
    height: 50px;
    background-color: rgba(108, 116, 128, 0.3);
    padding: 0%;
    margin: 5%;
    color: white;
   font-size: .7vi;

  }
  .underline {
  font-size:small;  /* Adjust font size */
  font-weight:400; /* Semi-bold */
  position: relative;
  color: #ffffff; /* White text color */
}

.underline::after {
  content: ''; /* Empty content for underline */
  position: absolute; /* Position relative to the text */
  top: 50%; /* Adjust to control underline distance */
  left: 0;
  width: 100%; /* Matches text width */
  height: .10vi; /* Thickness of the underline */
  /* background-color: #8a6c4c;  */
  background:linear-gradient(to right, transparent, #f1f3fa 50%, transparent);}

</style> -->

