<template>
  <div ref="treeNode" class="vue-flow-design-tree-node">
    <div ref="fork" class="vue-flow-design-tree-node-fork">
      <slot name="fork"/>
    </div>
    <div class="vue-flow-design-tree-node-wrap">
      <div v-for="(col, colIndex) in data" :key="colIndex" class="vue-flow-design-tree-node-col">
        <template v-for="(row, rowIndex) in col">
          <node :key="`${colIndex}-${rowIndex}`" v-if="!Array.isArray(row)">
            <template #node>
              <slot name="node" v-bind="row"/>
            </template>
            <template #path>
              <slot name="path" v-bind="row"/>
            </template>
          </node>

          <node :key="`${colIndex}-${rowIndex}`" v-else>
            <template #node>
              <tree-node :data="row">
                <template #fork>
                  <slot name="fork" v-bind="row"/>
                </template>
                <template #node="data">
                  <slot name="node" v-bind="data"/>
                </template>
                <template #path="data">
                  <slot name="path" v-bind="data"/>
                </template>
              </tree-node>
            </template>
            <template #path>
              <slot name="path" v-bind="row"/>
            </template>
          </node>
        </template>

        <template v-for="index in 2">
          <horizontal-line
            :key="index"
            v-bind="getLineAttrs(colIndex, index, data.length)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Node from './Node'
import TreeNode from './TreeNode'
import HorizontalLine from './HorizontalLine'

export default {
  name: 'TreeNode',

  components: {
    Node,
    TreeNode,
    HorizontalLine
  },

  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },

  mounted () {
    this.$refs.treeNode.style.paddingTop = `${this.$refs.fork.clientHeight / 2}px`
  },

  methods: {
    getLineAttrs (colIndex, index, length) {
      const lineAttrs = {}
      if (colIndex === 0 || colIndex === length - 1) {
        lineAttrs.width = '50%'
      }
      if (index === 1) {
        if (colIndex === 0) {
          lineAttrs.position = 'right top'
        } else {
          lineAttrs.position = 'left top'
        }
      } else {
        if (colIndex === 0) {
          lineAttrs.position = 'right bottom'
        } else {
          lineAttrs.position = 'left bottom'
        }
      }
      return lineAttrs
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-flow-design-tree-node {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
}

.vue-flow-design-tree-node-fork {
  background-color: #fff;
  position: absolute;
  top: 0;
  z-index: 1;
}

.vue-flow-design-tree-node-wrap {
  display: flex;
}

.vue-flow-design-tree-node-col {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 45px 30px 0;
  position: relative;
  transform: scale(1);

  &::before {
    background-color: #ccc;
    bottom: 0;
    content: '';
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 1px;
    z-index: -1;
  }
}
</style>
