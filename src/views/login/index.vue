<template>
  <div class="login">
    <div class="shadow">
      <el-card class="login_card">
        <img src="../../assets/logo.png" alt="" style="width:23%;margin:15px 0 50px 0">
        <el-form ref="myForm" class="login_card_form" :model="loginform" :rules="loginRules">
          <el-form-item prop="userName" style="width: 85%;margin-left:7.5%">
            <el-input
              v-model="loginform.userName"
              placeholder="账号"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" style="width: 85%;margin-left:7.5%">
            <el-input
              v-model="loginform.password"
              placeholder="密码"
              show-password
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item style="width: 85%;margin-left:7.5%">
            <el-button
              type="primary"
              style="width: 100%"
              @click="submitLogin"
              >登录</el-button
            >
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
      loginform: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [{ required: true, message: '请输入您的账号' }],
        password: [{ required: true, message: '请输入您的密码' }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate(isok => {
        if (isok) {
          if (this.loginform.userName === '1234' && this.loginform.password === '1234') {
            this.$router.push('/home')
          } else {
            this.$message('您的账号或密码有误')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("http://goss2.cfp.cn/creative/vcg/nowarter800/new/VCG41471892237.jpg");
  background-size: cover;
  background-position:center;
  width: 100%;
  height: 100vh;
  .shadow {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    padding-top: 140px;
    box-sizing: border-box;
    .login_card {
      width: 400px;
      height: 450px;
      background-color: rgba(255, 255, 255, 0.2);
      text-align: center;
      overflow:unset;
      .login_card_form {
        height: 230px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: center;
      }
    }
  }
}
</style>
