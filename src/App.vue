<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/NavbarComponent.vue';
import RotateScreen from './components/RotateScreen.vue'


</script>

<template>
  <div>
    <Navbar/>
    <RotateScreen/>
    <RouterView v-slot="{ Component }">
      <Transition name="slide-up" mode="out-in">
        <Component :is="Component" /> 
    </Transition>
  </RouterView>
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s linear;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

</style>