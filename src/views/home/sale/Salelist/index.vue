<template>
  <div class="total">
    <el-card class="total-card">
      <el-table
        ref="filterTable"
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
        :cell-style="{ 'text-align': 'center' }"
        :header-cell-style="{ 'text-align': 'center' }"
        height="600"
      >
        <el-table-column prop="date" label="日期" sortable> </el-table-column>
        <el-table-column prop="name" label="销售姓名"> </el-table-column>
        <el-table-column
          prop="region"
          label="区域"
          :filters="[
            { text: '路南', value: '路南' },
            { text: '路北', value: '路北' },
            { text: '丰南', value: '丰南' },
            { text: '丰润', value: '丰润' },
          ]"
          :filter-method="filterregion"
        >
        </el-table-column>
        <el-table-column
          prop="achievement"
          label="本月完成情况"
          width="300"
          sortable
        >
          <template slot-scope="scope">
            <el-progress :percentage="scope.row.achievement"></el-progress>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="联系人电话"> </el-table-column>
        <el-table-column
          prop="Administration"
          label="管理人员"
          :filters="[
            { text: '第一类', value: '第一类' },
            { text: '第二类', value: '第二类' },
            { text: '第三类', value: '第三类' },
          ]"
          :filter-method="filtergroup"
        >
        </el-table-column>
        <el-table-column align="right" width="300">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入用户姓名搜索"
              style="width: 200px"
            />
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >详情</el-button
            >
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
          name: '张三',
          region: '路南',
          achievement: 40,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 59,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 80,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 38,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 77,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 90,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 70,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 30,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 90,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 20,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 49,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 43,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 99,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 100,
          phone: '139111111',
          Administration: '王五'
        },
        {
          date: '2016-05-02',
          name: '张三',
          region: '路南',
          achievement: 19,
          phone: '139111111',
          Administration: '王五'
        }
      ],
      search: ''
    }
  },
  methods: {
    resetDateFilter () {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter () {
      this.$refs.filterTable.clearFilter()
    },
    formatter (row, column) {
      return row.address
    },
    // 区域
    filterregion (value, row) {
      return row.region === value
    },
    // 上户状态
    filterstate (value, row, column) {
      console.log(row)
      return row.state === value
    },
    // 护工等级
    filterlv (value, row) {
      return row.lv === value
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
    height: 95%;
  }
}
</style>
