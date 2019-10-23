<template>
  <div>
    <el-dialog title="添加banner" :visible.sync="$store.state.isAdd">
      <el-form :model="banner">
        <el-form-item class="font1" label="链接" :label-width="formLabelWidth">
          <el-input clearable v-model="banner.img" autocomplete="off" placeholder="请输入图片链接"></el-input>
        </el-form-item>
        <el-form-item
          v-if="arr.indexOf('des')!==-1"
          class="font1"
          label="描述"
          :label-width="formLabelWidth"
        >
          <el-input clearable v-model="banner.des" autocomplete="off" placeholder="描述"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="addBanner">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import API from "../common/js/api";
export default {
  props: ["arr", "houseBanner"],
  data() {
    return {
      formLabelWidth: "120px",
      banner: {}
    };
  },
  watch: {
    houseBanner() {
      this.banner = this.houseBanner;
    }
  },
  methods: {
    cancel() {
      this.$store.dispatch("changeAA2");
      this.banner = {};
    },
    addBanner() {
      this.$emit("addBanner", this.banner);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
</style>