<template>
  <aside>
    <div class="aside-content">
      <!-- <CompoundOccupancy/> -->
      <ElectricConsumption/>
      <!-- <TotalCost/> -->
      <ConsumptionInfo/>
      <ConsumtionChart/>
      <GasStatstics/>
    </div>
  </aside>
</template>

<script>
import CarbonFootPrint from './CarbonFootPrint.vue';
// import CompoundOccupancy from './CompoundOccupancy.vue';
import ElectricConsumption from '../RightSidbr/ElectricConsumption.vue';
import ConsumtionChart from '../RightSidbr/ConsumtionChart.vue';
import ConsumptionInfo from '../RightSidbr/ConsumptionInfo.vue';
import GasStatstics from '../RightSidbr/GasStatstics.vue';
// import ParkStatistics from './ParkStatistics.vue';
// import TotalCost from './TotalCost.vue';
export default {
  name: "LeftSidebarComponent",
  components: {
    // CompoundOccupancy,
    ElectricConsumption,
    // TotalCost,
    ConsumtionChart,
    GasStatstics,
    ConsumptionInfo
    
    
  }
};
</script>

<style scoped>
/* Add your sidebar styles here */
aside{
  width: 100%;
   background-color:  linear-gradient(to right, gray, black); 
 
}
.aside-content{
  padding: .3vi;
}
</style>
