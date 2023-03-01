<template>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column 
        v-for="col in tableHead" 
        :key="col.prop"
        :prop="col.prop"
        :label="col.label"
        :width="col.width"
      />
    </el-table>
  </template>

<script>
  export default {
    name: 'XxfTable',
    props: {
      tableHead: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>