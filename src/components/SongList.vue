<template>
    <div class="song-list-page">
        <h1>SongList</h1>
        <ul>
            <li v-for="(item,i) in data" :key="item.id" class="item" @click="songClickAction(item)">
                <p class="index">{{i+1}}</p>
                <div class="content">
                    <h3 class="name">{{item.name}}</h3>
                    <p class="info">
                       <span>{{item.ar}}</span>
                        <span>-</span>
                        <span>{{item.al.name}}</span> 
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        data:Array
    },
    methods:{
        songClickAction(item){
            console.log(JSON.stringify(item))
        }
    }
}
</script>
<style scoped>
.song-list-page{
    width: 100%;
    height: 100%;
    overflow: auto;
}
h1{
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: red;
    color: white;
    border-radius: 0 0 10px 10px;
}
.item{
    display: flex;
    align-items: center;
    padding: 10px;
}
.item .index{
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
}
.content{
    flex: 1;
    border-bottom: 1px solid #eee;
    padding: 10px;
}
.name{
    font-size:16px;
    font-weight: normal;
}
.info{
    font-size: 14px;
    color: #555;
}
</style>