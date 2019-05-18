<template>
  <div class="demo">
    <progress-icon
      :size="36"
      :progress="progress1"
    >
      <i class="fas fa-signal" />
    </progress-icon>
    <progress-icon
      :size="96"
      :progress="progress4"
      direction="horizontal"
    >
      <i class="fas fa-battery-full" />
    </progress-icon>
     <progress-icon
      :size="24"
      :progress="progress3"
    >
      <i class="fas fa-signature" />
    </progress-icon>
    <template v-for="i in [1,2,3,4,5]">
      <progress-icon
        :key="i"
        :size="34"
        :progress="progress2"
        color="red"
      >
        <i class="fas fa-biohazard" />
      </progress-icon>
    </template>
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
    }
  },

  mounted () {
    setInterval(() => { this.progress1 = (this.progress1 + 1) % 100; }, 10)
    setInterval(() => { this.progress2 = (this.progress2 + 1) % 100; }, 4)
    setInterval(() => { this.progress3 = (this.progress3 + 1) % 100; }, 42)
    setInterval(() => { this.progress4 = (this.progress4 + 1) % 100; }, 100)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
