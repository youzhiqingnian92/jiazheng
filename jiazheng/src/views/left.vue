<template>
  <div class="left">
    <router-link
      v-if="isAdd==0"
      to="/index/manage"
      class="text-center color3"
      active-class="select"
    >管理员管理</router-link>
    <router-link
      v-if="isAdd==1"
      to="/index/banner"
      class="text-center color3"
      active-class="select"
    >banner管理</router-link>
    <router-link
      v-if="isAdd==1"
      to="/index/teacher"
      class="text-center color3"
      active-class="select"
    >家教管理</router-link>
    <router-link
      v-if="isAdd==1"
      to="/index/water"
      class="text-center color3"
      active-class="select"
    >水站管理</router-link>
    <router-link
      v-if="isAdd==1"
      to="/index/repair"
      class="text-center color3"
      active-class="select"
    >维修管理</router-link>
    <router-link
      v-if="isAdd==1"
      to="/index/housework"
      class="text-center color3"
      active-class="select"
    >家政管理</router-link>
    <router-link
      v-if="isAdd==1"
      to="/index/changepass"
      class="text-center color3"
      active-class="select"
    >修改密码</router-link>
  </div>
</template>
<script>
import API from "../common/js/api";
export default {
  data() {
    return {
      isAdd: sessionStorage.getItem("isAdmin")
    };
  }
};
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
    text-decoration: none;

    &:hover {
      color: $color2;
      background: $primary2;
      cursor: pointer;
    }
  }

  .select {
    color: $color2;
    background: $primary2;
  }
}
</style>