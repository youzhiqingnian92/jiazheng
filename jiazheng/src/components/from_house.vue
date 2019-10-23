<template>
  <div>
    <el-dialog title="添加家政人员" :visible.sync="$store.state.ishouseAdd">
      <el-form :model="workers">
        <el-form-item class="font1" label="姓名" :label-width="formLabelWidth">
          <el-input clearable v-model="workers.name" autocomplete="off" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="年龄" :label-width="formLabelWidth">
          <el-input clearable v-model="workers.age" autocomplete="off" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="电话" :label-width="formLabelWidth">
          <el-input clearable v-model="workers.tel" autocomplete="off" placeholder="eg:13812341234"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="资格认证" :label-width="formLabelWidth">
          <el-checkbox-group v-model="workers.qualification">
            <el-checkbox v-for="(item,index) in workerQua" :key="index" :label="item"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item class="font1" label="服务项目" :label-width="formLabelWidth">
          <el-checkbox-group v-model="workers.type">
            <el-checkbox v-for="(item,index) in workerType" :key="index" :label="item"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item class="font1" label="学历" :label-width="formLabelWidth">
          <el-select style="width: 100%" v-model="workers.edu" placeholder="请选择学历">
            <el-option label="小学" value="小学"></el-option>
            <el-option label="初中" value="初中"></el-option>
            <el-option label="高中" value="高中"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="研究生" value="研究生"></el-option>
            <el-option label="博士" value="博士"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="font1" label="工作年限" :label-width="formLabelWidth">
          <el-input
            type="number"
            clearable
            v-model="workers.year"
            autocomplete="off"
            placeholder="工作年限"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="级别" :label-width="formLabelWidth">
          <el-input clearable v-model="workers.vNum" autocomplete="off" placeholder="eg:v8"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="价格" :label-width="formLabelWidth">
          <el-input clearable v-model="workers.price" autocomplete="off" placeholder="eg:30/小时"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="城市" :label-width="formLabelWidth">
          <el-input clearable v-model="workers.city" autocomplete="off" placeholder="eg:保定"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="经验" :label-width="formLabelWidth">
          <el-input clearable v-model="workers.experience" autocomplete="off" placeholder="eg:3年"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="点赞数量" :label-width="formLabelWidth">
          <el-input
            type="number"
            clearable
            v-model="workers.likeNum"
            autocomplete="off"
            placeholder="点赞数量"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="关注人数" :label-width="formLabelWidth">
          <el-input
            type="number"
            clearable
            v-model="workers.readNum"
            autocomplete="off"
            placeholder="关注人数"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="距离" :label-width="formLabelWidth">
          <el-input clearable v-model="workers.len" autocomplete="off" placeholder="eg:4.2km"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="自我评价" :label-width="formLabelWidth">
          <el-input clearable v-model="workers.info" autocomplete="off" placeholder="eg:我最帅"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="免冠照片" :label-width="formLabelWidth">
          <el-input clearable v-model="workers.img" autocomplete="off" placeholder="请输入照片链接"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="addBanner" v-if="$store.state.iswaterAdd">确 定</el-button>
        <el-button type="success" @click="revise" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import API from "../common/js/api";
export default {
  props: ["banner", "workerType", "workerQua"],
  data() {
    return {
      formLabelWidth: "120px",
      workers: {
        type: [],
        qualification: []
      }
    };
  },
  watch: {
    banner() {
      this.workers = this.banner;
    },
  },
  methods: {
    cancel() {
      this.$store.dispatch("changeHH2");
    },
    addBanner() {
      this.$emit("addWorker", this.workers);
    },
    revise() {
      this.$emit("reviseWorkers", this.workers);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
</style>