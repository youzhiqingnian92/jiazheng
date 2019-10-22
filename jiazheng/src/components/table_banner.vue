<template>
  <div>
    <!-- 表格 -->
    <el-table :data="banner" class="table" style="width: 80%" height="300px" border>
      <el-table-column fixed type="index" label="序号" width="100px"></el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column v-if="arr.indexOf('des')!==-1" prop="des" label="描述">
        <template slot-scope="scope">{{scope.row.des}}</template>
      </el-table-column>
      <el-table-column v-if="arr.indexOf('type')!==-1" prop="type" label="类型">
        <template slot-scope="scope">{{scope.row.type}}</template>
      </el-table-column>
      <el-table-column v-if="arr.indexOf('num')!==-1" prop="num" label="报名人数">
        <template slot-scope="scope">{{scope.row.num}}</template>
      </el-table-column>
      <el-table-column v-if="arr.indexOf('teacherImg')!==-1" label="家教机构">
        <template slot-scope="scope">
          <img :src="scope.row.teacherImg" alt />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <v-delbtn :delId="scope.row.id" @del="del"></v-delbtn>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import API from "../common/js/api";

export default {
  props: ["banner", "arr"],
  methods: {
    del(id) {
      this.$emit("del", id);
    }
  },
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

img {
  width: 80%;
  height: 150px;
}
</style>