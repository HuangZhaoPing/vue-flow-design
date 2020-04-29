<template>
  <div class="vue-flow-design-path-node">
    <div class="vue-flow-design-path-node-wrap">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.vue-flow-design-path-node {
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

.vue-flow-design-path-node-wrap {
  background-color: #fff;
  transform: scale(1);
}
</style>
