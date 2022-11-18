<template>
  <div class="demo">
    <h1>Examples</h1>

    <div class="container">
      <p class="src">
        direction="horizontal" :hoffset="-2" :voffset="9" :vscale="0.3"
        :hscale="0.67"
      </p>
      <progress-icon
        class="demo-medium"
        :progress="progress4"
        direction="horizontal"
        :hoffset="-2"
        :voffset="9"
        :vscale="0.3"
        :hscale="0.67"
      >
        <i class="fas fa-battery-full" />
      </progress-icon>
    </div>

    <div class="container">
      <p class="src">direction="horizontal"</p>
      <progress-icon
        class="demo-medium"
        :progress="progress4"
        direction="horizontal"
      >
        <i class="fas fa-battery-full" />
      </progress-icon>
    </div>

    <div class="container">
      <p class="src">:vscale="0.8" :voffset="12"</p>
      <progress-icon
        class="demo-big"
        :progress="progress3"
        :vscale="0.8"
        :voffset="12"
      >
        <i class="fas fa-signature" />
      </progress-icon>
    </div>
    <br />

    <div class="container">
      <p class="src">
        direction="horizontal" :steps="5"<br />
        :voffset="6"
      </p>
      <progress-icon
        class="demo-small"
        direction="horizontal"
        :steps="5"
        :progress="progress1"
        :voffset="6"
      >
        <i class="fas fa-signal" />
      </progress-icon>
    </div>

    <div class="container">
      <p class="src">
        :voffset="12"<br />
        :vscale="1.05"<br />
        debug
      </p>
      <progress-icon
        class="demo-big"
        color="red"
        :progress="progress3"
        :voffset="12"
        :vscale="1.05"
        debug
      >
        <i class="fas fa-bomb" />
      </progress-icon>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />

    <template v-for="i in [1, 2, 3, 4, 5]">
      <progress-icon
        :key="i"
        :progress="progress2"
        class="demo-big"
        color="yellow"
        :voffset="8"
        :vscale="1.1"
      >
        <i class="fas fa-biohazard" />
      </progress-icon>
    </template>
    <br />
  </div>
</template>

<script>
import ProgressIcon from "./ProgressIcon.vue";

export default {
  name: "progress-icon-demo",

  components: { ProgressIcon },

  data() {
    return {
      progress1: 0,
      progress2: 0,
      progress3: 0,
      progress4: 0,

      colorR: 0,
      colorG: 0,
      colorB: 0,
    };
  },

  mounted() {
    setInterval(() => {
      this.progress1 = (this.progress1 + 1) % 100;
    }, 10);
    setInterval(() => {
      this.progress2 = (this.progress2 + 1) % 100;
    }, 4);
    setInterval(() => {
      this.progress3 = (this.progress3 + 1) % 100;
    }, 42);
    setInterval(() => {
      this.progress4 = (this.progress4 + 1) % 100;
    }, 100);

    setInterval(() => {
      this.colorR = (this.colorR + 1) % 512;
    }, 10);
    setInterval(() => {
      this.colorG = (this.colorG + 1) % 512;
    }, 20);
    setInterval(() => {
      this.colorB = (this.colorB + 1) % 512;
    }, 30);
  },

  methods: {
    colorVal(val) {
      return val < 256 ? val : 512 - val;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  margin: 8px;
  border: solid 1px #eee;
  border-radius: 3px;
}

.src {
  font-size: 12px;
  font-family: monospace;
  width: 170px;
  text-align: left;
  color: #999;
}

.demo-small,
.demo-medium,
.demo-big {
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
