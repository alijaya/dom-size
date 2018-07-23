<template>
  <div id="app">
    <Box class="box outer" ref="outer" :x="200" :y="200" :w="600" :h="600" @dragging="update" @resizing="update">
      <Box class="box inner" ref="inner" :x="100" :y="100" :w="300" :h="300" @dragging="update" @resizing="update">
        <div class="inner2" ref="inner2" @scroll="update">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis purus quam, id finibus metus imperdiet a. Vivamus nec neque ante. Morbi sem dolor, pharetra at aliquam vitae, mollis et risus. Integer sit amet ligula ut urna aliquet lobortis. Donec eget ipsum quis diam luctus tristique id eu est. Sed ut ipsum ac lorem dictum egestas vitae quis erat. Donec elit nisi, tempus id placerat non, volutpat a metus. Nullam et libero iaculis, dapibus velit et, scelerisque odio. Nunc rutrum metus lacus, eget volutpat est tristique eu. Donec mollis tincidunt dictum. In luctus, arcu eu viverra dignissim, magna nisi pellentesque erat, non gravida ipsum nibh vel arcu. Mauris tellus leo, imperdiet at ex sed, condimentum commodo velit. Etiam viverra ante nec mi consequat elementum. Integer tincidunt felis congue pulvinar ultrices.
        </div>
      </Box>
    </Box>
    <div class="info">
      <div class="guide scroll" :style="calculateScrollStyle()"></div>
      <div class="guide padding" :style="calculatePaddingStyle()"></div>
      <div class="guide margin" :style="calculateMarginStyle()"></div>
      <div v-for="(ruler, name) in rulers" :key="name"
        class="ruler" :class="calculateClass(ruler)" :style="calculateStyle(ruler)">
        <div class="ruler--graphic"></div>
        <div class="ruler--measure">
          {{name}}: {{ruler.value}} px
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Box from 'vue-draggable-resizable'

export default {
  name: 'app',
  components: {
    Box
  },
  data() {
    return {
      width: 100,
      height: 0,
      x: 0,
      y: 0,
      rulers: {},
      scroll: { left: 0, top: 0, width: 0, height: 0 },
      padding: { left: 0, top: 0, width: 0, height: 0 },
      margin: { left: 0, top: 0, width: 0, height: 0 },
    }
  },
  created() {
    const rulers = [
      ['BCR.left', true, false],
      ['BCR.right', true, false],
      ['BCR.width', true, false],
      ['offsetLeft', true, false],
      ['offsetWidth', true, false],
      ['clientLeft', true, false],
      ['clientWidth', true, false],
      ['scrollLeft', true, false],
      ['scrollWidth', true, false],
      ['CS.marginLeft', true, true],
      ['CS.marginRight', true, true],
      ['CS.borderLeft', true, true],
      ['CS.borderRight', true, true],
      ['CS.paddingLeft', true, true],
      ['CS.paddingRight', true, true],

      ['BCR.top', false, false],
      ['BCR.bottom', false, false],
      ['BCR.height', false, false],
      ['offsetTop', false, false],
      ['offsetHeight', false, false],
      ['clientTop', false, false],
      ['clientHeight', false, false],
      ['scrollTop', false, false],
      ['scrollHeight', false, false],
      ['CS.marginTop', false, true],
      ['CS.marginBottom', false, true],
      ['CS.borderTop', false, true],
      ['CS.borderBottom', false, true],
      ['CS.paddingTop', false, true],
      ['CS.paddingBottom', false, true]
    ]
    rulers.forEach((item) => {
      this.$set(this.rulers, item[0], { horizontal: item[1], rotate: item[2], value: 0, offset: 0, offsetOther: 0 })
    })
  },
  methods: {
    calculateScrollStyle() {
      return {
        left: this.scroll.left + 'px',
        top: this.scroll.top + 'px',
        width: this.scroll.width + 'px',
        height: this.scroll.height + 'px',
      }
    },
    calculatePaddingStyle() {
      return {
        left: this.padding.left + 'px',
        top: this.padding.top + 'px',
        width: this.padding.width + 'px',
        height: this.padding.height + 'px',
      }
    },
    calculateMarginStyle() {
      return {
        left: this.margin.left + 'px',
        top: this.margin.top + 'px',
        width: this.margin.width + 'px',
        height: this.margin.height + 'px',
      }
    },
    calculateClass(ruler) {
      return {
        'ruler__horizontal': ruler.horizontal,
        'ruler__vertical': !ruler.horizontal,
        'ruler__rotate': ruler.rotate,
      }
    },
    calculateStyle(ruler) {
      const ret = {}
      if (ruler.horizontal) {
        ret.left = ruler.offset + 'px'
        ret.top = ruler.offsetOther + 'px'
      } else {
        ret.left = ruler.offsetOther + 'px'
        ret.top = ruler.offset + 'px'
      }
      if (ruler.rotate) {
        ret.height = ruler.value + 'px'
      } else {
        ret.width = ruler.value + 'px'
      }
      return ret
    },
    update() {
      const outer = this.$refs.outer.$el
      // const outerBCR = outer.getBoundingClientRect()
      // const outerCS = window.getComputedStyle(outer, null)

      const inner = this.$refs.inner.$el
      const innerBCR = inner.getBoundingClientRect()
      const innerCS = window.getComputedStyle(inner, null)

      const inner2 = this.$refs.inner2

      this.scroll.left = outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.clientLeft - inner2.scrollLeft
      this.scroll.width = inner2.scrollWidth
      this.scroll.top = outer.offsetTop + outer.clientTop + inner.offsetTop + inner.clientTop - inner2.scrollTop
      this.scroll.height = inner2.scrollHeight

      this.padding.left = outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.clientLeft + parseInt(innerCS.paddingLeft)
      this.padding.width = inner2.clientWidth - parseInt(innerCS.paddingLeft) - parseInt(innerCS.paddingRight)
      this.padding.top = outer.offsetTop + outer.clientTop + inner.offsetTop + inner.clientTop + parseInt(innerCS.paddingTop)
      this.padding.height = inner2.clientHeight - parseInt(innerCS.paddingTop) - parseInt(innerCS.paddingBottom)

      this.margin.left = outer.offsetLeft + outer.clientLeft + inner.offsetLeft - parseInt(innerCS.marginLeft)
      this.margin.width = parseInt(innerCS.marginLeft) + inner.offsetWidth + parseInt(innerCS.marginRight)
      this.margin.top = outer.offsetTop + outer.clientTop + inner.offsetTop - parseInt(innerCS.marginTop)
      this.margin.height = parseInt(innerCS.marginTop) + inner.offsetHeight + parseInt(innerCS.marginBottom)

      const updatedConf = {
        'BCR.left': {
          value: innerBCR.left,
          offset: 0,
          offsetOther: innerBCR.bottom + 100
        },
        'BCR.right': {
          value: innerBCR.right,
          offset: 0,
          offsetOther: innerBCR.bottom + 150
        },
        'BCR.width': {
          value: innerBCR.width,
          offset: innerBCR.left,
          offsetOther: innerBCR.bottom + 100
        },
        'offsetLeft': {
          value: inner.offsetLeft,
          offset: outer.offsetLeft + outer.clientLeft,
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.offsetHeight + 50
        },
        'offsetWidth': {
          value: inner.offsetWidth,
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft,
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.offsetHeight + 50
        },
        'clientLeft': {
          value: inner.clientLeft,
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft,
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.clientTop + inner2.clientHeight
        },
        'clientWidth': {
          value: inner2.clientWidth,
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.clientLeft,
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.clientTop + inner2.clientHeight
        },
        'scrollLeft': {
          value: inner2.scrollLeft,
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.clientLeft - inner2.scrollLeft,
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.offsetHeight + 200
        },
        'scrollWidth': {
          value: inner2.scrollWidth,
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.clientLeft - inner2.scrollLeft,
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.offsetHeight + 250
        },
        'CS.marginLeft': {
          value: parseInt(innerCS.marginLeft),
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft - parseInt(innerCS.marginLeft),
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop - parseInt(innerCS.marginTop)
        },
        'CS.marginRight': {
          value: parseInt(innerCS.marginRight),
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.offsetWidth,
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop - parseInt(innerCS.marginTop)
        },
        'CS.borderLeft': {
          value: parseInt(innerCS.borderLeft),
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft,
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop - parseInt(innerCS.marginTop)
        },
        'CS.borderRight': {
          value: parseInt(innerCS.borderRight),
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.offsetWidth - parseInt(innerCS.borderRight),
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop - parseInt(innerCS.marginTop)
        },
        'CS.paddingLeft': {
          value: parseInt(innerCS.paddingLeft),
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.clientLeft,
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop - parseInt(innerCS.marginTop)
        },
        'CS.paddingRight': {
          value: parseInt(innerCS.paddingRight),
          offset: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.clientLeft + inner2.clientWidth - parseInt(innerCS.paddingRight),
          offsetOther: outer.offsetTop + outer.clientTop + inner.offsetTop - parseInt(innerCS.marginTop)
        },

        'BCR.top': {
          value: innerBCR.top,
          offset: 0,
          offsetOther: innerBCR.right + 100
        },
        'BCR.bottom': {
          value: innerBCR.bottom,
          offset: 0,
          offsetOther: innerBCR.right + 150
        },
        'BCR.height': {
          value: innerBCR.height,
          offset: innerBCR.top,
          offsetOther: innerBCR.right + 100
        },
        'offsetTop': {
          value: inner.offsetTop,
          offset: outer.offsetTop + outer.clientTop,
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.offsetWidth + 50
        },
        'offsetHeight': {
          value: inner.offsetHeight,
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop,
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.offsetWidth + 50
        },
        'clientTop': {
          value: inner.clientTop,
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop,
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.clientLeft + inner2.clientWidth
        },
        'clientHeight': {
          value: inner2.clientHeight,
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.clientTop,
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.clientLeft + inner2.clientWidth
        },
        'scrollTop': {
          value: inner2.scrollTop,
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.clientTop - inner2.scrollTop,
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.offsetWidth + 200
        },
        'scrollHeight': {
          value: inner2.scrollHeight,
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.clientTop - inner2.scrollTop,
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft + inner.offsetWidth + 250
        },
        'CS.marginTop': {
          value: parseInt(innerCS.marginTop),
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop - parseInt(innerCS.marginTop),
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft - parseInt(innerCS.marginLeft)
        },
        'CS.marginBottom': {
          value: parseInt(innerCS.marginBottom),
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.offsetHeight,
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft - parseInt(innerCS.marginLeft)
        },
        'CS.borderTop': {
          value: parseInt(innerCS.borderTop),
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop,
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft - parseInt(innerCS.marginLeft)
        },
        'CS.borderBottom': {
          value: parseInt(innerCS.borderBottom),
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.offsetHeight - parseInt(innerCS.borderBottom),
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft - parseInt(innerCS.marginLeft)
        },
        'CS.paddingTop': {
          value: parseInt(innerCS.paddingTop),
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.clientTop,
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft - parseInt(innerCS.marginLeft)
        },
        'CS.paddingBottom': {
          value: parseInt(innerCS.paddingBottom),
          offset: outer.offsetTop + outer.clientTop + inner.offsetTop + inner.clientTop + inner2.clientHeight - parseInt(innerCS.paddingBottom),
          offsetOther: outer.offsetLeft + outer.clientLeft + inner.offsetLeft - parseInt(innerCS.marginLeft)
        },

      }

      Object.keys(updatedConf).forEach((name) => {
        const ruler = this.rulers[name]
        const conf = updatedConf[name]
        ruler.value = conf.value
        ruler.offset = conf.offset
        ruler.offsetOther = conf.offsetOther
      })
    },
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.info {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
}

.guide {
  position: absolute;
  box-sizing: border-box;
  border: 1px dashed rgb(179, 100, 100);
}

.ruler {
  position: absolute;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.ruler--measure {
  align-self: center;
  white-space: nowrap;
}

.ruler--graphic {
}

.ruler__vertical {
  transform-origin: 100% 0;
  transform: translateX(-100%) rotate(-90deg);
}

.ruler__vertical .ruler--graphic {
  border: 1px solid black;
  border-top: none;
  height: 1em;
  width: auto;
}

.ruler__vertical.ruler__rotate {
  flex-direction: row-reverse;
  transform: translateX(-100%);
}

.ruler__vertical.ruler__rotate .ruler--graphic {
  border: 1px solid black;
  border-right: none;
  width: 1em;
  height: auto;
}

.ruler__horizontal {
}

.ruler__horizontal .ruler--graphic {
  border: 1px solid black;
  border-top: none;
  height: 1em;
  width: auto;
}

.ruler__horizontal.ruler__rotate {
  flex-direction: row;
  transform-origin: 0% 0%;
  transform: rotate(-90deg);
}

.ruler__horizontal.ruler__rotate .ruler--graphic {
  border: 1px solid black;
  border-left: none;
  width: 1em;
  height: auto;
}

.box {
  border-width: 3em;
  border-style: solid;
  padding: 3em;
  margin: 3em;
}

.outer {
  background-color: rgb(227, 227, 252);
  border-color: rgb(100, 100, 179);
}

.inner {
  background-color: rgb(252, 227, 227);
  border-color: rgb(179, 100, 100);
}

.inner2 {
  margin: -3em;
  padding: 3em;
  width: calc(100% + 6em);
  height: calc(100% + 6em);
  box-sizing: border-box;
  overflow: auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

.longlongman {
  height: 500vh;
  width: 100px;
  border-style: solid;
  border-width: 50px 0px;
}

.red {
  background-color: orange;
  border-color: gray;
}
</style>
