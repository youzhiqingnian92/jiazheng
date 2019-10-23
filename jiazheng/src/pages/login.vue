<template>
  <div class="wrap">
    <div class="text-center box">
      <h1 class="color1">登录</h1>
      <el-select class="form" v-model="user.type" clearable placeholder="请选择角色">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input class="form" placeholder="请输入内容" v-model="user.name" clearable></el-input>
      <el-input class="form" placeholder="请输入密码" v-model="user.pass" clearable show-password></el-input>
      <div>
        <el-button type="primary" :plain="true" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import API from "../common/js/api";
export default {
  data() {
    return {
      options: [
        {
          value: "0",
          label: "超级管理员"
        },
        {
          value: "1",
          label: "普通管理员"
        }
      ],
      user: {
        name: "",
        pass: "",
        type: ""
      }
    };
  },
  methods: {
    login() {
      this.$axios({
        url: API.login,
        method: "post",
        data: this.user
      }).then(res => {
        if(res.data.isok) {
          this.$message({
            showClose: true,
            message: res.data.info,
            type: "success"
          });
          sessionStorage.setItem('userName',this.user.name)
          sessionStorage.setItem('isAdmin',this.user.type)
          this.$router.push('/index')
        } else {
          this.$message({
            showClose: true,
            message: res.data.info,
            type: "error"
          });
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.wrap {
  width: 100vw;
  height: 100vh;
  background: url('../assets/img/0.jpg') no-repeat left top;
  background-size: 100% 100%;
  position: fixed;
  left: 0;
  top: 0px;

  .box {
    width: 400px;
    height: 350px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

    .color1 {
      font-size: 40px;
      height: 60px;
      line-height: 60px;
    }
  }
}
</style>