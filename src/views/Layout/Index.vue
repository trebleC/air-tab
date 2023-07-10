<template>
    <div class="layout">
        <!-- <side-bar @navChang="onNavChange"></side-bar> -->
        <div class="content">
            <component :is="cpnTag" v-if="cpnTag"></component>
        </div>

    </div>
</template>
<script>
import { ref } from 'vue'
import SideBar from './SideBar.vue'
import PosterList from '@/views/Poster/PosterList'
export default {
    name:"Layout",
    components:{
        SideBar,
        PosterList
    },
    setup(){
        let cpnTag = ref('PosterList')
        const onNavChange = (key)=>{
            cpnTag.value = key
        }

        return {
            onNavChange,
            cpnTag
        }
    }
}
</script>
<style lang="less">
    .layout{
        width: 100vw;
        height: 100vh;
        background-color: #ececec;
        display: flex;
        .content{
            flex:1;
            overflow: auto;
        }
    }
</style>