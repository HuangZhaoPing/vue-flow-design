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

@mixin rounded-corners {
  border: none;
  outline: none;
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
}

.flow-design-zoom {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;

  .percent-input {
    text-align: center;
    width: 60px;
    font-size: 12px;
    color: #606266;
    box-sizing: border-box;
    height: 100%;

    @include rounded-corners;

    &:focus {
      @include rounded-corners;
    }
  }

  > span {
    font-size: 12px;
    width: 35px;
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    background-color: #f5f7fa;
    color: #606266;
    cursor: pointer;

    .iconfont {
      font-size: 12px;
      font-weight: 700;
    }

    &.flow-design-zoom-decrease {
      border-radius: 4px 0 0 4px;
      border: 1px solid $border-color;
    }

    &.flow-design-zoom-increase {
      border-radius: 0 4px 4px 0;
      border: 1px solid $border-color;
    }
  }
}
</style>
