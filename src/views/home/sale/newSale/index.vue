<template>
  <div class="total">
    <el-card class="new">
      <el-form ref="form" :model="form" label-width="90px">
        <div class="left">
          <el-form-item label="销售姓名">
            <el-input
              v-model="form.name"
              placeholder="请输入真实姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="销售年龄">
            <el-input
              v-model="form.age"
              placeholder="请输入联系人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="销售性别">
            <el-switch
              v-model="form.gender"
              active-text="男"
              inactive-text="女"
              active-color="#13ce66"
              inactive-color="#009FFF"
            >
            </el-switch>
          </el-form-item>
          <el-form-item label="入职时间">
            <el-date-picker
              v-model="form.date"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="是否已婚">
            <el-switch
              v-model="form.spouse"
              active-text="是"
              inactive-text="否"
              active-color="#13ce66"
              inactive-color="#009FFF"
            >
            </el-switch>
          </el-form-item>
        </div>
        <div class="middle">
          <el-form-item label="手机号">
            <el-input
              v-model="form.phone"
              placeholder="请输入销售手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="家庭住址">
            <el-input
              v-model="form.address"
              placeholder="请输入家庭地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="销售学历">
            <el-select v-model="form.education" placeholder="请选择护工学历">
              <el-option label="无学历" value="0"></el-option>
              <el-option label="小学毕业" value="1"></el-option>
              <el-option label="初中毕业" value="2"></el-option>
              <el-option label="高中毕业" value="3"></el-option>
              <el-option label="大学毕业" value="4"></el-option>
              <el-option label="研究生及以上" value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作经验">
            <el-input
              v-model="form.experience"
              placeholder="请输入工作时长"
            ></el-input>
          </el-form-item>
          <el-form-item label="负责区域">
            <el-select v-model="form.lv" placeholder="区域名称">
              <el-option label="路南" value="0"></el-option>
              <el-option label="路北" value="1"></el-option>
              <el-option label="丰南" value="2"></el-option>
              <el-option label="丰润" value="3"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="right">
          <el-form-item label="销售民族">
            <el-input v-model="form.nation" placeholder="请输入民族"></el-input>
          </el-form-item>
          <el-form-item label="政治面貌">
            <el-select v-model="form.Politics" placeholder="请选择老人政治面貌">
              <el-option label="群众" value="0"></el-option>
              <el-option label="团员" value="1"></el-option>
              <el-option label="预备党员" value="2"></el-option>
              <el-option label="党员" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="销售籍贯">
            <el-input
              v-model="form.Native"
              placeholder="请输入护工户籍所在地"
            ></el-input>
          </el-form-item>
          <el-form-item label="紧急联系人">
            <el-input
              v-model="form.urgentname"
              placeholder="请输入联系人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人电话">
            <el-input
              v-model="form.urgentphone"
              placeholder="请输入联系人电话"
            ></el-input>
          </el-form-item>
        </div>
        <div class="bottom">
          <el-form-item label="身份证上传">
            <el-upload
              :http-request="uploadOldIDjust"
              action=""
              :show-file-list="false"
              class="OldIDjusts"
            >
              <img :src="form.oldIDjust" alt=""
            /></el-upload>
            <el-upload
              :http-request="uploadOldIDback"
              action=""
              :show-file-list="false"
              class="OldIDbacks"
              ><img :src="form.oldIDback" alt=""
            /></el-upload>
          </el-form-item>
          <el-form-item label="信息补充">
            <el-input
              type="textarea"
              v-model="form.describe"
              :autosize="{ minRows: 4, maxRows: 10 }"
            ></el-input>
          </el-form-item>
          <el-form-item class="lastitem">
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="clearSubmit">清空</el-button>
          </el-form-item>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 日期
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      // 表单
      form: {
        name: '',
        age: '',
        nurse: '0',
        gender: false,
        date: '',
        spouse: false,

        // 第二列
        phone: '',
        address: '',
        education: '',
        hobby: '',
        lv: '',

        // 第三列
        nation: '',
        Politics: '',
        Native: '',
        urgentname: '',
        urgentphone: '',

        // 身份证
        oldIDjust: require('../../../../assets/newUser/1.png'),
        oldIDback: require('../../../../assets/newUser/2.png'),
        describe: ''
      }
    }
  },
  methods: {
    // 提交
    onSubmit () {
      console.log(this.$data.form)
    },
    // 清除
    clearSubmit () {
      console.log(this.$data.form)
      for (const k in this.$data.form) {
        if (k === 'oldIDjust') {
          this.$data.form[k] = require('../../../../assets/newUser/1.png')
        } else if (k === 'oldIDback') {
          this.$data.form[k] = require('../../../../assets/newUser/2.png')
        } else {
          this.$data.form[k] = ''
        }
      }
    },
    // 身份证
    uploadOldIDjust (params) {},
    uploadOldIDback (file) {}
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
  .new {
    width: 95%;
    margin: 100px 0 30px 0;
    .el-form {
      box-sizing: border-box;
      padding: 2% 0 0 3%;
      .el-input {
        width: 220px;
      }
      .el-switch {
        margin-left: 10px;
      }
      .el-time-picker {
        width: 220px;
      }
      .el-select {
        width: 220px;
      }
      .left {
        float: left;
        width: 32%;
      }
      .middle {
        float: left;
        width: 32%;
      }
      .right {
        float: left;
        width: 32%;
      }
      .bottom {
        width: 97%;
        float: left;
        .OldIDjusts {
          float: left;
          margin-left: 30px;
          img {
            width: 200px;
          }
        }
        .OldIDbacks {
          float: left;
          margin-left: 30px;
          img {
            width: 200px;
          }
        }
        .lastitem {
          padding-left: 40%;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
