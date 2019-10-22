<template>
 <div>
     <el-button type="danger"  plain @click="del(delId)">删除</el-button>
 </div>
</template>
<script>
import API from '../common/js/api'
export default {
    props: ["delId"],
    methods: {
        del(id){
            this.$emit("del",id)
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
</style>