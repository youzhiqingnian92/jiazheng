<template>
  <div class="wrap">
    <el-tabs v-model="activeName">
      <el-tab-pane label="水站" name="first">
        <v-addbtn @addWater1="addWater1"></v-addbtn>
        <el-table :data="waterData" class="table" style="width: 80%" height="300px" border>
          <el-table-column fixed type="index" label="序号" width="100px"></el-table-column>
          <el-table-column prop="name" label="水站名称"></el-table-column>
          <el-table-column prop="tel" label="电话"></el-table-column>
          <el-table-column prop="price" label="价格"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click="look(scope.row.id)" type="success" plain>查看</el-button>
              <v-delbtn :delId="scope.row.id" @del="del"></v-delbtn>
            </template>
          </el-table-column>
        </el-table>
        <v-fromwater @reviseWater="reviseWater" @addBanner="addWater" :banner="banner"></v-fromwater>
      </el-tab-pane>
      <el-tab-pane label="水站评论" name="second">
        <!-- <v-table :banner="teacherType" :arr="['type']"></v-table> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import API from "../common/js/api";
export default {
  data() {
    return {
      activeName: "first",
      waterData: [],
      banner: {
        name: "",
        score: "",
        count: "",
        likeNum: "",
        readNum: "",
        address: "",
        len: "",
        des: "",
        price: "",
        img: "",
        tel: ""
      }
    };
  },
  mounted() {
    this.info();
  },
  methods: {
    info() {
      this.$axios({
        url: API.findWater
      }).then(res => {
        this.waterData = res.data.data;
      });
    },
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delWater,
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
    look(id) {
      this.$store.dispatch("changeAA");
      this.$store.dispatch("waterAA");
      this.$axios({
        url: API.findWater,
        params: { id }
      }).then(res => {
        if (res.data.isok) {
          this.banner = res.data.data[0];
        } else {
          this.$error(res);
        }
      });
    },
    addWater(data) {
      this.$axios({
        url: API.addWater,
        params: data
      }).then(res => {
        if (res.data.isok) {
          this.$success(res);
          this.$store.dispatch("changeAA2");
          this.info();
        } else {
          this.$error(res);
        }
      });
    },
    addWater1() {
      this.banner = {};
    },
    reviseWater(data) {
      this.$axios({
        url: API.updateWater,
        params: data
      }).then(res => {
        if (res.data.isok) {
          this.$success(res), this.$store.dispatch("changeAA2");
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

.wrap {
  margin: 0 100px;
}
</style>