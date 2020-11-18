<template>
  <div class="total">
    <div class="top">
      <el-select
        v-model="monthlyvalue"
        placeholder="请选择"
        @change="monthlyvalue1"
      >
        <el-option
          v-for="item in monthly"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        v-model="value"
        placeholder="请选择销售"
        style="margin-left: 20px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div ref="mychart" class="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      monthly: [
        {
          value: 1,
          label: '月度'
        },
        {
          value: 2,
          label: '周度'
        }
      ],
      options: [
        {
          value: '选项1',
          label: '张三'
        },
        {
          value: '选项2',
          label: '李四'
        },
        {
          value: '选项3',
          label: '王五'
        },
        {
          value: '选项4',
          label: '赵六'
        },
        {
          value: '选项5',
          label: '钱三'
        }
      ],
      value: '',
      monthlyvalue: 2,
      monthlyvalues: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  },
  methods: {
    monthlyvalue1 () {
      this.$data.monthlyvalues = this.$data.monthlyvalue === 1
        ? ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        : [
          '1号',
          '2号',
          '3号',
          '4号',
          '5号',
          '6号',
          '7号',
          '8号',
          '9号',
          '10号',
          '11号',
          '12号',
          '13号',
          '14号',
          '15号',
          '16号',
          '17号',
          '18号',
          '19号',
          '20号',
          '21号',
          '22号',
          '23号',
          '24号',
          '25号',
          '26号',
          '27号,',
          '28号',
          '29号',
          '30号',
          '31号'
        ]
      // this.mychart.setOption(this.option, true)
    }
  },
  mounted () {
    const mychart = echarts.init(this.$refs.mychart)
    mychart.setOption({
      title: {},
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['成交', '新增']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.$data.monthlyvalues
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '新增',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '成交',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ]
    })
  },
  watch: {
    monthlyvalues: function () {
      console.log(this.mychart)
    },
    option: function (newvalue, oldvalue) {

      // 侦听相对应的属性

      // 判断echarts对象是否存在存在 if(charts),charts为定义的echarts对象,

      // 若存咋， 则继续判断属性是否发生变化 if(newvalue)，发生变化重新设置echarts的option, charts.setOption(newvalue),没发生变化则 charts.setOption(loldvalue)

      // 若charts对象不存在，则直接初始化echarts

    }

  }
}
</script>

<style lang="less" scoped>
.total {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .top {
    height: 15%;
    width: 90%;
    display: flex;
    justify-self: start;
    align-items: center;
    .el-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
  .chart {
    width: 90%;
    height: 80%;
  }
}
</style>
