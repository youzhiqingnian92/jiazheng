<template>
  <div>
    <el-dialog title="添加维修" :visible.sync="$store.state.isAdd">
      <el-form :model="repair">
        <el-form-item class="font1" label="名称" :label-width="formLabelWidth">
          <el-input clearable v-model="repair.name" autocomplete="off" placeholder="请输入维修名称"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="评分" :label-width="formLabelWidth">
          <el-input
            type="number"
            max="5"
            min="0"
            clearable
            v-model="repair.score"
            autocomplete="off"
            placeholder="0-5分之间"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="类型" :label-width="formLabelWidth">
          <el-input
            clearable
            v-model="repair.type"
            autocomplete="off"
            placeholder="维修类型"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="点赞数量" :label-width="formLabelWidth">
          <el-input
            type="number"
            clearable
            v-model="repair.likeNum"
            autocomplete="off"
            placeholder="点赞数量"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="关注人数" :label-width="formLabelWidth">
          <el-input
            type="number"
            clearable
            v-model="repair.readNum"
            autocomplete="off"
            placeholder="关注人数"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="商家地址" :label-width="formLabelWidth">
          <el-input clearable v-model="repair.address" autocomplete="off" placeholder="商家地址"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="距离" :label-width="formLabelWidth">
          <el-input clearable v-model="repair.len" autocomplete="off" placeholder="eg:4.2km"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="商家信息" :label-width="formLabelWidth">
          <el-input clearable v-model="repair.info" autocomplete="off" placeholder="商家信息"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="电话" :label-width="formLabelWidth">
          <el-input clearable v-model="repair.tel" autocomplete="off" placeholder="eg:400-100-1000"></el-input>
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
  props: ["banner"],
  data() {
    return {
      formLabelWidth: "120px",
      repair: {}
    };
  },
  watch: {
    banner() {
      this.repair = this.banner;
    }
  },
  methods: {
    cancel() {
      this.$store.dispatch("changeAA2");
      this.repair = {};
    },
    addBanner() {
      this.$emit("addBanner", this.repair);
    },
    revise() {
      this.$emit("reviseRepair", this.repair);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
</style>