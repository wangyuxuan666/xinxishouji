<template>
  <div class="total">
    <div class="left">
      <span>当前线上用户地区分布比例</span>
    </div>
    <div class="right">
      <div ref="mychart" class="echarts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  mounted () {
    const mychart = echarts.init(this.$refs.mychart)
    mychart.setOption({
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 335, name: '路北', itemStyle: { color: '#00F260' } },
            { value: 310, name: '丰南', itemStyle: { color: '#0575E6' } },
            { value: 234, name: '丰润', itemStyle: { color: '#74ebd5' } },
            { value: 1548, name: '路南', itemStyle: { color: '#22c1c3' } }
          ]
        }
      ]
    })
  }
}
</script>

<style lang="less" scoped>
.total {
  width: 100%;
  height: 100%;
  .left {
    width: 50%;
    height: 100%;
    float: right;
    display: flex;
    align-items : center;
    color: #666;
    font-size: 20px;
  }
  .right {
    width: 50%;
    height: 100%;
    float: left;
    .echarts {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
