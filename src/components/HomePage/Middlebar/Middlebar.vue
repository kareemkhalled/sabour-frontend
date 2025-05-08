<template>
    <div class="middlebar">
            <TotalCost />
            <!-- <div class="virtical-line"></div> -->
            <middleChart />
            <!-- <div class="virtical-line"></div> -->

            <CarbonFootPrint/>
    </div>
</template>

<script setup>
import CarbonFootPrint from '../LeftSidebar/CarbonFootPrint.vue';
import TotalCost from '../LeftSidebar/TotalCost.vue';
import middleChart  from './middleChart.vue';
</script>

<style scoped>
.middlebar{
    display: flex;
    gap: .5vi;
   
    /* background: linear-gradient(to top, rgb(0, 0, 0), rgb(0 0 0 / 60%)); */

    /* align-items: center; */
}
.vertical-line {
    position: relative;
    width: 1px; /* Set the width of the vertical line */
    height: 20vh; /* Set the height of the vertical line */
    background-color: rgb(236, 229, 229); /* Line color */
}

.vertical-line::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%; /* Full width of the line */
    height: 7vh; /* Full height of the line */
    background-color: black; /* Line color */
}
</style>