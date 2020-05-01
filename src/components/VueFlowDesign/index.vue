<template>
  <div class="vue-flow-design">
    <div class="zoom-container">
      <zoom v-model="ratio"/>
    </div>

    <div class="vue-flow-design-wrap" :style="ratioStyle">
      <template v-for="(item, index) in data">
        <node ref="node" :key="index" v-if="!Array.isArray(item)">
          <template #node>
            <slot name="node" v-bind="assembleData(item, index, data, $refs)"/>
          </template>
          <template #path>
            <slot name="path" v-bind="{ data: item }"/>
          </template>
        </node>

        <node :key="index" v-else>
          <template #node>
            <tree-node :data="item">
              <template #fork>
                <slot name="fork" v-bind="{ data: item }"/>
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
            <slot name="path" v-bind="item"/>
          </template>
        </node>
      </template>
    </div>
  </div>
</template>

<script>
import Zoom from '../Zoom'
import Node from './Node'
import TreeNode from './TreeNode'
import mixin from '@root/src/mixin'

export default {
  mixins: [mixin],

  components: {
    Zoom,
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
  },

  data () {
    return {
      ratio: 1
    }
  },

  computed: {
    ratioStyle () {
      return { transform: `scale(${this.ratio})` }
    }
  }
}
</script>

<style lang="scss" scoped>
.vue-flow-design {
  position: relative;
}

.zoom-container {
  left: 10px;
  position: absolute;
  top: 10px;
  z-index: 3;
}

.vue-flow-design-wrap {
  box-sizing: border-box;
  padding: 20px;
  transform-origin: 50% 0 0;
}
</style>
