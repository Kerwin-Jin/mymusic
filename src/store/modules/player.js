const playMode = {
    sequence:0,//顺序播放
    loop:1,//单曲循环
    random:2//随机播放
}
export default{
    state:{
        // 是否全屏播放
        fullScreen:false,
        //是否播放
        isPlaying:false,
        //播放歌曲列表
        playList:[],
        // 顺序歌曲列表
        sequencePlayList:[],

        // 播放模式
        mode:playMode.sequence,

        //当前播放的歌曲索引
        currentIndex:-1,

        //当前歌曲信息
        currentSont:{},
    },
    mutations:{

    },
    actions:{

    }
}