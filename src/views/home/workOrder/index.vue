<template>
  <div class="total">
    <el-card class="total-card">
      <el-table
        stripe
        style="width: 100%"
        ref="filterTable"
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        :cell-style="{ 'text-align': 'center' }"
        :header-cell-style="{ 'text-align': 'center' }"
        height="600"
      >
        <el-table-column prop="date" label="日期" width="180" sortable>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="Administration" label="负责人员"
         :filters="[
            { text: '张三', value: '张三' },
            { text: '王五', value: '王五' },
          ]"
          :filter-method="filterAdministration"
          filter-placement="bottom">
        </el-table-column>
        <el-table-column prop="phone" label="联系电话"> </el-table-column>
        <el-table-column
          prop="state"
          label="上户状态"
          :filters="[
            { text: '上户', value: true },
            { text: '未上户', value: false },
          ]"
          :filter-method="filterstate"
          filter-placement="bottom"
        >
        <template slot-scope="scope">
            <i
              :class="scope.row.state ? 'el-icon-check' : 'el-icon-close'"
              :style="scope.row.state ? 'color: green' : 'color:red'"
            ></i>
          </template>
        </el-table-column>
        <el-table-column align="right" width="300">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入用户姓名搜索"
              style="width: 200px"
            />
            <el-button
              style="margin-left: 20px"
              size="mini"
              type="success"
              @click="handleDelete(scope.$index, scope.row)"
              >新增</el-button
            >
          </template>
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
              >废弃</el-button
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
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          Administration: '王五',
          phone: '13911111111',
          state: true
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          Administration: '王五',
          phone: '13911111111',
          state: false
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          Administration: '王五',
          phone: '13911111111',
          state: true
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          Administration: '王五',
          phone: '13911111111',
          state: false
        }
      ]
    }
  },
  methods: {
    filterstate (value, row, column) {
      return row.state === value
    },
    filterAdministration (value, row, column) {
      return row.state === value
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
  .total-card {
    width: 95%;
    height: 90%;
  }
}
</style>
