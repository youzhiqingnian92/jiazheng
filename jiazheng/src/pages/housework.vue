<template>
  <div class="wrap">
    <el-tabs v-model="activeName">
      <el-tab-pane label="家政banner" name="first">
        <v-addbtn @addWater1="clearBanner"></v-addbtn>
        <el-table :data="houseData" class="table" style="width: 80%" height="300px" border>
          <el-table-column fixed type="index" label="序号" width="100px"></el-table-column>
          <el-table-column label="图片">
            <template slot-scope="scope">
              <img :src="scope.row.img" alt />
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <v-delbtn :delId="scope.row.id" @del="del"></v-delbtn>
            </template>
          </el-table-column>
        </el-table>
        <v-from @addBanner="addHouse" :houseBanner="houseBanner" :arr="[]"></v-from>
      </el-tab-pane>
      <!-- 添加人员 -->
      <el-tab-pane label="人员管理" name="second">
        <el-button class="btnAdd" type="primary" plain @click="addWorkerBtn">添加</el-button>
        <!-- 下拉菜单 -->
        <el-select
          style="width: 80%;margin:0px auto;display:block"
          v-model="value"
          placeholder="请选择"
        >
          <el-option label="全部" value></el-option>
          <el-option v-for="item in houseType" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <!-- 人员信息表格 -->
        <el-table :data="houseWorker" class="table" style="width: 80%" height="300px" border>
          <el-table-column fixed type="index" label="序号" width="100px"></el-table-column>
          <el-table-column label="名称">
            <template slot-scope="scope">
              <span>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column label="电话">
            <template slot-scope="scope">
              <span>{{scope.row.tel}}</span>
            </template>
          </el-table-column>
          <el-table-column label="价格">
            <template slot-scope="scope">
              <span>{{scope.row.price}}</span>
            </template>
          </el-table-column>
          <el-table-column label="年龄">
            <template slot-scope="scope">
              <span>{{scope.row.age}}</span>
            </template>
          </el-table-column>
          <el-table-column label="学历">
            <template slot-scope="scope">
              <span>{{scope.row.edu}}</span>
            </template>
          </el-table-column>
          <el-table-column label="服务类型">
            <template slot-scope="scope">
              <span>{{scope.row.type|tranString}}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button @click="look(scope.row.id)" type="success" plain>查看</el-button>
              <v-delbtn :delId="scope.row.id" @del="delCom"></v-delbtn>
            </template>
          </el-table-column>
        </el-table>
        <v-fromhouse
          @addWorker="addHouseWorker"
          @reviseWorkers="reviseHouseWorkers"
          :workerType="houseType"
          :workerQua="houseQua"
          :banner="workerData"
        ></v-fromhouse>
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
      houseData: [],
      value: "",
      houseWorker: [],
      houseBanner: {},
      houseType: [],
      houseQua: [],
      workerData: {
        type: [],
        qualification: []
      }
    };
  },
  mounted() {
    this.info();
    this.getType();
    this.getQualification();
    this.getComment(this.value);
  },
  watch: {
    value() {
      this.getComment(this.value);
    }
  },
  methods: {
    //清除banner信息
    clearBanner() {
      this.$store.dispatch("changeAA");
      this.houseBanner = {};
    },
    //获取查询banner
    info() {
      this.$axios({
        url: API.homeBanner
      }).then(res => {
        if (res.data.isok) {
          this.houseData = res.data.data;
        } else {
          this.$error(res);
        }
      });
    },
    //添加家政banner
    addHouse(data) {
      this.$axios({
        url: API.addHomeBanner,
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
    //删除家政banner
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delHomeBanner,
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

    //获取家政人员信息
    getComment(type) {
      this.$axios({
        url: API.findHomeWorker,
        params: {
          type
        }
      }).then(res => {
        if (res.data.isok) {
          this.houseWorker = res.data.data;
        } else {
          this.$error(res);
        }
      });
    },
    //获取家政资格
    getQualification() {
      this.$axios({
        url: API.getQualification
      }).then(res => {
        if (res.data.isok) {
          this.houseQua = res.data.qualification;
        } else {
          this.$error(res);
        }
      });
    },
    //获取家政类型
    getType() {
      this.$axios({
        url: API.getHomeType
      }).then(res => {
        if (res.data.isok) {
          this.houseType = res.data.type;
        } else {
          this.$error(res);
        }
      });
    },
    //点击添加人员的按钮
    addWorkerBtn() {
      this.$store.dispatch("changeHH");
      this.$store.dispatch("waterAA2");
      this.workerData = {
        type: [],
        qualification: []
      };
    },
    //查看家政人员
    look(id) {
      this.$store.dispatch("changeHH");
      this.$store.dispatch("waterAA");
      this.workerData = {
        type: [],
        qualification: []
      };
      this.$axios({
        url: API.findHomeWorker,
        params: { id }
      }).then(res => {
        if (res.data.isok) {
          this.workerData = res.data.data[0];
          if (this.workerData.type.indexOf("[") != -1) {
            this.workerData.type = JSON.parse(this.workerData.type);
            this.workerData.qualification = JSON.parse(
              this.workerData.qualification
            );
          } else {
            this.workerData.type = this.workerData.type.split(",");
            this.workerData.qualification = this.workerData.qualification.split(",");
          }
        } else {
          this.$error(res);
        }
      });
    },
    //添加家政人员
    addHouseWorker(data) {
      this.$axios({
        url: API.addHomeWorker,
        params: data
      }).then(res => {
        if (res.data.isok) {
          this.$success(res);
          this.$store.dispatch("changeHH2");
          this.getComment(this.value);
        } else {
          this.$error(res);
        }
      });
    },
    //修改家政人员
    reviseHouseWorkers(data) {
      this.$axios({
        url: API.updateHomeWorker,
        params: data
      }).then(res => {
        if (res.data.isok) {
          this.$success(res);
          this.$store.dispatch("changeHH2");
          this.getComment(this.value);
        } else {
          this.$error(res);
        }
      });
    },
    //删除家政
    delCom(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delHomeWorker,
            method: "get",
            params: { id }
          }).then(res => {
            if (res.data.isok) {
              this.$success(res);
              this.getComment(this.value);
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

  img {
    width: 80%;
    height: 150px;
  }
}
</style>