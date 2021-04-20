<template>
    <div>
        <h1>SongList</h1>
        <ul>
            <li v-for="(v,i) in data" :key="v.id">
                <p>{{i+1}}.{{v.name}}</p>
                <div></div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        data:Array
    }
}
</script>