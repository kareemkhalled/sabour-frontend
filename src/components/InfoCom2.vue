<template>
    <div class="info-bar" style="color: white; text-align: center; ; font-size: .6vi; font-weight: 600;">
      
                <!-- <span style="position: relative;right: vi; ">{{ currentTime }}</span> 
                <span style="position: relative; top: .5vi;">{{ currentDate }}</span>   -->

      <div style="">
        ⛅<span  style="position: relative; ">{{ weather }}</span> 
                <span style="position: relative; right: -5vi; ">{{ temperature }}°C</span>
    </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  
  export default {
    name: "InfoCom",
    setup() {
      const currentTime = ref("");
      const currentDate = ref("");
      const weather = ref("Sunny");
      const temperature = ref("25");
  
      const updateTime = () => {
        const now = new Date();
        currentTime.value = now.toLocaleTimeString();
        currentDate.value = now.toLocaleDateString();
      };
  
      const fetchWeatherData = async () => {
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=cairo&units=metric&appid=6b93179c0320c1284824ca31bc3a0f3f`
          );
          const data = await response.json();
          weather.value = data.weather[0].description;
          temperature.value = data.main.temp;
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
  
      onMounted(() => {
        updateTime();
        setInterval(updateTime, 1000);
        fetchWeatherData();
      });
  
      return {
        currentTime,
        currentDate,
        weather,
        temperature,
      };
    },
  };
  </script>
  
  <style>
  .info-bar {
    /* background-color: rgba(0, 0, 0, 0.8); */
    width: 60%;
    right:-0.5vi;
    display: flex;
    position: relative;
    top: .5vi;
  }
  </style>
  