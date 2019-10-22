<template>
  <div>
    <el-button class="btnAdd" type="primary" plain @click="add1">添加</el-button>
    <el-table :data="user" class="table" style="width: 80%" height="300px" border>
      <el-table-column fixed type="index" label="序号" width="100px"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="des" label="属性"></el-table-column>
      <el-table-column label="时间">
        <template slot-scope="scope">
          <span>{{scope.row.time | tranTime}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="look(scope.row.id)" type="success" plain>查看</el-button>
          <v-delbtn :delId="scope.row.id" @del="del"></v-delbtn>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="添加 | 修改管理员" :visible.sync="isAdd">
      <el-form :model="adduser">
        <el-form-item class="font1" label="账号" :label-width="formLabelWidth">
          <el-input
            clearable
            v-model="adduser.name"
            autocomplete="off"
            :disabled="id!=0"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="密码" :label-width="formLabelWidth">
          <el-input
            :disabled="id!=0"
            show-password
            clearable
            v-model="adduser.pass"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="id ==0" class="font1" label="确认密码" :label-width="formLabelWidth">
          <el-input show-password clearable v-model="config" autocomplete="off" placeholder="请确认密码"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="描述" :label-width="formLabelWidth">
          <el-input clearable v-model="adduser.des" autocomplete="off" placeholder="描述"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="时间" :label-width="formLabelWidth">
          <el-date-picker
            class="datebox"
            v-model="adduser.time"
            type="date"
            placeholder="选择日期"
            :label-width="formLabelWidth"
          ></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAdd = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if="id==0">确 定</el-button>
        <el-button type="success" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import API from "../common/js/api";
export default {
  data() {
    return {
      user: [],
      isAdd: false,
      adduser: {
        name: "",
        pass: "",
        des: "",
        time: ""
      },
      id: 0,
      config: "",
      formLabelWidth: "100px"
    };
  },
  mounted() {
    this.info();
  },
  watch: {
    isAdd() {
      if (this.isAdd == false) {
        this.addreset();
      }
    }
  },
  methods: {
    add1() {
      this.isAdd = true;
    },
    //请求数据
    info() {
      this.$axios({
        url: API.findManage,
        method: "post"
      }).then(res => {
        this.user = res.data.data;
      });
    },
    //成功提示
    // success(res) {
    //   this.$message({
    //     type: "success",
    //     message: res.data.info
    //   });
    // },
    //错误提示
    // error(res) {
    //   this.$message({
    //     type: "error",
    //     message: res.data.info
    //   });
    // },
    //重置内容
    addreset() {
      this.adduser = {
        name: "",
        pass: "",
        des: "",
        time: ""
      };
      this.config = "";
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
            url: API.delManage,
            method: "post",
            data: { id }
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
    //添加
    add() {
      this.adduser.time = new Date(this.adduser.time).getTime();
      this.isAdd = true;
      this.$axios({
        url: API.addManage,
        method: "post",
        data: this.adduser
      }).then(res => {
        if (res.data.isok) {
          this.isAdd = false;
          this.$success(res);
          this.info();
        } else {
          this.$error(res);
        }
      });
    },
    //查看
    look(id) {
      this.id = id;
      this.isAdd = true;
      this.$axios({
        url: API.findManage,
        method: "post",
        data: { id }
      }).then(res => {
        if (res.data.isok) {
          this.adduser = res.data.data[0];
          this.adduser.time = new Date(Number(this.adduser.time));
        }
      });
    },
    update() {
      this.adduser.time = new Date(this.adduser.time).getTime();
      this.$axios({
        url: API.updateManage,
        method: "post",
        data: this.adduser
      }).then(res => {
        if (res.data.isok) {
          this.$success(res);
          this.isAdd = false;
          this.info();
        } else {
          this.$error(res);
        }
      });
    }
  },
  filters: {
    tranTime(time) {
      var date = new Date(Number(time));
      var year = date.getFullYear();
      var month = (date.getMonth() + 1 + "").padStart(2, "0");
      var day = (date.getDate() + "").padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';



.datebox {
  width: 100%;
}
</style>