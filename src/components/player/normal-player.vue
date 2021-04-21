<!--全屏播放器-->
<template>
  <div class="normal-player-container">
    <div class="background">
      <img :src="currentSong.al.picUrl" alt="">
    </div>
    <div class="background-layer"></div>
    <!-- 头部 -->
    <div class="top">
      <div class="back-name">
        <i class="iconfont icon-jiantou"></i>
        <h1 class="title">{{currentSong.name}}</h1>
      </div>
      <div class="singer">
        <h2 class="subtitle">{{currentSong.ar}}</h2>
      </div>
    </div>
    <!-- 中间部分 -->
    <div class="middle">
      <div class="cd-wrapper">
        <img class="image" :src="currentSong.al.picUrl">
      </div>
    </div>
    
    <!-- 底部 -->
    <div class="bottom">
      <div class="control">
        <div class="left">
          <i class="iconfont icon-xunhuan"></i>
        </div>
        <div class="center">
          <i  class="iconfont icon-shangyishou"></i>
          <i  class="iconfont icon-play"></i>
          <i  class="iconfont icon-next-music"></i>
        </div>
        <div class="right">
          <i class="iconfont icon-musiclist"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlay:false,
      currentSong: {
        id: 1812673579,
        name: "等你归来",
        ar: "程响",
        al: {
          name: "等你归来",
          picUrl:
            "https://p1.music.126.net/bisOFZHy6WuBBfaHtr238Q==/109951165674729204.jpg",
        },
      },
    };
  },
}
</script>

<style scoped>
.normal-player-container{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #eee;
  z-index: 1000;
}
.background{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.6;
  filter: blur(20px);
  overflow: hidden;
}
.top{
  margin:10px 0;
}
.back-name{
  position: relative;
  width: 100%;
  height: 30px;
}
.icon-jiantou{
  position: absolute;
  left: 10px;
  top: 0;
  width: 30px;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
}
.title{
  flex: 1;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  line-height: 30px;
  font-weight: bold;
}
.subtitle{
  font-size: 14px;
  color: #333;
  text-align: center;
}

/* middle */
.middle{
  width: 80%;
  height: 80vw;
  margin: 10px auto;
  box-sizing: border-box;
}
.cd-wrapper{
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
}
.image{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border:10px solid #eee;
  box-sizing: border-box;
  border-radius:50%;
  animation: rotate 3s linear infinite;
}

/* bottom */
.bottom{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-bottom: 20px;
}
.control{
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  color: #2e3030;
}
.control div{
  flex: 1;
  text-align: center;
}
.center{
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.control i{
  font-size: 30px;
}
</style>