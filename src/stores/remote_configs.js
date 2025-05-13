import { defineStore } from 'pinia'
import { initializeApp } from 'firebase/app'
import { getRemoteConfig, fetchAndActivate, getAll } from 'firebase/remote-config'

export const useRemoteConfigStore = defineStore('remoteConfig', {
  state: () => ({
    remoteConfig: null
  }),
  actions: {
    async fetchRemoteConfig() {
      try {
        const firebaseConfig = {
          apiKey: 'AIzaSyB6_08zIkQcYsuupa8KmhJkcDRwYeNRm_0',
          authDomain: 'ems-iot-com.firebaseapp.com',
          projectId: 'ems-iot-com',
          storageBucket: 'ems-iot-com.appspot.com',
          messagingSenderId: '578293598102',
          appId: '1:578293598102:web:b49c6144da8613f092ffb7',
          measurementId: 'G-CJ7VZDQM05'
        }
        const firebase = initializeApp(firebaseConfig)

        const remoteConfig = getRemoteConfig(firebase)

        // Fetch and activate remote config
        await fetchAndActivate(remoteConfig)
        // Get all remote config values as an object
        const config = getAll(remoteConfig)
        this.remoteConfig = config
      } catch (error) {
        console.error('Error fetching remote config:', error)
      }
    }
  }
})
