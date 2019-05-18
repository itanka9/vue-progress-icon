<template>
    <div class="progress-icon" ref="root">
        <div class="bg" ref="measureContainer">
            <slot />
        </div>
        <div class="fg"
             :style="{ clip: clipRect, color: color }"
        >
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'progress-icon',

    props: {
        progress: {
            type: Number,
            default: 0
        },
        steps: {
            type: Number,
            default: 0
        },
        color: {
            type: String,
            default: 'lightgreen'
        },
        vscale: {
            type: Number,
            default: 1.15
        },
        direction: {
            type: String,
            default: 'vertical'
        }
    },

    computed: {
        clipRect () {
            const measured = this.measureSlotContent(this.progress)
            if (!measured) {
                return 'inherit'
            }
            this.adjustRoot(measured)
            const { height, width } = measured
            const scaledHeight = height * this.vscale
            const gap = (scaledHeight - height) / 2 

            const dir = this.direction
            let progress = this.progress
            if (this.steps) {
                const step = 100 / this.steps
                progress = Math.ceil(progress / step) * step
            }
            const top = dir === 'vertical' ? (scaledHeight - scaledHeight * progress / 100) : 0
            const right = dir === 'horizontal' ? width * progress / 100 : width
            return `rect(${top - gap}px,${right}px,${scaledHeight}px,0px)`
        }
    },

    methods: {
        measureSlotContent () {
            const container = this.$refs.measureContainer
            const slotElt = container && container.firstChild
            if (!slotElt) {
                return
            }
            return {
                height: slotElt.clientHeight,
                width: slotElt.clientWidth
            }
        },

        adjustRoot (measured) {
            const root = this.$refs.root
            if (!root || !measured) {
                return
            }
            const { height, width } = measured
            if (root.clientHeight !== height) {
                root.style.height = height + 'px'
            }
            if (root.clientWidth !== width) {
                root.style.width = width + 'px'
            }
        }
    }
}
</script>


<style scoped>
    .progress-icon {
        position: relative;
        display: inline-block;
    }

    .progress-icon .fg, .progress-icon .bg {
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
