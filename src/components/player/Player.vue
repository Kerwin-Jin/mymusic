<template>
  <div>
    <MiniPlayer></MiniPlayer>
    <!-- <NormalPlayer></NormalPlayer> -->
  </div>
</template>

<script>
import MiniPlayer from './mini-player.vue'
import NormalPlayer from './normal-player'
export default {
    components:{
        MiniPlayer,
        NormalPlayer
    }
}
</script>

<style>

</style>