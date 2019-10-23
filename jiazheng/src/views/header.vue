<template>
  <div class="header">
    <el-button class="btn" type="danger" plain round @click="exit">退出登录</el-button>
    <h2 class="color2">{{name}}</h2>
  </div>
</template>
<script>
import API from "../common/js/api";
export default {
  data() {
    return {
      name: sessionStorage.getItem("userName")
    };
  },
  methods: {
    exit() {
      this.$confirm("此操作将退出当前账号, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.exit
          }).then(res => {
            if (res.data.isok) {
              this.$success(res);
              sessionStorage.removeItem("userName");
              sessionStorage.removeItem("isAdmin");
              this.$router.push("/login");
            } else {
              this.$error(res);
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.header {
  height: 100px;
  background: $primary1;
  overflow: hidden;
  line-height: 100px;

  h2 {
    float: right;
    font-size: 30px;
    margin-right: 50px;
  }

  .btn {
    float: right;
    margin-top: 30px;
    margin-right: 50px;
  }
}
</style>