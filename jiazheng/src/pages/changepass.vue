<template>
  <div class="wrap">
    <el-form label-width="150px">
      <el-form-item class="font1" label="账号">
        <el-input v-model="form.name" class="input" disabled></el-input>
      </el-form-item>
      <el-form-item class="font1" label="原密码">
        <el-input clearable show-password v-model="form.oldpass" class="input" placeholder="请输入原密码"></el-input>
      </el-form-item>
      <el-form-item class="font1" label="新密码">
        <el-input clearable show-password v-model="form.newpass" class="input" placeholder="请输入新密码"></el-input>
      </el-form-item>
      <el-form-item class="font1" label="确认密码">
        <el-input v-model="form.value" clearable show-password class="input" placeholder="请确认新密码"></el-input>
      </el-form-item>
      <div class="text-center">
        <el-button type="primary" plain @click="reset">立即修改</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
import API from "../common/js/api";
export default {
  data() {
    return {
      form: {
        name: sessionStorage.getItem("userName")
      }
    };
  },
  methods: {
    reset() {
      if (this.form.newpass == this.form.value) {
        this.$axios({
          url: API.changePassManage,
          method: "post",
          data: this.form
        }).then(res => {
          if (res.data.isok) {
            this.$success(res);
            this.form = { name: sessionStorage.getItem("userName") };
          } else {
            this.$error(res);
          }
        });
      } else {
        this.$message({
          type: "info",
          message: "密码两次输入不一致"
        });
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.wrap {
  margin: 0 150px;
}
</style>