<template>
  <div class="total">
    <div class="date">
      <h1>{{ gettime }}</h1>
    </div>
    <div class="today">
      <el-card shadow="always" class="today-top">
        <span>今日新增客户：</span>
        <div class="h1">240</div>
      </el-card>
      <el-card shadow="always" class="today-down">
        <span>今日新增成交：</span>
        <div class="h1">80</div>
      </el-card>
    </div>
    <div class="jindu">
      <div class="jinduright">
        <el-progress
          type="circle"
          :percentage="percentage"
          :stroke-width="8"
          :color="jinduColor"
        ></el-progress>
        <div class="jinduleft">本月成交量进度</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      gettime: '',
      percentage: 50,
      jinduColor: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#00F260', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  },
  methods: {
    getTime: function () {
      var _this = this
      const yy = new Date().getFullYear()
      const mm = new Date().getMonth() + 1
      const dd = new Date().getDate()
      const hh = new Date().getHours()
      const mf =
        new Date().getMinutes() < 10
          ? '0' + new Date().getMinutes()
          : new Date().getMinutes()
      const ss =
        new Date().getSeconds() < 10
          ? '0' + new Date().getSeconds()
          : new Date().getSeconds()
      _this.gettime = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mf + ':' + ss
    },
    currentTime () {
      setInterval(this.getTime, 500)
    }
  },
  created () {
    this.currentTime()
  }
}
</script>

<style lang="less" scoped>
.total {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10px;
  .date {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 25px;
      color: #666;
    }
  }
  .today {
    height: 60%;
    width: 45%;
    float: right;
    span {
      float: left;
      font-size: 15px;
      font-weight: 700;
      font-family: "Source Sans Pro", sans-serif;
      color:#666;
      margin-top: 5px;
    }
    .h1 {
      float: left;
      font-size: 20px;
      margin: 0;
      padding: 0;
      color:#ef8e38;
      margin-bottom: 5px;
      font-family: 'PT Sans', sans-serif;
      font-weight: 700;
    }
    .today-top {
      height: 40%;
      width: 90%;
      margin-bottom: 10%;
    }
    .today-down {
      height: 40%;
      width: 90%;
    }
  }
  .jindu {
    width: 55%;
    height: 60%;
    float: left;
    .jinduleft {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-family: "Source Sans Pro", sans-serif;
      font-weight: 700;
      color: #666;
    }
    .jinduright {
      width: 100%;
      height: 70%;
      text-align: center;
    }
  }
}
</style>
