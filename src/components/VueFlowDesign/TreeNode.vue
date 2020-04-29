<template>
  <div class="vue-flow-design-tree-node">
    <div v-for="(col, index) in data" :key="index" class="vue-flow-design-tree-node-col">
      <template v-for="(row, index) in col">
        <node :key="index" v-if="!Array.isArray(row)">
          <template v-slot:node>
            <slot name="node" v-bind="row"/>
          </template>
          <template v-slot:path>
            <slot name="path" v-bind="row"/>
          </template>
        </node>

        <node :key="index" v-else>
          <template v-slot:node>
            <tree-node :data="row">
              <template v-slot:node="data">
                <slot name="node" v-bind="data"/>
              </template>
              <template v-slot:path="data">
                <slot name="path" v-bind="data"/>
              </template>
            </tree-node>
          </template>
          <template v-slot:path>
            <slot name="path" v-bind="row"/>
          </template>
        </node>
      </template>
    </div>
  </div>
</template>

<script>
import Node from './Node'
import TreeNode from './TreeNode'

export default {
  name: 'TreeNode',

  components: {
    Node,
    TreeNode
  },

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
