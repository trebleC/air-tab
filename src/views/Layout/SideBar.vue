<template>
    <div class="side-bar">

        <div class="nav-box">
            <div class="logo">
                <img src="@/assets/logo.png" alt="">
            </div>
            <div v-for="(navItem, index) in navList" :class="{ 'nav-border': index!=navList.length-1 }">
                <div v-for="(nav, navIndex) in navItem" :key="'nav' + index + '_' + navIndex" @click="onNav(nav)"
                    :class="['nav', { active: nav.key == navKey }]">
                    <div >{{ nav.name }}</div>
                </div>
            </div>

        </div>
        <div class="version">
            <div class="name">AirTab</div>
            <div class="desc">v1.0</div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue'
import {getTab} from '@/api/home'
export default {
    name: 'SideBar',
    setup(props,ctx) {
        const navKey = ref('')
        const navList = ref([[
            {
                name: '待办',
                key: 'todo',
            },
        ],
        [
            {
                name: '登录',
                key: 'login',
            },
            {
                name: '设置',
                key: 'setting',
            },
            {
                name: '关于',
                key: 'about',
            },
        ]])
        const onNav = (nav) => {
            navKey.value = nav.key
            ctx.emit('navChang',nav.key)
        }

        getTab().then(res => {
            navList.value.unshift(res.data)
            onNav(navList.value[0][0])
        })

        return {
            navKey,
            navList,
            onNav
        }
    }
}
</script>
<style lang="less">
.side-bar {
    padding: 20px 0 60px 0;
    box-sizing: border-box;
    width: 90px;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .logo {

        display: flex;
        justify-content: center;

        img {
            width: 80px;
            display: inline-block;
        }
    }

    .nav-box {
        padding: 10px;
        box-sizing: border-box;

        .nav-border {
            border-bottom: 1px solid #ececec;
            margin-bottom: 10px;
        }

        .nav {
            width: 100%;
            padding: 14px 0;
            box-sizing: border-box;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            color: #333;
            margin: 10px 0;

            &:hover {
                color: #000;
                background-color: rgba(236, 236, 236, .3);
            }
        }

        .active {
            color: #3880ff;
            font-weight: bold;
            background-color: rgba(49, 113, 224, .08);

            &:hover {
                color: #3880ff;
                background-color: rgba(49, 113, 224, .08);
            }
        }
    }
    .version{
        text-align: center;
        .name{
            color: #3880ff;
            font-size: 14px;
        }
        .desc{
            color: #666;
            font-size: 12px;
        }

    }
}</style>