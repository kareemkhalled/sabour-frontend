<template>
  <aside>
    <div class="aside-content">
      <AssetsMaintanance/>
      <ConsumtionChart/>
      <CompoundSustainability/>
      <RealTimeEnvironment/>




    </div>
  </aside>
</template>

<script>
import AssetsMaintanance from './ElectricConsumption.vue';
import ConsumptionInfo from './ConsumptionInfo.vue';
import RealTimeEnvironment from './GasStatstics.vue';
import ConsumtionChart from './ConsumtionChart.vue';
import CompoundSustainability from './CompoundSustainability.vue';

export default {
  name: "RightSidebarComponent",
  components:{
    AssetsMaintanance,
    ConsumptionInfo,
    ConsumtionChart,
    CompoundSustainability,
    RealTimeEnvironment
    
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
