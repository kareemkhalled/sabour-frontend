<script>
// import InfoCom from "@/components/InfoCom.vue";
// import InfoCom2 from "@/components/InfoCom2.vue";
import { ref } from 'vue';


export default {
  name: "NavbarComponent",
  components: {
    // InfoCom,
    // InfoCom2,
  },
  setup() {
    const menuItems = ref([
      { name: "Home", route: "/" },
      { name: "Energy", route: "/HomeView2" },
      { name: "Assets", route: "/assets" },
      { name: "", route: "/work-orders" },
      { name: "Buildings", route: "/BuildingView" },
      { name: "Access", route: "/access" },
      { name: "Elevators", route: "/elevators" },
    ]);

    return { menuItems };
  },
};

</script>

<template>
  <div class="main-container">
    <div>
      <div class="logo">
        <img src="@/assets/remote_assets/icon/EMSLogo2.png" />
      </div>
      <!-- <InfoCom2 /> -->

    </div>
    
    <div>
      <ul class="menu">
        <div class="links-group">
          <li class="menu-item" :class="no - hover"><router-link to="/HomeView2">Home</router-link></li>
          <li class="menu-item"><router-link to="/HomeView2">Residential</router-link></li>
          <li class="menu-item"><router-link to="/">Commercial</router-link></li>
        </div>
        <div style="display: flex;flex-direction: column; align-items: center; ;">
          <!-- <img src="@/assets/remote_assets/Atal/Logo9.png" style="width: 4.7vi;height: 1.7vi; margin-top: 1vi;border-radius:50%; "/> -->
          <div class="park-lane"><img src="@/assets/remote_assets/Atal/Logo9 (1).png" style="width: 8vi;height: 6vi; margin-top:-4vi;margin-bottom:-2vh; border-radius:0% "/><span></span></div>
          <!-- <div class="park-lane">PARK LANE <span></span></div> -->
        </div>
        <div class="links-group">
          <li class="menu-item"><router-link to="/BuildingView">Energy</router-link></li>
          <li class="menu-item"><router-link to="/">Security</router-link></li>
          <li class="menu-item"><router-link to="/">Safety</router-link></li>
        </div>
      </ul>
    </div>
    
    <div>
      <div class="logo" style="height:5.5vi; width:14vw; margin-top:-2.5vh" >
        <img src="@/assets/remote_assets/Atal/newlogo.png"  />
        

      </div>
      <InfoCom />
    </div>

    
    <!-- <div class="wrapper">
      <div class="data-holder" style="top: 80%; left: 75%">
        <span class="cgreen" style="font-size: 1vi; font-weight: bold; user-select: none"
          >Ask Zeta</span
        >
        <Recorder :station_id="'smc'" />
      </div>
    </div> -->
    
  </div>
  

</template>
<style scoped>

/* header{
  z-index: 999;
  position: relative;
} */

.park-lane {
  margin-top: 2.8vi;
  position: relative;
  padding: 1vi 4vi;
  padding-bottom: 0.5vi;
  /* padding-top: 2vi; */
  white-space: nowrap;
  color: rgb(191, 171, 121);
  font-size: 1.3vi;
  font-family: "Arial", "Helvetica", sans-serif;
  font-weight: 600;
}

.park-lane::before {
  position: absolute;
  content: "";
  left: -6%;
  width: .1vi;
  height: 79%;
  transform: rotate(-50deg);
  background-color: rgb(204, 119, 34, 0.5);
  bottom: -.3vi;
}

.park-lane::after {
  position: absolute;
  content: "";
  right: -6%;
  width: .1vi;
  height: 79%;
  transform: rotate(50deg);
  background-color: rgb(204, 119, 34, 0.5);
  bottom: -.3vi;
}

/* @media (max-width: 1500px) {
  .park-lane {
    margin-top: 35px;
  }


}

@media (max-width: 932px) {
  .park-lane {
    margin-top: -8px;
  }
} */

.park-lane span {
  position: absolute;
  width: 100%;
  height: .15vi;
  background-color: rgb(204, 119, 34, 0.5);
  bottom: 0;
  left: 0
}

.links-group {
  border-bottom: .15vi solid rgb(204, 119, 34, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vi;
  margin: 0 1.4vi;
  margin-top: .2vi;
}

.main-container {
  /* background-color: #00000096; */
  /* background: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, .7));
  box-shadow: 0 1vi 2vi rgba(0, 0, 0, 0.9); */
   background:linear-gradient(to bottom, rgba(21, 18, 2, 4.929)80%, rgb(0 0 0 / 100%));;
    box-shadow: 10px 0 20px rgba(24, 24, 24, 0.9),0 -25px 20px rgba(24, 24, 24, 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 999;
  /* margin-bottom: -.5vi; */
  padding: 0vi 3vi;
}

.logo {
  width: 13vi;
  overflow: hidden;
}

.logo img {
  width: 95%;
  margin-top: 1.5vi;
  height: 100%;
}

.navbar {
  position: relative;
  top: 0;
  /* left: 0; */

  /* width: 100%; */
  z-index: 1000;
  background-color: #000;
  /* Example color */
  padding: .05vi .1vi;
  box-shadow: 0 .25vi .25vi rgba(0, 0, 0, 0.1);
}

.wrapper {
  padding: 0%;
  margin: 0%;

  /* display: contents; */
  z-index: 999;
}

.data-holder {
  /* background-color: #ff05; */
}

.navbar {
  background-color: transparent;
  padding: .5vi;
  z-index: 3;
  /* position: absolute; */

}

.menu {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  align-items: center;
  padding: 0;
  margin: 0;
  gap: .5vi;
  width: 100%;
  margin-bottom: 1vh;
}
/* 
@media (max-width : 932px) {
  .menu {
    gap: 0px;
  }
} */


.menu-item a {
  text-decoration: none;
  font-size: 1.1vi;
  font-weight: 500;
  color: #fff;
  padding: .5vw;

  border-top-left-radius: .25vi;
  border-top-right-radius: .25vi;
  transition: 0.3s;
}

.menu-item a:hover {
  /* background: linear-gradient(to right, transparent, #1005ab 50%, transparent); */
  background: linear-gradient(to top, rgb(191, 171, 121), rgb(83, 50, 15));
  color: black;
}

.menu-item.no-hover a:hover {
  /* Error: double dot in class selector */
  background-color: transparent;
  color: inherit;
  cursor: inherit
}
</style>