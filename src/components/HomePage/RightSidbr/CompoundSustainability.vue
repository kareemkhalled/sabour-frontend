<template>
  <div class="sustainability-wrapper">
    <div class=" data-holder2 section-title" style="width:23vw;margin-left:-1vw">
      <div class="square-icon"></div>
      <div>Sustainability - Month</div>
    </div>
    <div class="sustainability-grid">
      <!-- العمود الأيسر -->
      <div class="column">
        <div class="box" v-for="(item, index) in [sustainabilityData[0], sustainabilityData[2]]" :key="'left-' + index">
          <div class="text-container">
            <div class="title-text">{{ item.title }}</div>
            <div class="value-text">{{ item.value }}</div>
          </div>
        </div>
      </div>

      <!-- العمود الأوسط (أيقونات) -->
      <div class="icon-column">
        <div v-for="(item, index) in [sustainabilityData[1], sustainabilityData[3]]" :key="'icon-' + index">
          <component :is="item.icon" />
        </div>
      </div>

      <!-- العمود الأيمن -->
      <div class="column">
        <div class="box" v-for="(item, index) in [sustainabilityData[4], sustainabilityData[5]]" :key="'right-' + index">
          <div class="text-container text-right">
            <div class="title-text">{{ item.title }}</div>
            <div class="value-text highlight">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'
import newstIcon from '@/assets/remote_assets/icon/newst.png'
// import newst2 from '@/assets/remote_assets/icon/newst2.png'
import newst3 from '@/assets/remote_assets/icon/newst3.png'


const sustainabilityData = [
  {
    title: 'Recycle Revenue',
    value: '2130000',
  },
  {
    title: 'Building Revenue',
    value: '134 Tons',
    icon: {
      render() {
        return h('img', {
          src: newstIcon,
          alt: '',
          class: 'icon-img',
        })
      },
    },
  },
  {
    title: 'Solar PV Energy',
    value: '124 Mwh',
  },
  {
    title: 'Ratio Of Total Energy',
    value: '20%',
    icon: {
      render() {
        return h('img', {
          src: newst3,
          alt: '',
          class: 'icon-img',
        })
      },
    },
  },
  {
    title: 'Ratio Of Total Energy',
    value: '134 Tons',
  },
  {
    title: 'Building Revenue',
    value: '20 %',
  },
]
</script>

<style>
.sustainability-wrapper {
  color: white;
  padding: 1vh 1vw;

}

.title {
  font-size: 1vi;
  font-weight: bold;
  color: #00bcd4;
  
}

.sustainability-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  padding: 0.5vh;
  margin-bottom: .5vh;
  margin-left: -.5vw;
  /* margin-left: 0.5vw;
  margin-right: 1.8vw; */
}

.column {
  display: flex;
  flex-direction: column;
  gap: 0.6vw;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5vh;
  border-radius: 1vh;
  box-shadow: 0 0 .5vh rgba(213, 175, 80, 0.47)
;
  width: 6.5vw;
}

.text-container {
  display: flex;
  flex-direction: column;
  gap: 0.2vh;
}

.text-right {
  text-align: center;
}

.title-text {
  font-size: 0.7vi;
  color: #cccccc;

}

.value-text {
  font-size: 0.8vi;
  font-weight: normal;
  color: #D5B050;
}

.highlight {
  color: #D5B050;
}

.icon-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5vh;
  padding: 0.1vi;
  margin-right: .8vw;
  margin-left: .8vw;
}

.icon-img {
  width: 2vi;
  height: 100%;
  box-shadow: 4px 4px 4px #925802;
  /* border-radius: 20%; */
}
</style>
