<template>
  <div class="orientationAlert">
    <img src="@/assets/remote_assets/icon/screen_rotation.svg" style="width: 15%; top: 35%; left: 50%" />
    <h3 style="top: 50%; left: 50%">Please rotate your screen to Landscape</h3>
  </div>
</template>

<style scoped>
.orientationAlert {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 1;
}

.orientationAlert * {
  position: absolute;
  margin: auto;
  transform: translate(-50%, -50%);
}

@media (orientation: landscape) {
  .orientationAlert {
    display: none;
  }
}

@media (orientation: portrait) {
  .orientationAlert {
    display: block;
  }

  html,
  body {
    height: 100%;
  }
}
</style>
