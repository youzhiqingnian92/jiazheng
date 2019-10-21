<template>
 <div>
     <h1 class="text-center color4">{{$route.name}}</h1>
     <router-view></router-view>
 </div>
</template>
<script>
import API from '../common/js/api'
export default {
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
</style>