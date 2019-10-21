<template>
 <div class="right">
     <router-view></router-view>
 </div>
</template>
<script>
import API from '../common/js/api'
export default {
    components: {
        
    }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.right{
    flex 1
}
</style>