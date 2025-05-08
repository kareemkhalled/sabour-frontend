<template>
  <div class="real-time-systems">
    <!-- العنوان -->
     <div class=" data-holder2 section-title">
      <div class="square-icon"></div>
      <div>Real Time Systems</div>
    </div>
      <div class="table-header">
            <div class="center" style="margin-left:1vw">System</div>
            <div class="center">Status</div>
            <div class="center">System Run</div>
            <div class="center">Last Maintenance</div>
          </div>

    <div class="scroll-container">
      <div class="scroll-content">
        <div class="table-wrapper">
          

          <div class="table-body">
            <div
              v-for="(system, index) in systems"
              :key="index"
              :class="['table-row', index % 2 === 0 ? 'bg-dark-1' : 'bg-dark-2']"
            >
              <div class="flex items-center " style="display:flex">
                <div class="icon-box">
                  <span style="color: #17F1F1;">⚙️</span>
                </div>
                <span class="system-name ">{{ system.name }}</span>
              </div>
              <div class="center">
                <div
                  :class="[
                    'status-box',
                    system.status.toLowerCase() === 'on' ? 'status-on' : 'status-off'
                  ]"
                >
                  {{ system.status }}
                </div>
              </div>
              <div class="center">{{ system.runtime }}</div>
              <div class="center">{{ system.maintenance }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RealTimeSystemsVue',
  setup() {
    const systems = [
      { name: "Generators", status: "On", runtime: "19h", maintenance: "2 days ago" },
      { name: "Fire Alarm", status: "Off", runtime: "17h", maintenance: "1 week ago" },
      { name: "Elevators", status: "On", runtime: "16h", maintenance: "5 days ago" },
      { name: "CCTV", status: "On", runtime: "16h", maintenance: "3 days ago" },
      { name: "Security Gates", status: "On", runtime: "16h", maintenance: "1 day ago" },
      { name: "Ventilation", status: "On", runtime: "16h", maintenance: "4 days ago" },
      { name: "Fire Fighting", status: "On", runtime: "16h", maintenance: "6 days ago" },
      { name: "Water Pumps", status: "On", runtime: "16h", maintenance: "2 weeks ago" },
    ];
    return { systems };
  },
};
</script>

<style scoped>
.real-time-systems {
  padding: 0.2vi;
  color: #ccc;
  font-size: 0.4vi;
  font-weight: 500;
}

.header {
  font-size: 0.85vi;
  margin-bottom: 0.2vi;
}

.scroll-container {
  height: 17vh; 
  overflow: hidden;
  position: relative;
  
}

.scroll-content {
  display: inline-block;
  animation: scroll-up 20s linear infinite;
  width: 100%;
}

.scroll-container:hover .scroll-content {
  animation-play-state: paused; /* توقف التمرير عند hover */
}

@keyframes scroll-up {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%); 
}
}

.table-wrapper {
  display: flex;
  flex-direction: column;
}

.table-header {
  display: flex;
gap: 3vw;
position: relative;
white-space: nowrap;
align-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5vi;
  font-weight: 600;
  color: #a1a1a1;
  /* margin-left: -.1vw ; */
    font-size: 0.5vi;

}

.table-body {
  display: flex;
  flex-direction: column;
  gap: 0.23vi;
}

.table-row {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  align-items: center;
  gap: 2.5vw;
  padding: 0.4vi;
  border: 0.08vi solid rgba(255, 140, 0, 0.6);
  border-bottom: none;
}

.bg-dark-1 {
  background-color: #0c0b00;
}

.bg-dark-2 {
  background-color: #4646474f;
}

.icon-box {
  width: 0.5vi;
  height: 0.5vi;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 100, 0.3);
  border-radius: 0.2vi;
  margin-right: 0.5vw;
}

.system-name {
  font-size: 0.5vi;
  
  
}

.center {
  text-align: center;
}

.status-box {
  font-size: 0.5vi;
  border-radius: 0.2vi;
  display: flex;
  justify-content: center; 
  position: relative;
  top: .6vh;

}

.status-on {
  background-color: rgba(0, 128, 0, 0.4);
  color: #0b5827;
  
}

.status-off {
  background-color: rgba(139, 0, 0, 0.4);
  color: #ff5555;
}
</style>
