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
        <v-fromwater @reviseWater="reviseWater" @addBanner="addWater" :banner="watersD"></v-fromwater>
      </el-tab-pane>
      <!-- 水站评论 -->
      <el-tab-pane label="水站评论" name="second">
        <!-- 下拉菜单 -->
        <el-select
          style="width: 80%;margin:0px auto;display:block"
          v-model="value"
          placeholder="请选择"
        >
          <el-option label="全部" value></el-option>
          <el-option
            v-for="item in waterData"
            :key="item.value"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
        <!-- 评论表格 -->
        <el-table :data="waterComment" class="table" style="width: 80%" height="300px" border>
          <el-table-column fixed type="index" label="序号" width="100px"></el-table-column>
          <el-table-column label="用户名称">
            <template slot-scope="scope">
              <span>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column label="评论内容">
            <template slot-scope="scope">
              <span>{{scope.row.content}}</span>
            </template>
          </el-table-column>
          <el-table-column label="时间">
            <template slot-scope="scope">
              <span>{{scope.row.time|tranTime}}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <v-delbtn :delId="scope.row.id" @del="delCom"></v-delbtn>
            </template>
          </el-table-column>
        </el-table>
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
      watersD: {},
      value: "",
      waterComment: []
    };
  },
  mounted() {
    this.info();
    this.getComment(this.value);
  },
  watch: {
    value() {
      this.getComment(this.value);
    }
  },
  methods: {
    //获取查询水站
    info() {
      this.$axios({
        url: API.findWater
      }).then(res => {
        this.waterData = res.data.data;
      });
    },
    //删除水站
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
    //查看水站
    look(id) {
      this.$store.dispatch("changeAA");
      this.$store.dispatch("waterAA");
      this.$axios({
        url: API.findWater,
        params: { id }
      }).then(res => {
        if (res.data.isok) {
          this.watersD = res.data.data[0];
        } else {
          this.$error(res);
        }
      });
    },
    //添加水站
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
    //点击添加清空
    addWater1() {
      this.$store.dispatch("changeAA");
      this.$store.dispatch("waterAA2");
      this.watersD = {};
    },
    //修改水站
    reviseWater(data) {
      this.$axios({
        url: API.updateWater,
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
    //获取水站评论
    getComment(waterId) {
      this.$axios({
        url: API.findComment,
        params: {
          waterId
        }
      }).then(res => {
        if (res.data.isok) {
          this.waterComment = res.data.data;
        }
      });
    },
    delCom(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delComment,
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