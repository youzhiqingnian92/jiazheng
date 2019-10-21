<template>
 <div class="header">
     
      <el-button class="btn" type="danger" plain round>退出登录</el-button>
      <h2 class="color2">admin</h2>
 </div>
</template>
<script>
import API from '../common/js/api'
export default {
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.header{
    height 100px
    background $primary1
    overflow hidden
    line-height 100px
    h2{
        float right
        font-size 30px
        margin-right 50px
    }
    .btn{
        float right
        margin-top 30px
        margin-right 50px
    }
}
</style>