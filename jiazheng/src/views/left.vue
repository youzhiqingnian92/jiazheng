<template>
  <div class="left">
    <router-link to="/index/manage" class="text-center color3" active-class="select">管理员管理</router-link>
  </div>
</template>
<script>
import API from "../common/js/api";
export default {};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

.left {
  width: 200px;
  background: $primary3;

  a {
    margin: 5px;
    font-size: 20px;
    display: block;
    height: 40px;
    line-height: 40px;
    transition: all 0.3s linear;
    text-decoration none
    &:hover {
      color: $color2;
      background: $primary2;
      cursor: pointer;
    }
  }
  .select{
      color: $color2;
      background: $primary2;
  }
}
</style>