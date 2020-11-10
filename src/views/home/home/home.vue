<template>
  <div class="total">
    <div class="one">
      <div ref="mychartone" class="echartsone"></div>
    </div>
    <div class="two">
      <hometwo></hometwo>
    </div>
    <div class="three">
      <homethree></homethree>
    </div>
    <div class="four">
      <homefour></homefour>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import hometwo from './homeTwo'
import homethree from './homeThree'
import homefour from './homeFour'
export default {
  components: {
    hometwo: hometwo,
    homethree: homethree,
    homefour: homefour
  },
  mounted () {
    const mychartone = echarts.init(this.$refs.mychartone)
    mychartone.setOption({
      title: {
        text: '2020第47周客户周度统计'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a79851'
          }
        }
      },
      legend: {
        data: ['新增客户', '新增成交']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '新增成交',
          type: 'line',
          stack: '总量',
          color: '#6be585',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '新增客户',
          type: 'line',
          stack: '总量',
          color: '#009FFF',
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320]
        }
      ]
    })
  }
}
</script>

<style lang="less" scoped>
.total {
  padding: 0;
  height: 100%;
  .one {
    width: 60%;
    height: 50%;
    float: left;
    padding: 2% 1% 0;
    box-sizing: border-box;
    .echartsone {
      width: 96%;
      height: 96%;
    }
    h4 {
      margin: 0%;
      padding: 0%;
    }
  }
  .two {
    width: 38%;
    height: 50%;
    float: left;
    padding: 2%;
  }
  .three {
    width: 50%;
    height: 50%;
    float: left;
  }
  .four {
    width: 50%;
    height: 50%;
    float: left;
  }
}
</style>
