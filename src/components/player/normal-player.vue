<!--全屏播放器-->
<template>
  <div class="normal-player-container">
    <div class="background">
      <img :src="currentSong.al.picUrl" alt="">
    </div>
    <div class="background layer"></div>
    <!-- 头部 -->
    <div class="top">
      <div class="back">
        <i class="iconfont "></i>
      </div>
      <h1 class="title">{{currentSong.name}}</h1>
      <h2 class="subtitle">{{currentSong.ar}}</h2>
    </div>
    <!-- 中间部分 -->
    <div class="middle">
      <div class="cd-wrapper">
        <img class="image play" :src="currentSong.al.picUrl" alt="">
      </div>
    </div>
    
    <!-- 底部 -->
    <div class="bottom">
      <div class="control">
        
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
  background: pink;
  z-index: 1000;
}
</style>