<template>
    <!-- 圆形进度条 -->
    <div class="circle-progress">
        <i class="iconfont" @click="changeAction" :class="{'icon-play':!value,'icon-icozanting':value}"></i>
    </div>
</template>

<script>
export default {
    props:{
        value:Boolean,
        progress:Number
    },
    data(){
        return{
            
        }
    },
    methods:{
        changeAction(){
            this.$emit('input',!this.value)
        } 
    }
    
}
</script>

<style scoped>
.circle-progress{
    position: relative;
    width: 100%;
    height: 100%;
}
.iconfont{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

</style>