<template>
  <div>
   <div class=" data-holder2 section-title" style="width: 20vw;">
      <div class="square-icon"></div>
      <div>   Real Time Systems 
</div>
    </div>
    <div>
      <div
        style="left: 5.5%; font-weight: 300; width: 101%; top: 10.2vi; color: #a1a1a1;"
        @mouseenter="pauseScrolling"
        @mouseleave="resumeScrolling"
      >
        <div class="scroll-wrapper">
          <table>
            <thead >
              <tr class="ceblue px10 " style="background-color:#00000080;" >
                <th style="padding-bottom: .5vi;">System</th>
                <th style="text-align: center;padding-bottom: .5vi;">Status</th>
                <th style="text-align: center;padding-bottom: .5vi;">System Run</th>
                <th style="text-align: center;padding-bottom: .5vi; ;letter-spacing: 0vi;">Last Maintenance</th>
              </tr>
            </thead>
          </table>
          <div class="scroll-container px10">
            <table>
              <tbody ref="tableBody">
                <tr
                  v-for="(entry, index) in surgeonData"
                  :key="entry.surgeon + index"
                >
                  <td class="corange">{{ entry.surgeon }}</td>
                  <td style="text-align: center">{{ entry.team }}</td>
                  <td style="text-align: center ">{{ entry.surgeries_performed }}</td>
                  <td style="text-align: center">{{ entry.last_maintenance }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
// import InfoCom from "@/components/InfoCom.vue";


export default {
  setup() {
    const surgeonData = ref([
      { surgeon: "Generators", team: "4 on", surgeries_performed: 19, last_maintenance: "2 days ago" },
      { surgeon: "Fire Alarm", team: "3 off", surgeries_performed: 17, last_maintenance: "1 week ago" },
      { surgeon: "Elevators", team: "All on", surgeries_performed: 16, last_maintenance: "5 days ago" },
      { surgeon: "CCTV", team: "All on", surgeries_performed: 16, last_maintenance: "3 days ago" },
      { surgeon: "Security Gates", team: "All on", surgeries_performed: 16, last_maintenance: "1 day ago" },
      { surgeon: "Ventilation ", team: "All on", surgeries_performed: 16, last_maintenance: "4 days ago" },
      { surgeon: "Fire Fighting", team: "All on", surgeries_performed: 16, last_maintenance: "6 days ago" },
      { surgeon: "Water Pumps", team: "All on", surgeries_performed: 16, last_maintenance: "2 weeks ago" },
    ]);

    const tableBody = ref(null);

    const startScrolling = () => {
      if (tableBody.value) {
        tableBody.value.style.animationPlayState = "running";
      }
    };

    const pauseScrolling = () => {
      if (tableBody.value) {
        tableBody.value.style.animationPlayState = "paused";
      }
    };

    const resumeScrolling = () => {
      startScrolling();
    };

    onMounted(() => {
      startScrolling();
    });

    return {
      surgeonData,
      pauseScrolling,
      resumeScrolling,
      tableBody,
    };
  },
};
</script>

<style scoped>
/* General Styling */
/* General Table Styling */
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* Ensures consistent column widths */
  background-color: rgba(0, 0, 0, 0.1);
}

thead {
  background: linear-gradient(to bottom, #2a2a2a 0%, transparent);
  letter-spacing: 0.06vi;
  font-weight: 600;
  position: sticky; /* Keeps header fixed */
  top: 0;
  z-index: 2;
}
th,
td {
  padding: 0.25vi;
  text-align: left;
  font-weight: 600;
}
tr{
  height: .8vi;
}
.scroll-wrapper {
  position: relative;
}

.scroll-container {
  height: 5.5vi; /* Adjust height based on your design */
  overflow: hidden;
  position: relative;
  margin-top: -0.25vi; /* Prevent gaps between header and scrolling rows */
}

tbody {
  animation: scroll-up 5s linear infinite;
}

@keyframes scroll-up {
  0% {
    transform: translateY(0%);
  }
  90% {
    transform: translateY(-50%); /* Scroll halfway (including the duplicate rows) */
  }
  100% {
    transform: translateY(-50%); /* Pause at the top to create the gap */
  }
}

tr:nth-child(even) {
  background-color: rgba(106, 101, 101, 0.4);
}

tr:nth-child(odd) {
  background-color: rgba(123, 118, 118, 0.1);
}
</style>
