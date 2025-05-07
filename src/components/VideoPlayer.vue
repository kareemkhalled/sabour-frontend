<script setup>
import { ref, defineProps, onMounted, onBeforeUnmount } from 'vue'
import videojs from 'video.js'

const props = defineProps(['options'])

const options = ref(props.options)
let player = null
const videoPlayer = ref(null)

onMounted(() => {
  player = videojs(videoPlayer.value, options.value, () => {
    player.log('onPlayerReady', player)
  })
})

onBeforeUnmount(() => {
  if (player) {
    player.dispose()
  }
})
</script>

<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>
