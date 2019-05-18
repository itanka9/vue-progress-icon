<template>
  <div class="demo">
    <progress-icon
      class="demo-medium"
      :progress="progress4"
      direction="horizontal"
    >
      <i class="fas fa-battery-full" />
    </progress-icon>
    <progress-icon
      class="demo-big"
      :progress="progress3"
    >
      <i class="fas fa-signature" />
    </progress-icon>
    <progress-icon
      class="demo-small"
      direction="horizontal"
      :steps="5"
      :progress="progress1"
    >
      <i class="fas fa-signal" />
    </progress-icon>
    <br />
    <template v-for="i in [1,2,3,4,5]">
      <progress-icon
        :key="i"  
        :progress="progress2"
        class="demo-small"
        color="red"
      >
        <i class="fas fa-biohazard" />
      </progress-icon>
    </template>
    <br />
    <progress-icon
      class="demo-big"
      :color="`rgb(${colorVal(colorR)}, ${colorVal(colorG)}, ${colorVal(colorB)})`"
      :progress="progress3"
    >
      <i class="fas fa-bomb" />
    </progress-icon>
  </div>
</template>

<script>
import ProgressIcon from './ProgressIcon'
import { setInterval } from 'timers';

export default {
  name: "demo",

  components: { ProgressIcon },

  data () {
    return {
      progress1: 0,
      progress2: 0,
      progress3: 0,
      progress4: 0,

      colorR: 0,
      colorG: 0,
      colorB: 0,
    }
  },

  mounted () {
    setInterval(() => { this.progress1 = (this.progress1 + 1) % 100; }, 10)
    setInterval(() => { this.progress2 = (this.progress2 + 1) % 100; }, 4)
    setInterval(() => { this.progress3 = (this.progress3 + 1) % 100; }, 42)
    setInterval(() => { this.progress4 = (this.progress4 + 1) % 100; }, 100)



    setInterval(() => { this.colorR = (this.colorR + 1) % 512; }, 10)
    setInterval(() => { this.colorG = (this.colorG + 1) % 512; }, 20)
    setInterval(() => { this.colorB = (this.colorB + 1) % 512; }, 30)
  },

  methods: {
    colorVal (val) {
      return val < 256 ? val : 512 - val;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-small, .demo-medium, .demo-big {
  margin: 16px;
}

.demo-small {
  font-size: 48px;
}

.demo-big {
  font-size: 112px;
}

.demo-medium {
  font-size: 72px;
}
</style>
