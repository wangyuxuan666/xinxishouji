<template>
  <div class="total">
    <div ref="mychartx" class="echarts"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted () {
    const mychartx = echarts.init(this.$refs.mychartx)
    mychartx.setOption({})
  }
}
</script>

<style lang="less" scoped>
.total {
  width: 100%;
  height: 100%;
  .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
