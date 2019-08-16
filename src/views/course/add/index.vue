<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :rules="rules" label-width="120px" class="form-container">
      <el-form-item label="课程名称" prop="courseName">
        <el-input v-model="form.courseName" style="width:720px;"/>
      </el-form-item>
      <el-form-item label="课程人数" prop="capacity">
        <el-input v-model="form.capacity" type="number" style="width:120px;"/>
      </el-form-item>
      <el-row>
        <el-col :span="3">
          <el-form-item label="有效">
            <el-switch v-model="form.isActive" active-value="1" inactive-value="0" />
          </el-form-item>
        </el-col>
         <el-col :span="3">
          <el-form-item label="私教课">
            <el-switch v-model="form.isPersonalTraining" active-value="1" inactive-value="0"  />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { saveCourse } from '@/api/course'

export default {
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('必填项'))
      } else {
        callback()
      }
    }
    return {
      form: {
        courseName: '',
        capacity: '',
        isActive: '1',
        isPersonalTraining: '0'
      },
      rules: {
        courseName: [{ validator: validateRequire }],
        capacity: [{ validator: validateRequire }]
      },
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          saveCourse(this.form).then(response=>{
            this.$notify({
              title: '成功',
              message: '保存课程成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

