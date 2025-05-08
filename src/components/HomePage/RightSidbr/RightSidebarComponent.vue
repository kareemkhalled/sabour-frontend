<template>
  <aside>
    <div class="aside-content">
      <!-- <AssetsMaintanance/> -->
      <!-- <ConsumtionChart/> -->
      <CompoundOccupancy/>
      <CompoundSustainability/>
      <ConsumptionInfo/>
      <ParkStatistics/>




    </div>
  </aside>
</template>

<script>
// import AssetsMaintanance from './ElectricConsumption.vue';
import ConsumptionInfo from './ConsumptionInfo.vue';
// import ConsumtionChart from './ConsumtionChart.vue';
import GasStatstics from '../RightSidbr/GasStatstics.vue';
import CompoundOccupancy from '../LeftSidebar/CompoundOccupancy.vue';
// import ConsumptionInfo from '../RightSidbr/ConsumptionInfo.vue';

import CarbonFootPrint from '../LeftSidebar/CarbonFootPrint.vue';
import ParkStatistics from '../LeftSidebar/ParkStatistics.vue';
import CompoundSustainability from './CompoundSustainability.vue';

export default {
  name: "RightSidebarComponent",
  components:{
    // AssetsMaintanance,
    ParkStatistics,
    // ConsumtionChart,
    // TotalCost,
    CompoundOccupancy,
    CompoundSustainability,
    ConsumptionInfo
    
  }
};
</script>

<style scoped>

aside{
  width: 100%;
   position: absolute;
   top:0%
}

.aside-content{
  padding: .5vi;
  
}

</style>
