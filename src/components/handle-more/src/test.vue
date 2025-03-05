<!-- <script setup lang="ts">
import icon_add_outlined from '@/assets/svg/icon_add_outlined.svg';
import icon_deleteTrash_outlined from '@/assets/svg/icon_delete-trash_outlined.svg';
import icon_more_outlined from '@/assets/svg/icon_more_outlined.svg';
import { computed } from 'vue';
const props = defineProps<{
  iconName: string
}>()

const svgList = [
  {
    name: 'icon_add_outlined',
    icon: icon_add_outlined
  },
  {
    name: 'icon_more_outlined',
    icon: icon_more_outlined
  },
  {
    name: 'icon_deleteTrash_outlined',
    icon: icon_deleteTrash_outlined
  }
]

// 根据传入的iconName，去查找对应的svg文件
const iconName = computed(() => {
  const svg = svgList.find(ele => ele.name === props.iconName)
  return svg ? svg.icon : ''
})
</script>

<template>
  <el-image :src="iconName" />
</template> -->