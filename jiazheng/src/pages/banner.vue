<template>
  <div>
    <!-- 添加按钮 -->
    <v-addbtn @addWater1="clearRepair"></v-addbtn>
    <v-table :banner="banner" :arr="['des']" @del="del"></v-table>
    <v-from @addBanner="addBanner" :houseBanner="houseBanner" :arr="['des']"></v-from>
  </div>
</template>
<script>
import API from "../common/js/api";

export default {
  data() {
    return {
      banner: [],
      bannerData: {},
      houseBanner: ""
    };
  },
  mounted() {
    this.info();
  },
  methods: {
    clearRepair() {
      this.$store.dispatch("changeAA");
      this.houseBanner = {};
    },
    //查询信息
    info() {
      this.$axios({
        url: API.banner
      }).then(res => {
        if (res.data.isok) {
          this.banner = res.data.data;
        } else {
          this.$message({
            type: "error",
            message: res.data.info
          });
        }
      });
    },
    //删除按钮
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delBanner,
            method: "get",
            params: { id }
          }).then(res => {
            if (res.data.isok) {
              this.$success(res);
              this.info();
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
    },
    //添加banner
    addBanner(data) {
      this.bannerData = data;
      this.$axios({
        url: API.addBanner,
        params: this.bannerData
      }).then(res => {
        if (res.data.isok) {
          this.$success(res);
          this.$store.dispatch("changeAA2");
          this.info();
        } else {
          this.$error(res);
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
</style>