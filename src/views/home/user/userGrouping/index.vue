<template>
  <div class="total">
    <el-dialog
      title="新增"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="from" :model="from" label-width="80px">
        <el-form-item label="分组名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="分组介绍">
          <el-input
            type="textarea"
            v-model="form.introduce"
            :autosize="{ minRows: 3 }"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-card class="table">
      <el-table
        :data="tableData"
        style="width: 100%"
        :cell-style="{ 'text-align': 'center' }"
        :header-cell-style="{ 'text-align': 'center' }"
        height="500"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="分组名称">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="发布时间">
                <span>{{ props.row.time }}</span>
              </el-form-item>
              <el-form-item label="分组介绍">
                <span>{{ props.row.introduce }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="组类名称" prop="id"> </el-table-column>
        <el-table-column label="操作" prop="desc">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleDelete(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
        <el-table-column width="150">
          <template slot="header">
            <el-button type="primary" size="mini" @click="dialogVisible = true"
              >新增分组</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        introduce: ''
      },
      dialogVisible: false,
      tableData: [
        {
          id: '意向客户',
          time: '2020-11-10',
          introduce: '非常有意向'
        },
        {
          id: '长期客户',
          time: '2020-11-11',
          introduce: '持续客户'
        },
        {
          id: '犹豫客户',
          time: '2020-11-12',
          introduce: '有意向,但因为原因暂不考虑'
        },
        {
          id: '工单客户',
          time: '2020-11-13',
          introduce: '售后出现问题的客户'
        }
      ]
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
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
  .dialog-footer {
    height: 100px;
  }
  .table {
    width: 80%;
    height: 80%;
    .demo-table-expand {
      font-size: 0;
    }
    .demo-table-expand label {
      width: 90px;
      color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
  }
}
</style>
