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
    mychartx.setOption({
      color: ['#3398DB'],
      title: {
        text: '数据总统计'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      axisLabel: {
      // rotate: '45',
        interval: 0,
        color: '#767676',
        fontSize: 12,
        // x轴文本换行
        formatter: function (params) {
          var newParamsName = '' // 最终拼接成的字符串
          var paramsNameNumber = params.length // 实际标签的个数
          var provideNumber = 4 // 每行能显示的字的个数
          var rowNumber = Math.ceil(paramsNameNumber / provideNumber) // 换行的话，需要显示几行，向上取整
          // 条件等同于rowNumber>1
          if (paramsNameNumber > provideNumber) {
          /** 循环每一行,p表示行 */
            for (var p = 0; p < rowNumber; p++) {
              var tempStr = '' // 表示每一次截取的字符串
              var start = p * provideNumber // 开始截取的位置
              var end = start + provideNumber // 结束截取的位置
              // 此处特殊处理最后一行的索引值
              if (p === rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber)
              } else {
              // 每一次拼接字符串并换行
                tempStr = params.substring(start, end) + '\n'
              }
              newParamsName += tempStr // 最终拼成的字符串
            }
          } else {
          // 将旧标签的值赋给新标签
            newParamsName = params
          }
          return newParamsName
        }
      },
      xAxis: [
        {
          type: 'category',
          data: ['平台总用户数', '成交数', '在线上户数', '护工数', '在线上户护工数', '投诉数', '未解决数'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '目前总量',
          type: 'bar',
          barWidth: '60%',
          data: [5400, 3300, 1800, 300, 240, 120, 20]
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
  display: flex;
  justify-content: center;
  align-items: center;
  .echarts {
    width: 92%;
    height: 92%;
  }
}
</style>
