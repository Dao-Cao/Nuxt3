<template>
    <el-container class="bg-dark-purple h-screen p-3 pt-4">
        <el-aside class="w-72">
            <h1 class="origin-left text-2xl duration-300 mt-4 mb-4">
                <img class="mx-auto h-10 w-40" src="~/assets/image/custom-logo-login.svg" alt="Your Company" />
            </h1>
            <el-menu>
                <el-menu-item v-for="menu in Menus" :key="menu.id">
                    <template #title>
                        <el-icon size="2em" >
                            <component :is="menu.icon" />
                        </el-icon><nuxt-link :to="menu.to" class="pl-2 font-medium">{{ menu.title }}</nuxt-link>
                    </template>
                </el-menu-item>

            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <div class="toolbar">
                    <el-dropdown>
                        <el-icon style="margin-right: 8px; margin-top: 1px">
                            <setting />
                        </el-icon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>Info</el-dropdown-item>
                                <el-dropdown-item>Logout</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                    <span>Tom</span>
                </div>
            </el-header>
            <slot></slot>

        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
import { DataAnalysis, Document, Plus, Setting, User } from '@element-plus/icons-vue'

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
    title: "ランキング表",
    icon: DataAnalysis,
    to: "/import"
}, {
    id: 4,
    title: "採点結果加工",
    icon: Document,
    to: "/users"
}, {
    id: 5,
    title: "ログアウト",
    icon: Setting,
    to: "/logout"
}])

</script>
  
<style scoped>
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
  