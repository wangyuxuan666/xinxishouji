<template>
  <div>
    <el-container class="total">
      <el-aside width="240px" class="left">
        <div class="layout-aside">
          <div class="title">
            <img src="../../assets/logo.png" alt="" />
            <h1>众源康养</h1>
          </div>
          <el-menu
            style="width: 100%"
            background-color="#2c3141"
            text-color="#adafb5"
            active-text-color="#ffd04b"
            router
            :default-openeds="open"
          >
            <!-- 导航组件 -->
            <el-menu-item index="/home"> 首页 </el-menu-item>
            <!-- 二级导航 -->
            <el-submenu index="1">
              <!-- 具名插槽 -->
              <span slot="title">用户信息</span>
              <!-- 放置 el-menu-item -->
              <el-menu-item index="/home/newUser">新增用户</el-menu-item>
              <el-menu-item index="/home/userList">用户列表</el-menu-item>
              <el-menu-item index="/home/userGrouping">用户分组</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <span slot="title">护工信息</span>
              <el-menu-item index="/home/newNurses">新增护工</el-menu-item>
              <el-menu-item index="/home/nursesList">护工列表</el-menu-item>
            </el-submenu>
            <el-menu-item index="/home/myMessage">个人信息</el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class="header">
          <el-row
            class="layout-header"
            type="flex"
            align="middle"
            justify="space-between"
          >
            <!-- 左侧 -->
            <el-col class="left" :span="6">
              <!-- 左侧图标 -->
              <i class="el-icon-news"></i>
              <span class="layout-header_left_title"
                >唐山众源康养管理有限公司</span
              >
            </el-col>
            <!-- 右侧 -->
            <el-col class="right" :span="3">
              <el-row type="flex" align="middle">
                <img src="../../assets/header.png" alt="" width="15%" />
                <!-- 下拉菜单 -->
                <el-dropdown>
                  <span>用户姓名</span>
                  <!-- 下拉菜单  具名插槽 -->
                  <el-dropdown-menu slot="dropdown">
                    <!-- 下拉内容 -->
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-row>
            </el-col>
          </el-row>
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: ['1', '2']
    }
  }
}
</script>

<style lang="less" scoped>
.total {
  width: 100%;
  height: 100vh;
  .left {
    z-index: 2;
    .layout-aside {
      width: 100%;
      min-height: 100vh;
      background-color: #2c3141;
      box-sizing: border-box;
      .el-menu-item {
        box-sizing: border-box;
        width: 240px;
      }
      .el-submenu {
        width: 240px;
      }
      .title {
        background-color: #2c3141;
        padding: 0 0 0 5px;
        height: 70px;
        box-sizing: border-box;
        img {
          height: 30px;
          float: left;
          margin: 25px 5px 15px 18px;
        }
        h1 {
          float: left;
          margin: 5px 10px;
          height: 50px;
          line-height: 70px;
          color: #fff;
          font-weight: 300;
          font-size: 20px;
          letter-spacing: 3px;
          font-family: "Times New Roman", Georgia, Serif;
        }
      }
    }
  }
  .header {
    height: 70px !important;
    box-shadow: 0px 0px 10px 5px #ccc;
    z-index: 1;
    .layout-header {
      display: flex;
      align-content: center;
      height: 70px;
      .left {
        .layout-header_left_title {
          margin-left: 10px;
          font-size: 16px;
          color: #2c3e50;
        }
      }
      .right {
        img {
          margin-right: 15px;
        }
        span {
          cursor: pointer;
        }
      }
    }
  }
  .main {
    background-color: rgb(245, 245, 245);
    padding: 0%;
  }
}
</style>
