<template>
  <aside>
    <div class="aside-content">
      <CompoundOccupancy/>
      <TotalCost/>
      <CarbonFootPrint/>
      <ParkStatistics/>
    </div>
  </aside>
</template>

<script>
import CarbonFootPrint from './CarbonFootPrint.vue';
import CompoundOccupancy from './CompoundOccupancy.vue';
import ParkStatistics from './ParkStatistics.vue';
import TotalCost from './TotalCost.vue';
export default {
  name: "LeftSidebarComponent",
  components: {
    CompoundOccupancy,
    TotalCost,
    CarbonFootPrint,
    ParkStatistics
    
    
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
