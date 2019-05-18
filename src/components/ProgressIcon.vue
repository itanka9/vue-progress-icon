<template>
    <div class="progress-icon"
         :style="{ height: size + 'px', width: size + 'px' }">
        <div class="bg"
             :style="{ 'font-size': size + 'px' }"
        >
            <slot />
        </div>
        <div class="fg"
             :style="{ clip: clipRect, 'font-size': size + 'px', color: color }"
        >
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'progress-icon',

    props: {
        size: {
            type: Number,
            default: 24
        },
        color: {
            type: String,
            default: 'lightgreen'
        },
        progress: {
            type: Number,
            default: 0
        },
        direction: {
            type: String,
            default: 'vertical'
        }
    },

    computed: {
        clipRect () {
            const size = this.size + 1
            const dir = this.direction
            const progress = size * this.progress / 100
            const top = dir === 'vertical' ? (size - progress) : 0
            const right = dir === 'horizontal' ? progress : size
            return `rect(${top}px,${right}px,${size}px,0px)`
        }
    }
}
</script>


<style scoped>
    .progress-icon {
        position: relative;
    }

    .progress-icon .bg, .progress-icon .fg {
        position: absolute;
        top: 0;
        left: 0;
    }

    .progress-icon .fg {
        z-index: 2;
    }

    .progress-icon .bg {
        z-index: 1;
    }
</style>
