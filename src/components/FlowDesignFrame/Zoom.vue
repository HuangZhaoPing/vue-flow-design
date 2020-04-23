<template>
  <div class="flow-design-zoom">
    <span>
      <i class="iconfont icon-jianshao"/>
    </span>
    <input class="percent-input" type="text" readonly value="100%"/>
    <span>
      <i class="iconfont icon-tianjia"/>
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.flow-design-zoom {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  .percent-input {
    border: none;
    text-align: center;
    width: 60px;
    font-size: 12px;
    color: #606266;
    height: 100%;

    &:focus {
      border: none;
      outline: none;
    }
  }

  > span {
    font-size: 12px;
    padding: 5px;
    width: 35px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f5f7fa;
    color: #606266;
    cursor: pointer;
    // border: 1px solid #dcdfe6;
    // border-radius: 4px;

    .iconfont {
      font-size: 12px;
      font-weight: 700;
    }
  }
}
</style>
