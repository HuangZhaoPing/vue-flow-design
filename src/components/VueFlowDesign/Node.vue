<template>
  <div class="vue-flow-design-node">
    <div class="vue-flow-design-node-wrap">
      <slot name="node"/>
    </div>
    <path-node>
      <slot name="path-node"/>
    </path-node>
  </div>
</template>

<script>
import PathNode from './PathNode'

export default {
  components: {
    PathNode
  }
}
</script>

<style lang="scss" scoped>
.vue-flow-design-node {
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
