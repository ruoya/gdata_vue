<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> table
                </el-breadcrumb-item>
                <el-breadcrumb-item>基本table</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  created  () {
    const url = `/get_table_data`
    this.$axios.get(url).then((response) => {
      console.info(response.data.data)
      this.tableData = response.data.data
    }).catch((response) => {
      console.log(response)
    })
  }
}
</script>

<style >
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
