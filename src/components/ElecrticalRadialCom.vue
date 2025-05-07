<template>
    <div>
      <div class="gauge-container">
        <svg
          class="gauge"
          width="10vi"
          height="6.2vi"
          viewBox="-20 0 350 200"
        >
          <defs>
            <linearGradient id="gradientt" x1="0%" y1="100%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#26c9fc" />
              <stop offset="80%" stop-color="#486cd7" />
              <stop offset="100%" stop-color="#00008b" />
            </linearGradient>
          </defs>
          <!-- Gauge Arc -->
          <path
            d="M30,150 A120,120 0 0,1 270,150"
            stroke="url(#gradientt)"
            stroke-width=".7vi"
            fill="none"
          />
          <path
          d="M140,150 A10,10 0 0,1 160,150"
          stroke="white"
          stroke-width="3"
          fill="none"
        />
  
          <!-- Ticks -->
          <g v-for="tick in ticks" :key="tick.value">
            <line
              :x1="tick.x1"
              :y1="tick.y1"
              :x2="tick.x2"
              :y2="tick.y2"
              stroke="white"
              stroke-width=".3vi"
            />
            <text
              :x="tick.textX"
              :y="tick.textY"
              fill="white"
              font-size=".7vi"
              text-anchor="middle"
            >
              {{ tick.value }}
            </text>
          </g>
  
          <!-- Needle -->
          <circle cx="150" cy="150" r="10" fill="white" />
          <path
          d="M60,150 A90,90 0 0,1 240,150"
          stroke="#26c9fc"
            stroke-width="2"
            fill="none"
          />
          <line
            x1="150"
            y1="150"
            :x2="needleX"
            :y2="needleY"
            stroke="white"
            stroke-width=".3vi"
          />
        <circle cx="150" cy="150" r="10" fill="black" />
        </svg>
      </div>
    </div>
  </template>
  <script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
    data() {
      return {
        animationValue: 0, 
        ticks: [], 
      };
    },
    computed: {
      angle() {
        return (this.animationValue / this.max) * 180 - 180;
      },
      needleX() {
        return 150 + 100 * Math.cos((this.angle * Math.PI) / 180);
      },
      needleY() {
        return 150 + 100 * Math.sin((this.angle * Math.PI) / 180);
      },
    },
    watch: {
    value(newValue) {
      this.animateNeedle(newValue); // Trigger animation on prop change
    },
  },
  methods: {
  animateNeedle(targetValue) {
    // Calculate the difference to target value
    const difference = targetValue - this.animationValue;
    const steps = 50; // Number of steps for smooth animation
    const stepValue = difference / steps; // Incremental change per step
    let currentStep = 0;

    // Clear any existing interval to avoid conflicts
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }

    // Animate the needle
    this.animationInterval = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(this.animationInterval); // Stop when complete
        this.animationValue = targetValue; // Ensure final value is exact
      } else {
        this.animationValue += stepValue; // Increment toward the target
        currentStep++;
      }
    }, 20); // Adjust the speed as needed
  },
},
    mounted() {
      const values = [0, 250, 500, 750 , 1000];
      const angleStep = 180 / (values.length - 1); 
  
      values.forEach((value, index) => {
        const angle = index * angleStep - 180;
        const x1 = 150 + 110 * Math.cos((angle * Math.PI) / 180);
        const y1 = 150 + 110 * Math.sin((angle * Math.PI) / 180);
        const x2 = 150 + 120 * Math.cos((angle * Math.PI) / 180);
        const y2 = 150 + 120 * Math.sin((angle * Math.PI) / 180);
        const textX = 150 + 140 * Math.cos((angle * Math.PI) / 180);
        const textY = 150 + 140 * Math.sin((angle * Math.PI) / 180);
        this.ticks.push({ value: `${value}`, x1, y1, x2, y2, textX, textY });
      });
  
      this.animateNeedle(this.value);
    },
  };
  </script>
  
  <style>
  .gauge-container {
    justify-content: center;
    align-items: center;
  }
  </style>
  