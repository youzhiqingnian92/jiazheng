<template>
  <div>
    <el-dialog title="添加水站" :visible.sync="$store.state.isAdd">
      <el-form :model="banner">
        <el-form-item class="font1" label="名称" :label-width="formLabelWidth">
          <el-input clearable v-model="banner.name" autocomplete="off" placeholder="请输入水站名称"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="评分" :label-width="formLabelWidth">
          <el-input
            type="number"
            max="5"
            min="0"
            clearable
            v-model="banner.score"
            autocomplete="off"
            placeholder="0-5分之间"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="月销售量" :label-width="formLabelWidth">
          <el-input
            type="number"
            clearable
            v-model="banner.count"
            autocomplete="off"
            placeholder="月销售量"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="点赞数量" :label-width="formLabelWidth">
          <el-input
            type="number"
            clearable
            v-model="banner.likeNum"
            autocomplete="off"
            placeholder="点赞数量"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="浏览量" :label-width="formLabelWidth">
          <el-input
            type="number"
            clearable
            v-model="banner.readNum"
            autocomplete="off"
            placeholder="浏览量"
          ></el-input>
        </el-form-item>
        <el-form-item class="font1" label="商家地址" :label-width="formLabelWidth">
          <el-input clearable v-model="banner.address" autocomplete="off" placeholder="商家地址"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="距离" :label-width="formLabelWidth">
          <el-input clearable v-model="banner.len" autocomplete="off" placeholder="eg:4.2km"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="商家信息" :label-width="formLabelWidth">
          <el-input clearable v-model="banner.des" autocomplete="off" placeholder="商家信息"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="电话" :label-width="formLabelWidth">
          <el-input clearable v-model="banner.tel" autocomplete="off" placeholder="eg:400-100-1000"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="价格" :label-width="formLabelWidth">
          <el-input clearable v-model="banner.price" autocomplete="off" placeholder="eg:50/桶"></el-input>
        </el-form-item>
        <el-form-item class="font1" label="图片" :label-width="formLabelWidth">
          <el-input clearable v-model="banner.img" autocomplete="off" placeholder="图片链接"></el-input>
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
    props: ['banner'],
  data() {
    return {
      formLabelWidth: "120px",
    };
  },

  methods: {
    cancel() {
      this.$store.dispatch("changeAA2");
      this.banner = {
      };
    },
    addBanner() {
      this.$emit("addBanner", this.banner);
      this.banner = {
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
      };
    },
    revise(){
        this.$emit("reviseWater",this.banner)
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
</style>