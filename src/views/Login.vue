<template>
  <div class="login-container">
    <h3>FPC后台管理系统</h3>
    <el-form :model="LoginForm" status-icon :rules="rules" ref="LoginForm" label-width="100px">
      <el-form-item label="用户名" prop="userName">
        <el-input type="password" v-model="LoginForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="LoginForm.passWord" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        <el-button @click="resetForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      LoginForm:{
        userName:'',
        passWord:'',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container{
  display: flex;
  justify-content: center;
}
</style>