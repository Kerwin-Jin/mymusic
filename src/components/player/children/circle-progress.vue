<template>
    <!-- 圆形进度条 -->
    <div class="circle-progress">
        <i class="iconfont" :class="{'icon-play':!value,'icon-icozanting':value}"></i>
    </div>
</template>

<script>
export default {
    props:{
        value:Boolean
    },
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>