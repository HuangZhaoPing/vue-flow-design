<template>
  <div>
    <vue-flow-design :data="data">
      <template #node="data">
        <el-card @click.native="xxx(data)">
          节点：{{data.name}}
        </el-card>
      </template>

      <template #path="data">
        <el-popover placement="right" trigger="hover">
          <div>{{data}}</div>
          <el-button
            slot="reference"
            type="primary"
            icon="el-icon-plus"
            circle
            readonly/>
        </el-popover>
      </template>

      <template #fork="data">
        <el-button round @click="test(data)">添加条件</el-button>
      </template>
    </vue-flow-design>
  </div>
</template>

<script>
import { VueFlowDesign } from '@root/src/main'

export default {
  components: {
    VueFlowDesign
  },

  data () {
    return {
      data: [
        { name: '节点1', id: 1 },
        { name: '节点2', id: 1 },
        [
          [{ name: '节点2', id: 1 }, { name: '节点2', id: 1 }],
          [{ name: '节点2', id: 1 }, { name: '节点2', id: 1 }],
          [{ name: '节点2', id: 1 }, { name: '节点2', id: 1 }]
        ],
        { name: '节点3', id: 1 }
      ]
    }
  },

  methods: {
    test (data) {
      console.log(data)
    },

    xxx (data) {
      console.log(data)
    }
  }
}
</script>
