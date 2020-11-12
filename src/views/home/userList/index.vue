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
        <el-table-column prop="name" label="老人姓名"> </el-table-column>
        <el-table-column prop="contactname" label="联系人姓名">
        </el-table-column>
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
          prop="sale"
          label="销售"
          :filters="[
            { text: '小刘', value: '小刘' },
            { text: '小张', value: '小张' },
            { text: '小冯', value: '小冯' },
          ]"
          :filter-method="filtersale"
        >
        </el-table-column>
        <el-table-column
          prop="nurse"
          label="护工"
          :filters="[
            { text: '王五', value: '王五' },
            { text: '赵六', value: '赵六' },
            { text: '钱三', value: '钱三' },
          ]"
          :filter-method="filternurse"
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="上户状态"
          width="100"
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
        <el-table-column prop="phone" label="联系人电话"> </el-table-column>
        <el-table-column
          prop="group"
          label="分组"
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
          name: '张三',
          contactname: '张先生',
          region: '路南',
          sale: '小张',
          nurse: '王五',
          state: true,
          phone: '139111111',
          group: '第一类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '李四',
          contactname: '李女生',
          region: '路北',
          sale: '小冯',
          nurse: '王五',
          state: false,
          phone: '139111111',
          group: '第三类',
          tag: '公司'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰南',
          nurse: '钱三',
          sale: '小刘',
          state: true,
          phone: '139111111',
          group: '第二类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰润',
          sale: '小冯',
          nurse: '钱三',
          state: false,
          phone: '139111111',
          group: '第一类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰南',
          sale: '小刘',
          nurse: '王五',
          state: true,
          phone: '139111111',
          group: '第一类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰润',
          sale: '小刘',
          nurse: '赵六',
          state: false,
          phone: '139111111',
          group: '第三类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰南',
          sale: '小张',
          nurse: '王五',
          state: true,
          phone: '139111111',
          group: '第二类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰润',
          sale: '小冯',
          nurse: '王五',
          state: false,
          phone: '139111111',
          group: '第三类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰南',
          sale: '小刘',
          nurse: '王五',
          state: true,
          phone: '139111111',
          group: '第二类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰润',
          sale: '小冯',
          nurse: '王五',
          state: false,
          phone: '139111111',
          group: '第二类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰南',
          sale: '小张',
          nurse: '赵六',
          state: true,
          phone: '139111111',
          group: '第三类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰润',
          sale: '小冯',
          nurse: '赵六',
          state: false,
          phone: '139111111',
          group: '第一类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰南',
          sale: '小张',
          nurse: '王五',
          state: true,
          phone: '139111111',
          group: '第一类',
          tag: '家'
        },
        {
          date: '2016-05-02',
          name: '张三',
          contactname: '张先生',
          region: '丰润',
          sale: '小张',
          nurse: '赵六',
          state: false,
          phone: '139111111',
          group: '第一类',
          tag: '家'
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
    filterregion (value, row) {
      return row.region === value
    },
    filterstate (value, row, column) {
      console.log(row)
      return row.state === value
    },
    filtergroup (value, row) {
      return row.group === value
    },
    filtersale (value, row) {
      return row.sale === value
    },
    filternurse (value, row) {
      return row.nurse === value
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
