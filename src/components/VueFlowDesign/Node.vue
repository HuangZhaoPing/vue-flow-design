<template>
  <div class="vue-flow-design-node">
    <div class="vue-flow-design-node-wrap">
      <slot name="node"/>
    </div>
    <div class="vue-flow-design-path">
      <div class="vue-flow-design-path-wrap">
        <slot name="path"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
.vue-flow-design-node {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.vue-flow-design-path {
  box-sizing: border-box;
  padding: 30px 0;
  position: relative;

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

.vue-flow-design-path-wrap {
  background-color: #fff;
  transform: scale(1);
}
</style>
