<template>
    <!-- 圆形进度条 -->
    <div class="circle-progress">
        <canvas class="canvas" ref="canvas"></canvas>
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
    watch:{
        // 监听progress这个属性的变化，当变化时重新进行绘制
        progress(){
            this.changeCanvas();
        }
    },
    mounted(){
        const canvas = this.$refs.canvas;
        // 设置画布大小
        canvas.width = 30;
        canvas.height = 30;

        //将获取的画布对象挂载到全局上
        this.context = canvas.getContext('2d');
        this.changeCanvas();
    },
    methods:{
        changeCanvas(){
            //每次绘制之前清除之前的
            this.context.clearRect(0,0,30,30);   

            // 绘制圆弧x
            this.context.save();
            this.context.beginPath();

            // 绘制大圆
            this.context.moveTo(15,15);
            this.context.arc(15,15,15,0,Math.PI*2,false);
            this.context.lineTo(15,15)

            // 绘制小圆
            this.context.moveTo(15,15);
            this.context.arc(15,15,12,0,Math.PI*2,false);
            this.context.lineTo(15,15)

            this.context.closePath()
            this.context.fillStyle = 'rgba(212,68,57,0.3)';
            this.context.fill('evenodd');
            this.context.restore();


            // 绘制进度条的圆弧
            this.context.save();
            this.context.beginPath();

            // 绘制大圆
            this.context.moveTo(15,15);
            this.context.arc(15,15,15,Math.PI/180*(-90),Math.PI/180*(-90)+Math.PI/180*360*this.progress,false);
            this.context.lineTo(15,15)

            // 绘制小圆
            this.context.moveTo(15,15);
            this.context.arc(15,15,12,Math.PI/180*(-90),Math.PI/180*(-90)+Math.PI/180*360*this.progress,false);
            this.context.lineTo(15,15)

            this.context.closePath()
            this.context.fillStyle = 'rgba(212,68,57,1)';
            this.context.fill('evenodd');
            this.context.restore();

        },
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
    font-size: 10px;
}

/* 不能在css中给画布设置大小，因为设置了大小是对画布进行了拉伸 */
.canvas{
    position: absolute;
    left: 0;
    top: 0;
}
</style>