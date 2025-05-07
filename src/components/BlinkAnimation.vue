<script setup>
import {computed } from 'vue';

const props = defineprops({
    duration:{
        type:Number,
        default:1
    }
})

const blinkStyle=computed(()=>{
    return{
        animation:'blink ${props.duration *2}s infinite'
    }
})
</script>

<template>

</template>

<style scoped>
@keyframes blink{
    0% , 49%{
        opacity: 1;
    }
    50% , 100%{
        opacity: 0;
    }
}
</style>