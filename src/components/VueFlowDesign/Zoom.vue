<template>
  <div class="flow-design-zoom">
    <span class="flow-design-zoom-decrease">
      <i class="iconfont icon-jianshao"/>
    </span>
    <input class="percent-input" type="text" readonly value="100%"/>
    <span class="flow-design-zoom-increase">
      <i class="iconfont icon-tianjia"/>
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$border-color: #dcdfe6;

.flow-design-zoom {
  align-items: center;
  display: flex;
  height: 30px;
  line-height: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
}

.percent-input {
  @include border;
  box-sizing: border-box;
  color: #606266;
  font-size: 12px;
  height: 100%;
  text-align: center;
  width: 60px;

  &:focus {
    @include border;
  }
}

> span {
  background-color: #f5f7fa;
  box-sizing: border-box;
  color: #606266;
  cursor: pointer;
  font-size: 12px;
  height: 100%;
  text-align: center;
  width: 35px;
}

.iconfont {
  font-size: 12px;
  font-weight: 700;

  &.flow-design-zoom-decrease {
    border: 1px solid $border-color;
    border-radius: 4px 0 0 4px;
  }

  &.flow-design-zoom-increase {
    border: 1px solid $border-color;
    border-radius: 0 4px 4px 0;
  }
}

@mixin border {
  border: 0;
  border-bottom: 1px solid $border-color;
  border-top: 1px solid $border-color;
  outline: none;
}
</style>
