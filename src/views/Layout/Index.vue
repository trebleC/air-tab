<template>
    <div class="layout">
        <side-bar></side-bar>
    </div>
</template>
<script>
import SideBar from './SideBar.vue'
export default {
    name:"Layout",
    components:{
        SideBar
    }
}
</script>
<style lang="less">
    .layout{
        width: 100vw;
        height: 100vh;
        background-color: #ececec;
    }
</style>