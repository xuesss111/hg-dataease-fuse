<script lang="ts" setup>
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
// import icon_left_outlined from '@/assets/svg/icon_left_outlined.svg'
// import icon_right_outlined from '@/assets/svg/icon_right_outlined.svg'
// import { useAppStoreWithOut } from '@/store/modules/app'
// const appStore = useAppStoreWithOut()
defineProps({
  isInside: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['changeSideTreeStatus'])
const handleClick = (val: boolean) => {
  // appStore.setArrowSide(val)
  emits('changeSideTreeStatus', val)
}
</script>

<template>
    <!-- v-if="appStore.getArrowSide && !isInside" -->
  <div
    @click="handleClick(false)"
    v-if="!isInside"
    class="arrow-side-tree arrow-side-tree-left"
  >
      <el-icon><ArrowLeft /></el-icon>
      <!-- <Icon name="icon_left_outlined"><icon_left_outlined class="svg-icon" /></Icon> -->
  </div>
  <div
    @click="handleClick(true)"
    v-else-if="isInside"
    class="arrow-side-tree arrow-side-tree-right"
  >
  <el-icon><ArrowRight /></el-icon>
      <!-- <Icon name="icon_left_outlined"> <icon_left_outlined class="svg-icon" /></Icon> -->
  </div>
</template>

<style lang="less" scoped>
.arrow-side-tree-left {
  top: 44px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 10px 0px #1f23291a;
}

.arrow-side-tree-right {
  box-shadow: 0px 4px 8px 0px #0000001a;
  top: 44px;
  height: 24px;
  width: 20px;
  display: flex;
  align-items: center;
  padding-left: 2px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  &:hover {
    padding-left: 4px;
    width: 24px;
  }
}

.arrow-side-tree {
  position: absolute;
  border: 1px solid #dee0e3;
  background: #fff;
  cursor: pointer;
  z-index: 10;
  &:hover {
    .ed-icon {
      color: var(--ed-color-primary);
    }
  }
  .ed-icon {
    font-size: 12px;
  }
}
</style>
