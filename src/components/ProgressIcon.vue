<template>
    <div class="progress-icon" ref="root">
        <div class="bg" ref="measureContainer">
            <slot />
        </div>
        <div class="fg"
             :style="style"
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
        hoffset: {
            type: Number,
            default: 0
        },
        voffset: {
            type: Number,
            default: 0
        },
        vscale: {
            type: Number,
            default: 1
        },
        hscale: {
            type: Number,
            default: 1
        },
        direction: {
            type: String,
            default: 'vertical'
        },
        debug: {
            type: Boolean,
            default: false
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
            const scaledHeight = height * this.vscale,
                  scaledWidth = width * this.hscale

            
            const vgap = (height - scaledHeight) / 2,
                  hgap = (width - scaledWidth) / 2;


            const dir = this.direction
            let progress = this.progress
            if (this.steps) {
                const step = 100 / this.steps
                progress = Math.ceil(progress / step) * step
            }

            const hoffset = this.hoffset,
                  voffset = this.voffset,
                  vsize = dir === 'vertical' ? scaledHeight * progress / 100 : scaledHeight,
                  hsize = dir === 'horizontal' ? scaledWidth * progress / 100 : scaledWidth;

            return `rect(${scaledHeight - vsize + vgap + voffset}px,${hsize + hgap + hoffset}px,${scaledHeight + voffset + vgap}px,${hoffset + hgap}px)`
        },

        style () {
            return { ...this.clipStyle, ...this.debugStyle }
        },

        clipStyle () {
            return {
                clip: this.clipRect,
                'color': this.color
            }
        },

        debugStyle () {
            if (!this.debug) {
                return {}
            }
            return {
                'background-color': 'gray',
                'background-opacity': '30%'
            }
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
