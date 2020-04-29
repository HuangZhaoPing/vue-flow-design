<template>
  <div class="vue-flow-design-tree-node">
    <div v-for="(item, index) in data" :key="index" class="vue-flow-design-tree-node-col">
      <slot v-bind="item"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-flow-design-tree-node {
  display: flex;
}

.vue-flow-design-tree-node-col {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 45px 30px 0;
}
</style>
