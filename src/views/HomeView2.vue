<template>
  <div class="building-view-page">
    <!-- Video Background -->
    <div class="video-background">
      <video autoplay muted loop >
        <source
          src="@/assets/remote_assets/Atal/ahly-sabbour-wadi zaha.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <!-- Main Content -->
    <div class="main-content">
      <LeftSidebarComponent class="leftsidebar" />
      <Middlebar class="middlechart" />
      <RightSidebarComponent class="rightsidebar" />
    </div>
  </div>
</template>

<script>
import LeftSidebarComponent from "@/components/HomePage/LeftSidebar/LeftSidebarComponent.vue";
import Middlebar from "@/components/HomePage/Middlebar/Middlebar.vue";
import RightSidebarComponent from "@/components/HomePage/RightSidbr/RightSidebarComponent.vue";

export default {
  name: "HomeView2",
  components: {
    
    LeftSidebarComponent,
    Middlebar,
    RightSidebarComponent,
    
  },
};
</script>

<style scoped>
.building-view-page {
  position: relative;
  display: flex;
  flex-direction: column;
} 

.middlechart {
  position: relative;
  margin-top:  auto;
  right: 20.2vw;
  /* background: linear-gradient(
    to top,
    rgb(0, 0, 0) 80%,
    rgba(13, 12, 12, 0.818)
  ); */
   background: linear-gradient(
    to left,
    rgba(30, 26, 1, 0.971) 75%,
    rgb(0 0 0 / 100%)
  );
  box-shadow:
    -.4vw 0vw 0vw rgba(12, 12, 12, 0.786),
    1.5vw 0vw 0vw rgb(12, 12, 12);
}
/* Video container */
.video-background {
  position: fixed;
  top: 0vh;
  /* left: 1vw; */
  width: 100%;
  height: 100%;
  z-index: -1; /* Send video to the back */
  overflow: hidden;
  box-shadow: offset-x offset-y blur-radius spread-radius color;
}

.video-background video {
  position: absolute;
  right: 3vw;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(0.700); /* Scale the video to cover the entire container */
  /* transform: rotateX(30deg);
transform: rotateY(45deg); */
  /* transform: perspective(27000px) rotateY(45deg); */
}

/* Main content styles */
.main-content {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  z-index: 1; /* Ensure content stays above video */
}

/* .leftsidebar {
  
  width: 20%;
  height: 100%; */
  /* background: linear-gradient(to right, rgb(0, 0, 0), rgba(19, 9, 9, 0.634));
  box-shadow: 10px 0 20px rgba(24, 24, 24, 0.9); */
  
/* } */

/* .rightsidebar {
  
  width: 20%;
  height: 100%; */
  
  /* background: linear-gradient(to left, rgb(0, 0, 0), rgba(19, 9, 9, 0.634));
  0box-shadow: -10px 0 20px rgba(24, 24, 24, 0.9); */
/* } */

/* .leftsidebar,
.rightsidebar {
  
  top: 0;
  height: 100%;
  width: 0; 
  overflow: hidden; 
    background: linear-gradient(to right, rgb(0, 0, 0), rgba(19, 9, 9, 0.634));
    box-shadow: 10px 0 20px rgba(24, 24, 24, 0.9);
  transition: width 1s ease-in-out; 
} */

.leftsidebar {
  top: 0vi;
  height: 85.1vh;
  width: 0; 
  overflow: hidden; 
  background: linear-gradient(
    to left,
    rgba(30, 26, 1,0)-285%,
    rgb(0 0 0 / 100%)
  );
    box-shadow: -10px 0 20px rgba(24, 24, 24, 0.9),0 -25px 20px rgba(24, 24, 24, 0.9);

  transition: width 1s ease-in-out;
  left: 0;
  animation: showSidebar 1s ease-in-out 0s forwards;
}

.rightsidebar {
  top: 0;
  height: 100%;
  width: 0;
  overflow: hidden; 
  /* background:linear-gradient(to left, rgb(22, 22, 22)85%, rgb(0 0 0 / 60%));;
    box-shadow: -10px 0 20px rgba(24, 24, 24, 0.9),0 -25px 20px rgba(24, 24, 24, 0.9);
     */
  background: linear-gradient(
    to right,
    rgba(30, 26, 1,0)-285%,
    rgb(0 0 0 / 100%)
  );
  box-shadow:
    10px 0 20px rgba(24, 24, 24, 0.9),
    0 -25px 20px rgba(24, 24, 24, 0.9);
  transition: width 1s ease-in-out;
  right: 0;
  animation: showSidebar 1s ease-in-out 0s forwards; 
}

@keyframes showSidebar {
  to {
    width: 20%; 
  }
}


.center-content {
  flex: 1;
  text-align: center;
  padding: 20px;
  color: white; 
}
.counters {
  position: relative;
  z-index: 1;
}


</style>


