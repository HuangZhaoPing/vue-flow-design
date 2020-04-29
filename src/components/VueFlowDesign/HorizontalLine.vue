<template>
  <div class="vue-flow-design-line" :style="lineStyle"></div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },

    position: {
      type: String,
      default: 'left top'
    }
  },

  computed: {
    lineStyle () {
      const lineStyle = { width: this.width }
      this.position.split(' ').forEach(key => (lineStyle[key] = 0))
      return lineStyle
    }
  }
}
</script>

<style>
.vue-flow-design-line {
  background-color: #ccc;
  height: 1px;
  position: absolute;
  width: 100%;
}
</style>
