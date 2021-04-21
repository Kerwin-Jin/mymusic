<!--底部小播放器-->
<template>
  <div class="player-container">
      <div class="img_wrapper">
          <img :src="currentSong.al.picUrl" :class="{play:isPlay}">
      </div>
      <div class="text">
        <div class="name">{{currentSong.name}}</div>
        <div class="desc">{{currentSong.ar}}</div>
      </div>
      
      <div class="control">
        <i class="iconfont" :class="{'icon-play':!isPlay,'icon-icozanting':isPlay}"></i>
      </div>
      <div class="control">
        <i class="iconfont icon-musiclist"></i>
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
};
</script>

<style scoped>
.player-container{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 5px 3px;
}
.img_wrapper{
  width: 40px;
  height: 40px;
  padding: 10px;
}
.img_wrapper img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  
}

.play{
  animation: rotate 10s linear infinite;
}
.text{
  flex: 1;
}
.text .name{
  margin-bottom: 2px;
  font-size: 14px;
  color: #333;
}
.text .desc{
  font-size: 12px;
  color: #999;
}
.control{
  flex: 0 0 30px;
  padding: 0 10px;
  color: #d44439;
}
.control .iconfont{
  font-size: 20px;
}

</style>