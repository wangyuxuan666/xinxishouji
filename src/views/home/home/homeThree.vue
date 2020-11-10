<template>
  <div class="total">
    <div class="left">
      <span>当前线上用户地区分布比例</span>

      <ul>
        <li>
          <div
            style="
              width: 18px;
              height: 13px;
              background-color: #22c1c3;
              display: inline-block;
              border-radius: 3px;
              margin-right: 10px;
            "
          ></div>
          路南区当前服务家庭: <span>548</span> 户
        </li>
        <li>
          <div
            style="
              width: 18px;
              height: 13px;
              background-color: #00f260;
              display: inline-block;
              border-radius: 3px;
              margin-right: 10px;
            "
          ></div>
          路北区当前服务家庭: <span>335</span> 户
        </li>
        <li>
          <div
            style="
              width: 18px;
              height: 13px;
              background-color: #8360c3;
              display: inline-block;
              border-radius: 3px;
              margin-right: 10px;
            "
          ></div>
          丰润区当前服务家庭: <span>534</span> 户
        </li>
        <li>
          <div
            style="
              width: 18px;
              height: 13px;
              background-color: #009fff;
              display: inline-block;
              border-radius: 3px;
              margin-right: 10px;
            "
          ></div>
          丰南区当前服务家庭: <span>310</span> 户
        </li>
      </ul>
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
            { value: 310, name: '丰南', itemStyle: { color: '#009FFF' } },
            { value: 534, name: '丰润', itemStyle: { color: '#8360c3' } },
            { value: 548, name: '路南', itemStyle: { color: '#22c1c3' } }
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
    justify-content: center;
    flex-direction: column;
    color: #666;
    font-size: 20px;
    span{
      margin:40px 0 0 20px;
    }
    ul {
      margin: 40px 0 40px 0;
      li {
        height: 30px;
        padding-left: 10px;
        box-sizing: border-box;
        font-size: 16px;
        color: #666;
        span {
          font-size: 18px;
          color: #ef8e38;
          font-weight: 700;
        }
      }
    }
  }
  .right {
    width: 50%;
    height: 100%;
    float: left;
    overflow: unset;
    .echarts {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
