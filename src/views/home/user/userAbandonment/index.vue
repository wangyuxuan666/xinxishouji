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
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="废弃原因">
                <span>{{ props.row.reason }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="新增日期" sortable>
        </el-table-column>
        <el-table-column prop="fdate" label="废弃日期" sortable>
        </el-table-column>
        <el-table-column
          prop="name"
          label="老人姓名"
          highlight-current-row="true"
        >
        </el-table-column>
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
          prop="state"
          label="是否服务过"
          width="140"
          :filters="[
            { text: '服务', value: true },
            { text: '未服务', value: false },
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
        <el-table-column align="right" width="300">
          <template slot="header">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入用户姓名搜索"
              style="width: 150px"
            />
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              @click="handleEdit(scope.$index, scope.row)"
              >恢复</el-button
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
          fdate: '2017-08-02',
          name: '张三',
          contactname: '张先生',
          region: '路南',
          sale: '小张',
          state: true,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '李四',
          contactname: '李女士',
          region: '路南',
          sale: '小张',
          state: false,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '李四',
          contactname: '李女士',
          region: '路南',
          sale: '小张',
          state: false,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '张三',
          contactname: '张先生',
          region: '路南',
          sale: '小张',
          state: true,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '张三',
          contactname: '张先生',
          region: '路南',
          sale: '小张',
          state: true,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '李四',
          contactname: '李女士',
          region: '路南',
          sale: '小张',
          state: false,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '张三',
          contactname: '张先生',
          region: '路南',
          sale: '小张',
          state: true,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '李四',
          contactname: '李女士',
          region: '路南',
          sale: '小张',
          state: false,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '李四',
          contactname: '李女士',
          region: '路南',
          sale: '小张',
          state: false,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '张三',
          contactname: '张先生',
          region: '路南',
          sale: '小张',
          state: true,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '李四',
          contactname: '李女士',
          region: '路南',
          sale: '小张',
          state: false,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '李四',
          contactname: '李女士',
          region: '路南',
          sale: '小张',
          state: false,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '李四',
          contactname: '李女士',
          region: '路南',
          sale: '小张',
          state: false,
          phone: '139111111',
          reason: '出国'
        },
        {
          date: '2016-05-02',
          fdate: '2017-08-02',
          name: '李四',
          contactname: '李女士',
          region: '路南',
          sale: '小张',
          state: false,
          phone: '139111111',
          reason: '出国'
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
