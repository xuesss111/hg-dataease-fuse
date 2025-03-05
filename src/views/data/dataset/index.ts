import icon_deleteTrash_outlined from '@/assets/svg/icon_delete-trash_outlined.svg';
import icon_intoItem_outlined from '@/assets/svg/icon_into-item_outlined.svg';
import icon_rename_outlined from '@/assets/svg/icon_rename_outlined.svg';
import { computed, reactive } from 'vue';

export const state = reactive({
  datasetTree: [
    {
      id: '1094602662151852032',
      name: '未命名数据集22',
      leaf: true,
      weight: 9,
      extraFlag: 0,
      type: null,
      children: null,
      ext: null
    },
    {
      id: '1094597961507278848',
      name: '测试进度条数据集',
      leaf: false,
      weight: 9,
      extraFlag: 0,
      type: null,
      children: null,
      ext: null
    },
    {
      id: '1094583104296849408',
      name: '未命名数据集',
      leaf: true,
      weight: 9,
      extraFlag: 0,
      type: null,
      children: null,
      ext: null
    },
    {
      id: '985189269226262528',
      name: '【官方示例】',
      leaf: false,
      weight: 9,
      extraFlag: 0,
      type: null,
      children: [
        {
          id: '985189703189925888',
          name: '茶饮原料费用',
          leaf: true,
          weight: 9,
          extraFlag: 0,
          type: null,
          children: null,
          ext: null
        },
        {
          id: '985189053949415424',
          name: '茶饮订单明细',
          leaf: true,
          weight: 9,
          extraFlag: 0,
          type: null,
          children: null,
          ext: null
        }
      ],
      ext: null
    }
  ] as any[],
  curSortType: 'time_desc'
})

export const menuList = [
  {
    label: '移动到',
    svgName: icon_intoItem_outlined,
    command: 'move'
  },
  {
    label: '重命名',
    svgName: icon_rename_outlined,
    command: 'rename'
  },
  {
    label: '删除',
    divided: true,
    svgName: icon_deleteTrash_outlined,
    command: 'delete'
  }
]

export const sortList = [
  {
    name: '按时间升序',
    value: 'time_asc'
  },
  {
    name: '按时间降序',
    value: 'time_desc',
    divided: true
  },
  {
    name: '按名称升序',
    value: 'name_asc'
  },
  {
    name: '按名称降序',
    value: 'name_desc'
  }
]

export const datasetTypeList = computed(() => {
  return [
    {
      label: '新建数据集',
      command: 'dataset',
    },
    {
      label: '新建文件夹',
      divided: true,
      command: 'folder',
    }
  ]
})

export const exportPermission = (weight: number, ext: number) => {
  const result = [0, 0, 0]
  if (!weight || weight === 1) {
    return result
  } else if (weight === 9) {
    return [1, 1, 1]
  }
  if (!ext) {
    return result
  }
  const extArray = formatExt(ext) || []
  for (let index = 0; index < extArray.length; index++) {
    result[index] = extArray[index]
  }
  return result
}


export const formatExt = (num: number): number[] | null => {
  if (!num) {
    return null
  }
  const reversedStr = num.toString().split('').reverse().join('')
  const reversedNumArray = reversedStr?.split('')?.map(Number) ?? []
  return reversedNumArray
}

export const defaultTab = [
  {
    title: '数据预览',
    name: 'dataPreview'
  },
  {
    title: '结构预览',
    name: 'structPreview'
  }
]

export const timestampFormatDate = (timestamp: number, showMs?: boolean) => {
  if (!timestamp || timestamp === -1) {
    return '-'
  }

  const date = new Date(timestamp)

  const y = date.getFullYear()

  let MM = date.getMonth() + 1
  MM = (MM < 10 ? '0' + MM : MM) as number

  let d = date.getDate()
  d = (d < 10 ? '0' + d : d) as number

  let h = date.getHours()
  h = (h < 10 ? '0' + h : h) as number

  let m = date.getMinutes()
  m = (m < 10 ? '0' + m : m) as number

  let s = date.getSeconds()
  s = (s < 10 ? '0' + s : s) as number

  let format = y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s

  if (showMs === true) {
    const ms = date.getMilliseconds()
    format += ':' + ms
  }

  return format
}

export const res = {
  "id": "1094676452667953152",
  "name": "日期验证",
  "nodeType": "dataset",
  "createBy": "1",
  "createTime": 1741157670052,
  "creator": "管理员",
  "lastUpdateTime": 1741157724168,
  "updateBy": "1",
  "updater": "管理员",
  "datasourceDTOList": [
    {
      "id": "1094676267585900544",
      "pid": "0",
      "name": "日期测试",
      "description": null,
      "type": "Excel",
      "typeAlias": null,
      "catalog": null,
      "catalogDesc": null,
      "configuration": null,
      "apiConfigurationStr": null,
      "paramsStr": null,
      "createTime": 1741157625925,
      "updateTime": 1741157625925,
      "updateBy": 1,
      "createBy": "1",
      "creator": null,
      "status": null,
      "syncSetting": null,
      "editType": null,
      "nodeType": null,
      "action": null,
      "fileName": null,
      "size": null,
      "lastSyncTime": null,
      "qrtzInstance": null,
      "taskStatus": "WaitingForExecution",
      "enableDataFill": false,
      "dsVersion": -1
    }
  ]
}