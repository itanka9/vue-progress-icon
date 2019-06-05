# Vue ProgressIcon component

Easy progress display with clipping overlay and material/fa icons.

[Examples](https://itanka9.github.io/vue-progress-icon/)

# Installation

```bash
npm i vue-progress-icon
```

# Usage 

```vue
<script>
import { ProgressIcon } from 'vue-progress-icon'

export default {
    components: { ProgressIcon }
}
</script>

<template>
    <progress-icon
        :progress="42"
    >
        <i class="fas fa-battery-full" />
    </progress-icon>
</template>
```