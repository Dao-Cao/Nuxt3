<template>
    <el-container class="bg-dark-purple h-screen p-3 pt-4">
        <el-aside class="w-62">
            <h1 class="origin-left text-2xl duration-300 mt-4 mb-4">
                <img class="mx-auto h-10 w-40" src="~/assets/image/custom-logo-login.svg" alt="Your Company" />
            </h1>
            <el-menu>
                <el-menu-item v-for="menu in Menus" :key="menu.id" :class="{ 'is-active': $route.fullPath == menu.to }">
                    <template #title>
                        <el-icon size="2em">
                            <component :is="menu.icon" />
                        </el-icon><nuxt-link :to="menu.to" class="pl-2 font-medium">{{ menu.title }}</nuxt-link>
                    </template>
                </el-menu-item>

            </el-menu>
        </el-aside>

        <el-container>
            <el-header class="flex text-right " style="align-items: center">
                <div class="font-bold text-lg">{{ title }}</div>
                <div style="flex-grow: 1;"></div>
                <div style="display: flex;">
                    <!-- <button style="width:44px"><img height="20" width="28" src="~/assets/image/ic_flag_en.svg"
                            alt="English"></button> -->
                    <!-- <el-dropdown class="pr-2">
                        <el-icon size="2em" @click="centerDialogVisible = true">
                            <Warning />
                        </el-icon>
                    </el-dropdown> -->
                    <span class="align-middle text-sm">SATT_李ログイン中</span>
                </div>
            </el-header>
            <slot></slot>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
const { $show, $hide } = useNuxtApp();
$show();
setTimeout(() => {
    $hide()
}, 2000);
import { DataAnalysis, Document, Plus, Setting, User, Warning } from '@element-plus/icons-vue'
const title = ref('')
const Menus = shallowReactive([{
    id: 1,
    title: "実技学科インポート",
    icon: Plus,
    to: "/import"
}, {
    id: 2,
    title: "ユーザー管理",
    icon: User,
    to: "/users"
}, {
    id: 3,
    title: "最終得点調整",
    icon: Document,
    to: "/process"
}, {
    id: 4,
    title: "ランキング表",
    icon: DataAnalysis,
    to: "/export"
}, {
    id: 5,
    title: "ログアウト",
    icon: Setting,
    to: "/logout"
}])

const route = useRoute();
watchEffect(() => {
    const temp = Menus.find(element => route.fullPath == element.to)
    title.value = temp?.title as string
})


</script>
  
<style scoped>
.el-menu {
    border: none;
}

aside {
    border-right: solid 1px var(--el-menu-border-color);
}

.layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
    border-right: none;
}

.layout-container-demo .el-main {
    padding: 0;
}

.layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
}
</style>
  