<script setup>
import { ref, onMounted, computed } from 'vue'
import { MediaRecorder, register } from 'extendable-media-recorder'
import { connect } from 'extendable-media-recorder-wav-encoder'
import { get_microphone_device } from '@/helpers/common'

import mic_start from '@/assets/remote_assets/sounds/mic_start.mp3'
const props = defineProps(['station_id'])
const station_id = computed(() => props.station_id)

// Define Variables
const api_url = 'https://ems-iot.com:8443/voice/'
// const api_url = 'http://localhost:8443/voice/'
let mediaRecorder = null
let audioBlobs = []
let capturedStream = null

// style variable
const active_microphone_color = '#f004'
const inactive_microphone_color = '#0f00'

// Define Ref Variables
const mic_state_color = ref(inactive_microphone_color)
const is_loading = ref(false)
const is_recording = ref(false)
const audio_player = ref()
const mic_permission_granted = ref(false)

/**
 * Register the extendable-media-recorder-wav-encoder
 */
async function connect_wav() {
  await register(await connect())
}

function get_microphone_permission() {
  let microphone = get_microphone_device()
  microphone
    .then((stream) => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
        mic_permission_granted.value = true
      }
    })
    .catch((e) => {
      console.error(e)
      mic_permission_granted.value = false
      alert('Microphone is blocked!, Please Enable Microphone to use Zeta Voice Assistant')
    })
}

// Starts recording audio
async function start_recording() {
  return get_microphone_device()
    .then((stream) => {
      audioBlobs = []
      capturedStream = stream

      // Use the extended MediaRecorder library
      mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/wav'
      })

      // Add audio blobs while recording
      mediaRecorder.addEventListener('dataavailable', (event) => {
        audioBlobs.push(event.data)
      })
      console.log(stream, mediaRecorder)
      mediaRecorder.start()
    })
    .catch((e) => {
      console.error(e)
    })
}

async function stop_and_get_recording() {
  const wavAudioBlob = await new Promise((resolve) => {
    if (!mediaRecorder) {
      resolve(null)
      return
    }

    mediaRecorder.addEventListener('stop', () => {
      const mimeType = mediaRecorder.mimeType
      const audioBlob = new Blob(audioBlobs, { type: mimeType })
      if (capturedStream) {
        capturedStream.getTracks().forEach((track) => track.stop())
      }

      resolve(audioBlob)
    })

    mediaRecorder.stop()
  })
  console.log('finished recording', wavAudioBlob)
  return wavAudioBlob
}

async function upload_blob(audio_blob) {
  const form_data = new FormData()
  form_data.append('upload_file', audio_blob, 'file')

  const response = await fetch(api_url + station_id.value + '/', {
    mode: 'cors',
    method: 'POST',
    cache: 'no-cache',
    body: form_data
  })

  if (response.status != 200) {
    console.error('Response Failed!')
  }
  return response
}

function play_audio(audio_blob) {
  if (audio_blob) {
    audio_player.value.src = URL.createObjectURL(audio_blob)
    audio_player.value.currentTime = 0
    audio_player.value.play()
    console.log('Played Sound ... ')
  }
}

async function stop_inquire_record() {
  is_recording.value = false
  const voice_inquire = await stop_and_get_recording()

  mic_state_color.value = inactive_microphone_color
  is_loading.value = true

  console.log('sending voice inquire ... ')
  const inquire_reply = await upload_blob(voice_inquire)

  console.log('recieved reply', inquire_reply)
  const inquire_reply_blob = await inquire_reply.blob()

  console.log('playing inquire reply ... ', inquire_reply_blob)
  play_audio(inquire_reply_blob)

  is_loading.value = false
}

async function start_inquire_record() {
  if (mic_permission_granted.value == true) {
    if (!audio_player.value.paused) {
      audio_player.value.pause()
    }
    audio_player.value.src = mic_start
    audio_player.value.play()
    mic_state_color.value = active_microphone_color
    start_recording()
    is_recording.value = true
  } else {
    get_microphone_permission()
  }
}

onMounted(() => {
  connect_wav()
  // bind audio tag with id audio_player to audio_player Ref variable
  audio_player.value = document.getElementById('audio_player')
  get_microphone_permission()
})
</script>

<template>
  <div>
    <div
      id="mic_stop"
      style="
        width: 3vi;
        display: inline-block;
        margin: 1vi;
        border-radius: 5vi;
        border: .5vi;
        user-select: none;
      "
      :style="{ 'background-color': mic_state_color }"
      @click="stop_inquire_record"
      v-if="is_recording">
      <img src="@/assets/remote_assets/icons/record_stop.svg" style="user-select: none" />
    </div>
    <div
      id="mic"
      style="
        width: 3vi;
        display: inline-block;
        margin: .5vi;
        border-radius: 5vi;
        border: .2vi green solid;
        user-select: none;
      "
      :style="{ 'background-color': mic_state_color }"
      @click="start_inquire_record"
      v-else>
      <img src="@/assets/remote_assets/icons/microphone.svg" style="user-select: none" />
    </div>
    <div style="width: 3vi; margin: auto" :style="{ display: [is_loading ? 'block' : 'none'] }">
      <img src="@/assets/remote_assets/icons/loading.svg" />
    </div>
    <audio id="audio_player"></audio>
  </div>
</template>
