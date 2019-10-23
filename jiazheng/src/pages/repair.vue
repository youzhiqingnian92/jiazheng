<template>
  <div class="wrap">
    <el-tabs v-model="activeName">
      <el-tab-pane label="维修" name="first">
        <v-addbtn @addWater1="clearRepair"></v-addbtn>
        <el-table :data="repairData" class="table" style="width: 80%" height="300px" border>
          <el-table-column fixed type="index" label="序号" width="100px"></el-table-column>
          <el-table-column prop="name" label="维修名称"></el-table-column>
          <el-table-column prop="tel" label="电话"></el-table-column>
          <el-table-column prop="type" label="类型"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click="look(scope.row.id)" type="success" plain>查看</el-button>
              <v-delbtn :delId="scope.row.id" @del="del"></v-delbtn>
            </template>
          </el-table-column>
        </el-table>
        <v-fromrepair @reviseRepair="reviseRepair" @addBanner="addRepair" :banner="repairD"></v-fromrepair>
      </el-tab-pane>
      <!-- 维修评论 -->
      <el-tab-pane label="维修评论" name="second">
        <!-- 下拉菜单 -->
        <el-select
          style="width: 80%;margin:0px auto;display:block"
          v-model="value"
          placeholder="请选择"
        >
          <el-option label="全部" value></el-option>
          <el-option
            v-for="item in repairData"
            :key="item.value"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
        <!-- 评论表格 -->
        <el-table :data="repairComment" class="table" style="width: 80%" height="300px" border>
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
      repairData: [],
      repairD: {},
      value: "",
      repairComment: []
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
    //获取查询维修
    info() {
      this.$axios({
        url: API.findRepair
      }).then(res => {
        this.repairData = res.data.data;
      });
    },
    //删除维修
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delRepair,
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
    //查看维修
    look(id) {
      this.$store.dispatch("changeAA");
      this.$store.dispatch("waterAA");
      this.$axios({
        url: API.findRepair,
        params: { id }
      }).then(res => {
        if (res.data.isok) {
          this.repairD = res.data.data[0];
        } else {
          this.$error(res);
        }
      });
    },
    //添加维修
    addRepair(data) {
      this.$axios({
        url: API.addRepair,
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
    clearRepair() {
      this.$store.dispatch("changeAA");
      this.$store.dispatch("waterAA2");
      this.repairD = {};
    },
    //修改维修
    reviseRepair(data) {
      this.$axios({
        url: API.updateRepair,
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
    //获取维修评论
    getComment(repairId) {
      this.$axios({
        url: API.findRepairComment,
        params: {
          repairId
        }
      }).then(res => {
        if (res.data.isok) {
          this.repairComment = res.data.data;
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
            url: API.delRepairComment,
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