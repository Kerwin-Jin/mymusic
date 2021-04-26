<template>
  <div>
    <player></player>
    <!-- <songList :data="songListData"></songList> -->
  </div>
</template>
<script>
import songList from './components/SongList'
import player from './components/player/Player'
import axios from 'axios'
export default {
  data(){
    return{
      songListData:[]
    }
  },
  methods:{
    // 获取歌曲列表
    async getSongList(){
      let url = 'http://localhost:3000/artists?id=7424';
      let {data:res} = await axios.get(url);

      // 对得到的数据进行过滤
      let newData = res.hotSongs.map(item=>{
        return {
          id:item.id,
          name:item.name,
          ar:item.ar.map(item=>item.name).join('/'),
          al:{
            name:item.al.name,
            picUrl:item.al.picUrl
          }
        }
      })

      this.songListData = newData
      console.log(this.songListData);
    }
  },
  created(){
    this.getSongList()
  },
  components:{
    songList,
    player
  }

}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
@keyframes rotate {
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>