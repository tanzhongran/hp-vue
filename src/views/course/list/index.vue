<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="课程名称" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.courseName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="开启标签" width="110" align="center">
        <template slot-scope="scope">
           <span>{{ scope.row.enableTag=="1"?"开启":"关闭"}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getCourseList } from '@/api/course/list'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getCourseList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
