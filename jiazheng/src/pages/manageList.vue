<template>
  <div>
    <el-button class="btnAdd" type="primary" plain @click="isAdd = true">添加</el-button>
    <el-table :data="user" class="table" style="width: 80%" height="300px" border>
      <el-table-column fixed type="index" label="序号" width="100px"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="des" label="属性"></el-table-column>
      <el-table-column prop="time" label="时间"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="success" size="small" plain>查看</el-button>
          <el-button type="danger" size="small" plain @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加 | 修改管理员" :visible.sync="isAdd">
      <el-form :model="form">
        <el-form-item class="font1" label="账号" :label-width="formLabelWidth">
          <el-input clearable v-model="form.name" autocomplete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="密码" :label-width="formLabelWidth">
          <el-input
            show-password
            clearable
            v-model="form.name"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="确认密码" :label-width="formLabelWidth">
          <el-input
            show-password
            clearable
            v-model="form.name"
            autocomplete="off"
            placeholder="请确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="描述" :label-width="formLabelWidth">
          <el-input clearable v-model="form.name" autocomplete="off" placeholder="描述"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="时间" :label-width="formLabelWidth">
          <el-date-picker v-model="value1" type="date" placeholder="选择日期" :label-width="formLabelWidth"></el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAdd = false">取 消</el-button>
        <el-button type="primary" @click="isAdd = false">确 定</el-button>
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
      form: {
        name: ""
      },
      formLabelWidth: "100px"
    };
  },
  mounted() {
    this.info();
  },
  methods: {
    info() {
      this.$axios({
        url: API.findManage,
        method: "post"
      }).then(res => {
        this.user = res.data.data;
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
            url: API.delManage,
            method: "post",
            data: { id }
          }).then(res => {
            if (res.data.isok) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.info();
            } else {
              this.$message({
                type: "error",
                message: res.data.info
              });
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

.btnAdd {
  margin-left: 20px;
}

.font1>>>.el-form-item__label {
  font-size: 20px;
  text-align: center;
}

div>>>.el-dialog__body {
  padding: 20px 50px;
}

div>>>.el-dialog__title {
  color: $color1;
  font-size: 30px;
}

.cell {
  button {
    width: 80px;
    font-size: 20px;
  }
}
</style>