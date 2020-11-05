<template>
  <div class="login">
    <div class="shadow">
      <el-card class="login_card">
        <h1
          style="
            color: #00b4db;
            font-size: 36px;
            letter-spacing: 5px;
            margin-bottom: 50px;
          "
        >
          用户信息收集
        </h1>
        <el-form class="login_card_form">
          <el-form-item>
            <el-input
              style="width: 85%"
              v-model="userName"
              placeholder="账号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="password"
              style="width: 85%"
              placeholder="密码"
              show-password
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:85%;background-color:#00b4db">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("http://goss4.cfp.cn/creative/vcg/nowarter800/new/VCG41N1067908128.jpg");
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100vh;
  .shadow {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    padding-top: 170px;
    box-sizing: border-box;
    .login_card {
      width: 450px;
      height: 400px;
      background-color: rgba(255, 255, 255, 0.9);
      text-align: center;
      .login_card_form{
          height:200px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
      }
    }
  }
}
</style>
