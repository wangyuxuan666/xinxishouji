<template>
  <div class="total">
    <el-card class="new">
      <el-form ref="form" :model="form" label-width="90px">
        <div class="left">
          <el-form-item label="老人姓名">
            <el-input
              v-model="form.name"
              placeholder="请输入老人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人姓名">
            <el-input
              v-model="form.contactsname"
              placeholder="请输入联系人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="老人性别">
            <el-switch
              v-model="form.gender"
              active-text="男"
              inactive-text="女"
              active-color="#13ce66"
              inactive-color="#009FFF"
            >
            </el-switch>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
              v-model="form.date"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="是否丧偶">
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
              placeholder="请输入联系人手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="家庭住址">
            <el-input
              v-model="form.address"
              placeholder="请输入服务地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="老人学历">
            <el-select v-model="form.education" placeholder="请选择老人学历">
              <el-option label="小学毕业" value="0"></el-option>
              <el-option label="初中毕业" value="1"></el-option>
              <el-option label="高中毕业" value="2"></el-option>
              <el-option label="大学毕业" value="3"></el-option>
              <el-option label="研究生及以上" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="老人爱好">
            <el-input
              v-model="form.hobby"
              placeholder="请输入老人爱好"
            ></el-input>
          </el-form-item>
          <el-form-item label="喜欢食物">
            <el-select v-model="form.likefood" placeholder="老人喜欢食物">
              <el-option label="肉类" value="0"></el-option>
              <el-option label="蔬菜" value="1"></el-option>
              <el-option label="水果" value="2"></el-option>
              <el-option label="西餐" value="3"></el-option>
              <el-option label="零食" value="4"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="right">
          <el-form-item label="老人民族">
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
          <el-form-item label="老人籍贯">
            <el-input
              v-model="form.Native"
              placeholder="请输入老人户籍所在地"
            ></el-input>
          </el-form-item>
          <el-form-item label="监控安装">
            <el-switch
              v-model="form.monitor"
              active-text="不需要"
              inactive-text="需要"
              active-color="#13ce66"
              inactive-color="#009FFF"
            >
            </el-switch>
          </el-form-item>
          <el-form-item label="护工名称">
            <el-select v-model="form.nurse" placeholder="请选择匹配护工">
              <el-option label="暂无" value="0"></el-option>
              <el-option label="张三" value="1"></el-option>
              <el-option label="李四" value="2"></el-option>
              <el-option label="王五" value="3"></el-option>
              <el-option label="赵六" value="4"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="bottom">
          <el-form-item label="老人情况">
            <el-radio-group v-model="form.situation">
              <el-radio label="全自理"></el-radio>
              <el-radio label="半失能"></el-radio>
              <el-radio label="全失能"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="进食情况">
            <el-radio-group v-model="form.eat">
              <el-radio label="自主进食"></el-radio>
              <el-radio label="协助进食"></el-radio>
              <el-radio label="胃管进食"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="选择病症">
            <el-checkbox-group v-model="form.disease">
              <el-checkbox label="糖尿病"></el-checkbox>
              <el-checkbox label="慢阻肺"></el-checkbox>
              <el-checkbox label="冠心病"></el-checkbox>
              <el-checkbox label="高血压"></el-checkbox>
              <el-checkbox label="高血脂"></el-checkbox>
              <el-checkbox label="癌症"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="护理需求">
            <el-checkbox-group v-model="form.nursing">
              <el-checkbox label="胃管"></el-checkbox>
              <el-checkbox label="尿管"></el-checkbox>
              <el-checkbox label="吸痰"></el-checkbox>
              <el-checkbox label="引流管"></el-checkbox>
              <el-checkbox label="气管插管"></el-checkbox>
              <el-checkbox label="气切"></el-checkbox>
              <el-checkbox label="人工肛门"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="护理时长">
            <el-radio-group v-model="form.Duration">
              <el-radio label="全天"></el-radio>
              <el-radio label="白天"></el-radio>
              <el-radio label="夜间"></el-radio>
              <el-radio label="周一至周五"></el-radio>
              <el-radio label="周六日"></el-radio>
            </el-radio-group>
          </el-form-item>
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
          <el-form-item label="老人其他补充描述">
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
        contactsname: '',
        nurse: '0',
        gender: false,
        date: '',
        spouse: false,

        // 第二列
        phone: '',
        address: '',
        education: '',
        hobby: '',
        likefood: '',

        // 第三列
        nation: '',
        Politics: '',
        Native: '',
        monitor: false,
        placeholder: false,

        // 底层
        situation: '',
        eat: '',
        disease: [],
        nursing: [],
        Duration: '',
        // 身份证
        oldIDjust: require('../../../assets/newUser/1.png'),
        oldIDback: require('../../../assets/newUser/2.png'),
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
        this.$data.form[k] = ''
      }
    },
    // 身份证
    uploadOldIDjust (params) {
    },
    uploadOldIDback (file) {
    }
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
    margin: 450px 0 30px 0;
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
        .lastitem{
          padding-left: 40%;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
