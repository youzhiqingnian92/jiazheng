<template>
 <div>
     <el-button class="btnAdd" type="primary" plain @click="add">添加</el-button>
 </div>
</template>
<script>
import API from '../common/js/api'
export default {
    methods: {
        add(){
            this.$store.dispatch("changeAA");
            this.$store.dispatch("waterAA2");
            this.$emit("addWater1")
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
</style>