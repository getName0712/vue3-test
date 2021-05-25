<template>
  <div>
    <div class="login-body">
      <div class="login-container">
        <div class="head">
          <img
            class="logo"
            src="//scpic.chinaz.net/files/pic/pic9/202102/apic30922.jpg"
          />
          <!--  -->
          <div class="name">
            <div class="title">哇卡哇卡</div>
            <div class="tips">aaaaaaaaaaaaaaaaaaaaaaaaa</div>
          </div>
        </div>
        <div v-if="loginStatus">
          <el-form
            :rules="rules"
            :model="ruleForm"
            ref="loginForm"
            class="login-form"
          >
            <el-form-item label="账号" prop="username">
              <el-input
                type="text"
                v-model.trim="ruleForm.username"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                v-model.trim="ruleForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="repassword">
              <el-input
                type="password"
                v-model.trim="ruleForm.repassword"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <!-- <div style="color: #333">
              登录表示您已同意<a href="" style="color:red">《服务条款》</a>
            </div> -->
              <el-button style="width: 100%" type="primary" @click="submitForm"
                >立即注册</el-button
              >
              <!-- <el-checkbox v-model="checked" @change="!checked"
              >下次自动登录</el-checkbox
            > -->
              <div @click="changeLogin">登录</div>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="!loginStatus">
          <el-form
            :rules="rules"
            :model="loginFom"
            ref="loginForm"
            class="login-form"
          >
            <el-form-item label="账号" prop="username">
              <el-input
                type="text"
                v-model.trim="loginFom.username"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                v-model.trim="loginFom.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <div style="color: #333">
              登录表示您已同意<a href="" style="color:red">《服务条款》</a>
            </div>
              <el-button style="width: 100%" type="primary" @click="logForm"
                >立即登录</el-button
              >
              <el-checkbox v-model="checked" @change="!checked"
              >下次自动登录</el-checkbox
            >
              <div @click="changeLogin">注册</div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import { register, login } from '@/api/api.js'
import { ElMessage } from 'element-plus'
export default {
  setup () {
    const loginForm = ref(null)
    const state = reactive({
      ruleForm: {
        username: 'adminss',
        password: '123456',
        repassword: '123456'
      },
      loginFom: {
        username: 'adminss',
        password: '123456'
      },
      checked: true,
      rules: {
        username: [
          { required: 'true', message: '账户不能为空', trigger: 'blur' }
        ],
        password: [
          { required: 'true', message: '密码不能为空', trigger: 'blur' }
        ],
        repassword: [
          { required: 'true', message: '密码不能为空', trigger: 'blur' }
        ]
      },
      loginStatus: false
    })
    // 登录
    const logForm = () => {
      loginForm.value.validate(valid => {
        //   valid非空验证
        if (valid) {
          console.log(state.loginFom)
          window.location.href = '/about'
          login(state.loginFom).then(res => {
            if (res.errorCode === 0) {
              console.log(res)
            } else {
              ElMessage.error(res.errorMsg)
              //   state.ruleForm = ''
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    // 注册登录切换
    const changeLogin = () => {
      state.loginStatus = !state.loginStatus
    }
    // 注册
    const submitForm = async () => {
      loginForm.value.validate(valid => {
        //   valid非空验证
        if (valid) {
          console.log(state.ruleForm)
          register(state.ruleForm).then(res => {
            if (res.errorCode === 0) {
              console.log(res)
            } else {
              ElMessage.error(res.errorMsg)
              //   state.ruleForm = ''
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    const resetForm = () => {
      loginForm.value.resetFields()
    }
    return {
      ...toRefs(state),
      loginForm,
      submitForm,
      resetForm,
      changeLogin,
      logForm
    }
  }
}
</script>

<style scoped lang="scss">
.login-body {
  display: flex;
  justify-content: center;
  width: 100%;
  background-image: url("//scpic.chinaz.net/files/pic/pic9/202104/apic32405.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;
}
.login-container {
  width: 450px;
  margin: 5% auto 0;
}
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 20px 0;
}
.head img {
  width: 100px;
  height: 100px;
  margin-right: 30px;
  opacity: 0.8;
  border-radius: 50%;
}
.head .title {
  font-size: 28px;
  color: #1baeae;
  line-height: 40px;
  font-weight: bold;
}
.head .tips {
  font-size: 12px;
  line-height: 30px;
  color: #999;
}
.login-form {
  width: 70%;
  margin: 0 auto;
}
</style>
<style>
.el-form--label-top .el-form-item__label {
  padding: 0;
}
.login-form .el-form-item {
  margin-bottom: 12px;
}
.el-button{
    margin-top: 10px;
}
</style>
