<template>
  <div class="common-layout">
    <el-container class="lay-container">
      <el-aside width="200px" class="aside">
        <el-menu
          router
          :default-active="activeMenu"
          :default-openeds="openedSubmenus"
          class="el-menu-vertical"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">

          <!-- <el-menu-item index="/">
            <el-icon><IconMenu /></el-icon>
            <span>数据管理</span>
          </el-menu-item> -->

          <el-sub-menu index="2">
            <template #title>
              <el-icon><Setting /></el-icon>
              <span>数据管理</span>
            </template>
            <el-menu-item index="/dataset">
              <el-icon><Setting /></el-icon>
              <span>数据集</span>
            </el-menu-item>
            <el-menu-item index="/demo">
              <el-icon><Setting /></el-icon>
              <span>数据源</span>
            </el-menu-item>
          </el-sub-menu>

        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="el-header">
          Header
        </el-header>
        <el-main class="right-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {
  Setting
} from '@element-plus/icons-vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// 计算当前激活的菜单项
const activeMenu = computed(() => {
  return route.path;
});

// 根据当前路径确定需要展开的子菜单
const openedSubmenus = computed(() => {
  const path = route.path;
  const submenus = [];
  
  // 如果路径包含 dataset，则展开数据管理菜单
  if (path.includes('/dataset')) {
    submenus.push('2');
  }
  
  return submenus;
});
</script>

<style scoped lang="less">
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100%;
}

.common-layout {
  height: 100vh;
  width: 100%;
}

.lay-container {
  height: 100%;
}

.el-header {
  background-color: #333;
  color: #fff;
  line-height: 60px;
}

.aside {
  background-color: #545c64;
  .el-menu {
    border-right: none;
  }
}

.el-menu-vertical {
  height: 100%;
}

.right-main {
  background-color: #f0f2f5;
}
</style>
