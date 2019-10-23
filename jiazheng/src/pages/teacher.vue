<template>
  <div class="wrap">
    <el-tabs v-model="activeName">
      <el-tab-pane label="家教banner" name="first">
        <el-button class="btnAdd" type="primary" plain @click="isTea = true;teaData={}">添加</el-button>
        <v-table :banner="teaBanData" :arr="['des']" @del="delTea"></v-table>
        <!-- 弹框 -->
        <el-dialog title="添加家教banner" :visible.sync="isTea">
          <el-form :model="teaData">
            <el-form-item class="font1" label="链接" :label-width="formLabelWidth">
              <el-input clearable v-model="teaData.img" autocomplete="off" placeholder="请输入图片链接"></el-input>
            </el-form-item>
            <el-form-item class="font1" label="描述" :label-width="formLabelWidth">
              <el-input clearable v-model="teaData.des" autocomplete="off" placeholder="描述"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="isTea = false;teaData = { des: '', img: '' }">取 消</el-button>
            <el-button type="primary" @click="teaYes">确 定</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="家教类型" name="second">
        <el-button class="btnAdd" type="primary" plain @click="isType = true;typeData={}">添加</el-button>
        <v-table :banner="teacherType" :arr="['type']" @del="delType"></v-table>
        <!-- 弹框 -->
        <el-dialog title="添加家教类型" :visible.sync="isType">
          <el-form :model="typeData">
            <el-form-item class="font1" label="链接" :label-width="formLabelWidth">
              <el-input clearable v-model="typeData.img" autocomplete="off" placeholder="请输入图片链接"></el-input>
            </el-form-item>
            <el-form-item class="font1" label="类型" :label-width="formLabelWidth">
              <el-input clearable v-model="typeData.type" autocomplete="off" placeholder="类型"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="isType = false;typeData = { type: '', img: '' };">取 消</el-button>
            <el-button type="primary" @click="typeYes">确 定</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="家教排行" name="third">
        <el-button class="btnAdd" type="primary" plain @click="isTop = true;topData={}">添加</el-button>
        <v-table :banner="teacherTop" :arr="['num','teacherImg']" @del="delTop"></v-table>
        <!-- 弹框 -->
        <el-dialog title="添加家教排行" :visible.sync="isTop">
          <el-form :model="topData">
            <el-form-item class="font1" label="链接" :label-width="formLabelWidth">
              <el-input clearable v-model="topData.img" autocomplete="off" placeholder="请输入图片链接"></el-input>
            </el-form-item>
            <el-form-item class="font1" label="家教机构" :label-width="formLabelWidth">
              <el-input
                clearable
                v-model="topData.teacherImg"
                autocomplete="off"
                placeholder="请输入家教机构图片链接"
              ></el-input>
            </el-form-item>
            <el-form-item class="font1" label="报名人数" :label-width="formLabelWidth">
              <el-input
                clearable
                type="number"
                v-model="topData.num"
                autocomplete="off"
                placeholder="报名人数"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="isTop = false;topData={  num: '',  img: '',  teacherImg: '' }">取 消</el-button>
            <el-button type="primary" @click="topYes">确 定</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import API from "../common/js/api";
export default {
  data() {
    return {
      formLabelWidth: "120px",
      activeName: "first",
      teaBanData: [],
      teacherType: [],
      teacherTop: [],
      isTea: false,
      isType: false,
      isTop: false,
      teaData: {
        des: "",
        img: ""
      },
      typeData: {
        type: "",
        img: ""
      },
      topData: {
        num: "",
        img: "",
        teacherImg: ""
      }
    };
  },
  mounted() {
    this.infoTeacher();
    this.infotype();
    this.infotop();
  },
  methods: {
    //家教
    infoTeacher() {
      this.$axios({
        url: API.teacherBanner
      }).then(res => {
        if (res.data.isok) {
          this.teaBanData = res.data.data;
        } else {
          this.$message({
            type: "error",
            message: res.data.info
          });
        }
      });
    },
    //家教类型
    infotype() {
      this.$axios({
        url: API.teacherType
      }).then(res => {
        if (res.data.isok) {
          this.teacherType = res.data.data;
        } else {
          this.$message({
            type: "error",
            message: res.data.info
          });
        }
      });
    },
    //家教排行
    infotop() {
      this.$axios({
        url: API.teacherTop
      }).then(res => {
        if (res.data.isok) {
          this.teacherTop = res.data.data;
        } else {
          this.$message({
            type: "error",
            message: res.data.info
          });
        }
      });
    },
    //删除家教
    delTea(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delTeacherBanner,
            method: "get",
            params: { id }
          }).then(res => {
            if (res.data.isok) {
              this.$success(res);
              this.infoTeacher();
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
    //删除家教类型
    delType(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delTeacherType,
            method: "get",
            params: { id }
          }).then(res => {
            if (res.data.isok) {
              this.$success(res);
              this.infotype();
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
    //删除家教类型
    delTop(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$axios({
            url: API.delTeacherTop,
            method: "get",
            params: { id }
          }).then(res => {
            if (res.data.isok) {
              this.$success(res);
              this.infotop();
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
    //添加家教banner
    teaYes() {
      this.$axios({
        url: API.addTeacherBanner,
        params: this.teaData
      }).then(res => {
        if (res.data.isok) {
          this.$success(res);
          this.isTea = false;
          this.infoTeacher();
          this.teaData = { des: "", img: "" };
        } else {
          this.$error(res);
        }
      });
    },
    //添加家教类型
    typeYes() {
      this.$axios({
        url: API.addTeacherType,
        params: this.typeData
      }).then(res => {
        if (res.data.isok) {
          this.$success(res);
          this.isType = false;
          this.infotype();
          this.typeData = { des: "", img: "" };
        } else {
          this.$error(res);
        }
      });
    },
    topYes() {
      if (this.topData.num >= 0) {
        this.$axios({
          url: API.addTeacherTop,
          params: this.topData
        }).then(res => {
          if (res.data.isok) {
            this.$success(res);
            this.isTop = false;
            this.infotop();
            this.topData = { num: "", img: "", teacherImg: "" };
          } else {
            this.$error(res);
          }
        });
      }else{
        this.$message({
            type: "info",
            message: "人数不能小于0"
          });
      }
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