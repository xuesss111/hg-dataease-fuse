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

export const fieldType = ['text', 'time', 'value', 'value', 'value', 'location', 'binary', 'url']
export const fieldTypeText = [
  '文本',
  '时间',
  '数值',
  '数值(小数)',
  '数值',
  '地理位置',
  '文件',
  'URL'
]

export const res = {
  "id": "1094695540052070400",
  "name": "汇总表测试数据集",
  "nodeType": "dataset",
  "createBy": "1",
  "createTime": 1741162220839,
  "creator": "管理员",
  "lastUpdateTime": 1741162752593,
  "updateBy": "1",
  "updater": "管理员",
  "datasourceDTOList": [
    {
      "id": "1094695447743827968",
      "pid": "0",
      "name": "汇总表测试数据",
      "description": null,
      "type": "Excel",
      "typeAlias": null,
      "catalog": null,
      "catalogDesc": null,
      "configuration": null,
      "apiConfigurationStr": null,
      "paramsStr": null,
      "createTime": 1741162198831,
      "updateTime": 1741162198831,
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

export const result = {
  "id": "1094695540052070400",
  "name": "汇总表测试数据集",
  "pid": "0",
  "level": 0,
  "nodeType": "dataset",
  "type": null,
  "mode": 0,
  "info": "[{\"currentDs\":{\"id\":\"7302963519987650560\",\"name\":null,\"tableName\":\"excel_明细表_5c7f9bd59d\",\"datasourceId\":\"1094695447743827968\",\"datasetGroupId\":null,\"type\":null,\"info\":\"{\\\"table\\\":\\\"excel_明细表_5c7f9bd59d\\\",\\\"sql\\\":\\\"\\\"}\",\"sqlVariableDetails\":null,\"fields\":null,\"lastUpdateTime\":0,\"status\":null},\"currentDsField\":null,\"currentDsFields\":[{\"id\":\"1741162182659\",\"datasourceId\":\"1094695447743827968\",\"datasetTableId\":\"7302963519987650560\",\"datasetGroupId\":null,\"chartId\":null,\"originName\":\"动物名字\",\"name\":\"动物名字\",\"dbFieldName\":null,\"description\":\"动物名字\",\"dataeaseName\":\"f_c8f616608981f38f\",\"groupType\":\"d\",\"type\":\"LONGTEXT\",\"precision\":null,\"scale\":null,\"deType\":0,\"deExtractType\":0,\"extField\":0,\"checked\":true,\"columnIndex\":null,\"lastSyncTime\":null,\"dateFormat\":null,\"dateFormatType\":null,\"fieldShortName\":\"f_c8f616608981f38f\",\"desensitized\":null,\"params\":null},{\"id\":\"1741162182660\",\"datasourceId\":\"1094695447743827968\",\"datasetTableId\":\"7302963519987650560\",\"datasetGroupId\":null,\"chartId\":null,\"originName\":\"动物性别\",\"name\":\"动物性别\",\"dbFieldName\":null,\"description\":\"动物性别\",\"dataeaseName\":\"f_75af9c39a64b03ef\",\"groupType\":\"d\",\"type\":\"LONGTEXT\",\"precision\":null,\"scale\":null,\"deType\":0,\"deExtractType\":0,\"extField\":0,\"checked\":true,\"columnIndex\":null,\"lastSyncTime\":null,\"dateFormat\":null,\"dateFormatType\":null,\"fieldShortName\":\"f_75af9c39a64b03ef\",\"desensitized\":null,\"params\":null},{\"id\":\"1741162182661\",\"datasourceId\":\"1094695447743827968\",\"datasetTableId\":\"7302963519987650560\",\"datasetGroupId\":null,\"chartId\":null,\"originName\":\"id\",\"name\":\"id\",\"dbFieldName\":null,\"description\":\"id\",\"dataeaseName\":\"f_0a1541124bfd6804\",\"groupType\":\"q\",\"type\":\"BIGINT\",\"precision\":null,\"scale\":null,\"deType\":2,\"deExtractType\":2,\"extField\":0,\"checked\":true,\"columnIndex\":null,\"lastSyncTime\":null,\"dateFormat\":null,\"dateFormatType\":null,\"fieldShortName\":\"f_0a1541124bfd6804\",\"desensitized\":null,\"params\":null},{\"id\":\"1741162182662\",\"datasourceId\":\"1094695447743827968\",\"datasetTableId\":\"7302963519987650560\",\"datasetGroupId\":null,\"chartId\":null,\"originName\":\"praise\",\"name\":\"praise\",\"dbFieldName\":null,\"description\":\"praise\",\"dataeaseName\":\"f_f13d0053b8f76ed2\",\"groupType\":\"q\",\"type\":\"BIGINT\",\"precision\":null,\"scale\":null,\"deType\":2,\"deExtractType\":2,\"extField\":0,\"checked\":true,\"columnIndex\":null,\"lastSyncTime\":null,\"dateFormat\":null,\"dateFormatType\":null,\"fieldShortName\":\"f_f13d0053b8f76ed2\",\"desensitized\":null,\"params\":null}],\"childrenDs\":[],\"unionToParent\":{\"unionType\":\"left\",\"unionFields\":[],\"parentDs\":null,\"currentDs\":null,\"parentSQLObj\":null,\"currentSQLObj\":null},\"allChildCount\":0}]",
  "createBy": "1",
  "createTime": 1741162220839,
  "qrtzInstance": null,
  "syncStatus": null,
  "updateBy": "1",
  "lastUpdateTime": 1741162752593,
  "unionSql": null,
  "union": [
    {
      "currentDs": {
        "id": "7302963519987650560",
        "name": null,
        "tableName": "excel_明细表_5c7f9bd59d",
        "datasourceId": "1094695447743827968",
        "datasetGroupId": null,
        "type": null,
        "info": "{\"table\":\"excel_明细表_5c7f9bd59d\",\"sql\":\"\"}",
        "sqlVariableDetails": null,
        "fields": null,
        "lastUpdateTime": 0,
        "status": null
      },
      "currentDsField": null,
      "currentDsFields": [
        {
          "id": "1741162182659",
          "datasourceId": "1094695447743827968",
          "datasetTableId": "7302963519987650560",
          "datasetGroupId": null,
          "chartId": null,
          "originName": "动物名字",
          "name": "动物名字",
          "dbFieldName": null,
          "description": "动物名字",
          "dataeaseName": "f_c8f616608981f38f",
          "groupType": "d",
          "type": "LONGTEXT",
          "precision": null,
          "scale": null,
          "deType": 0,
          "deExtractType": 0,
          "extField": 0,
          "checked": true,
          "columnIndex": null,
          "lastSyncTime": null,
          "dateFormat": null,
          "dateFormatType": null,
          "fieldShortName": "f_c8f616608981f38f",
          "desensitized": null,
          "params": null
        },
        {
          "id": "1741162182660",
          "datasourceId": "1094695447743827968",
          "datasetTableId": "7302963519987650560",
          "datasetGroupId": null,
          "chartId": null,
          "originName": "动物性别",
          "name": "动物性别",
          "dbFieldName": null,
          "description": "动物性别",
          "dataeaseName": "f_75af9c39a64b03ef",
          "groupType": "d",
          "type": "LONGTEXT",
          "precision": null,
          "scale": null,
          "deType": 0,
          "deExtractType": 0,
          "extField": 0,
          "checked": true,
          "columnIndex": null,
          "lastSyncTime": null,
          "dateFormat": null,
          "dateFormatType": null,
          "fieldShortName": "f_75af9c39a64b03ef",
          "desensitized": null,
          "params": null
        },
        {
          "id": "1741162182661",
          "datasourceId": "1094695447743827968",
          "datasetTableId": "7302963519987650560",
          "datasetGroupId": null,
          "chartId": null,
          "originName": "id",
          "name": "id",
          "dbFieldName": null,
          "description": "id",
          "dataeaseName": "f_0a1541124bfd6804",
          "groupType": "q",
          "type": "BIGINT",
          "precision": null,
          "scale": null,
          "deType": 2,
          "deExtractType": 2,
          "extField": 0,
          "checked": true,
          "columnIndex": null,
          "lastSyncTime": null,
          "dateFormat": null,
          "dateFormatType": null,
          "fieldShortName": "f_0a1541124bfd6804",
          "desensitized": null,
          "params": null
        },
        {
          "id": "1741162182662",
          "datasourceId": "1094695447743827968",
          "datasetTableId": "7302963519987650560",
          "datasetGroupId": null,
          "chartId": null,
          "originName": "praise",
          "name": "praise",
          "dbFieldName": null,
          "description": "praise",
          "dataeaseName": "f_f13d0053b8f76ed2",
          "groupType": "q",
          "type": "BIGINT",
          "precision": null,
          "scale": null,
          "deType": 2,
          "deExtractType": 2,
          "extField": 0,
          "checked": true,
          "columnIndex": null,
          "lastSyncTime": null,
          "dateFormat": null,
          "dateFormatType": null,
          "fieldShortName": "f_f13d0053b8f76ed2",
          "desensitized": null,
          "params": null
        }
      ],
      "childrenDs": [],
      "unionToParent": {
        "unionType": "left",
        "unionFields": [],
        "parentDs": null,
        "currentDs": null,
        "parentSQLObj": null,
        "currentSQLObj": null
      },
      "allChildCount": 0
    }
  ],
  "sortFields": null,
  "data": {
    "fields": [
      {
        "id": "1741162182659",
        "datasourceId": "1094695447743827968",
        "datasetTableId": "7302963519987650560",
        "datasetGroupId": "1094695540052070400",
        "chartId": null,
        "originName": "动物名字",
        "name": "动物名字",
        "dbFieldName": null,
        "description": "动物名字",
        "dataeaseName": "f_c8f616608981f38f",
        "groupType": "d",
        "type": "LONGTEXT",
        "precision": null,
        "scale": null,
        "deType": 0,
        "deExtractType": 0,
        "extField": 0,
        "checked": true,
        "columnIndex": null,
        "lastSyncTime": null,
        "dateFormat": null,
        "dateFormatType": null,
        "fieldShortName": "f_c8f616608981f38f",
        "desensitized": null,
        "params": null
      },
      {
        "id": "1741162182660",
        "datasourceId": "1094695447743827968",
        "datasetTableId": "7302963519987650560",
        "datasetGroupId": "1094695540052070400",
        "chartId": null,
        "originName": "动物性别",
        "name": "动物性别",
        "dbFieldName": null,
        "description": "动物性别",
        "dataeaseName": "f_75af9c39a64b03ef",
        "groupType": "d",
        "type": "LONGTEXT",
        "precision": null,
        "scale": null,
        "deType": 0,
        "deExtractType": 0,
        "extField": 0,
        "checked": true,
        "columnIndex": null,
        "lastSyncTime": null,
        "dateFormat": null,
        "dateFormatType": null,
        "fieldShortName": "f_75af9c39a64b03ef",
        "desensitized": null,
        "params": null
      },
      {
        "id": "1741162182661",
        "datasourceId": "1094695447743827968",
        "datasetTableId": "7302963519987650560",
        "datasetGroupId": "1094695540052070400",
        "chartId": null,
        "originName": "id",
        "name": "id",
        "dbFieldName": null,
        "description": "id",
        "dataeaseName": "f_0a1541124bfd6804",
        "groupType": "q",
        "type": "BIGINT",
        "precision": null,
        "scale": null,
        "deType": 2,
        "deExtractType": 2,
        "extField": 0,
        "checked": true,
        "columnIndex": null,
        "lastSyncTime": null,
        "dateFormat": null,
        "dateFormatType": null,
        "fieldShortName": "f_0a1541124bfd6804",
        "desensitized": null,
        "params": null
      },
      {
        "id": "1741162182662",
        "datasourceId": "1094695447743827968",
        "datasetTableId": "7302963519987650560",
        "datasetGroupId": "1094695540052070400",
        "chartId": null,
        "originName": "praise",
        "name": "praise",
        "dbFieldName": null,
        "description": "praise",
        "dataeaseName": "f_f13d0053b8f76ed2",
        "groupType": "q",
        "type": "BIGINT",
        "precision": null,
        "scale": null,
        "deType": 2,
        "deExtractType": 2,
        "extField": 0,
        "checked": true,
        "columnIndex": null,
        "lastSyncTime": null,
        "dateFormat": null,
        "dateFormatType": null,
        "fieldShortName": "f_f13d0053b8f76ed2",
        "desensitized": null,
        "params": null
      }
    ],
    "data": [
      {
        "f_c8f616608981f38f": "猫咪",
        "f_75af9c39a64b03ef": "公",
        "f_0a1541124bfd6804": "1",
        "f_f13d0053b8f76ed2": "1"
      },
      {
        "f_c8f616608981f38f": "柴犬",
        "f_75af9c39a64b03ef": "公",
        "f_0a1541124bfd6804": "2",
        "f_f13d0053b8f76ed2": "2"
      },
      {
        "f_c8f616608981f38f": "呆狗哈士奇",
        "f_75af9c39a64b03ef": "公",
        "f_0a1541124bfd6804": "3",
        "f_f13d0053b8f76ed2": "0"
      },
      {
        "f_c8f616608981f38f": "胖胖蓝猫",
        "f_75af9c39a64b03ef": "母",
        "f_0a1541124bfd6804": "4",
        "f_f13d0053b8f76ed2": "0"
      },
      {
        "f_c8f616608981f38f": "西伯利亚猫",
        "f_75af9c39a64b03ef": "母",
        "f_0a1541124bfd6804": "22",
        "f_f13d0053b8f76ed2": "3"
      },
      {
        "f_c8f616608981f38f": "阿拉斯加雪橇犬",
        "f_75af9c39a64b03ef": "公",
        "f_0a1541124bfd6804": "23",
        "f_f13d0053b8f76ed2": "12"
      },
      {
        "f_c8f616608981f38f": "挪威森林猫",
        "f_75af9c39a64b03ef": "母",
        "f_0a1541124bfd6804": "24",
        "f_f13d0053b8f76ed2": "0"
      },
      {
        "f_c8f616608981f38f": "猫咪",
        "f_75af9c39a64b03ef": "公",
        "f_0a1541124bfd6804": "25",
        "f_f13d0053b8f76ed2": "1"
      },
      {
        "f_c8f616608981f38f": "柴犬",
        "f_75af9c39a64b03ef": "公",
        "f_0a1541124bfd6804": "26",
        "f_f13d0053b8f76ed2": "2"
      },
      {
        "f_c8f616608981f38f": "猫咪",
        "f_75af9c39a64b03ef": "公",
        "f_0a1541124bfd6804": "27",
        "f_f13d0053b8f76ed2": "1"
      },
      {
        "f_c8f616608981f38f": "猫咪",
        "f_75af9c39a64b03ef": "公",
        "f_0a1541124bfd6804": "28",
        "f_f13d0053b8f76ed2": "1"
      },
      {
        "f_c8f616608981f38f": "猫咪",
        "f_75af9c39a64b03ef": "公",
        "f_0a1541124bfd6804": "29",
        "f_f13d0053b8f76ed2": "1"
      },
      {
        "f_c8f616608981f38f": "猫咪",
        "f_75af9c39a64b03ef": "公",
        "f_0a1541124bfd6804": "30",
        "f_f13d0053b8f76ed2": "1"
      },
      {
        "f_c8f616608981f38f": "西伯利亚猫",
        "f_75af9c39a64b03ef": "母",
        "f_0a1541124bfd6804": "31",
        "f_f13d0053b8f76ed2": "3"
      },
      {
        "f_c8f616608981f38f": "西伯利亚猫",
        "f_75af9c39a64b03ef": "母",
        "f_0a1541124bfd6804": "32",
        "f_f13d0053b8f76ed2": "3"
      },
      {
        "f_c8f616608981f38f": "西伯利亚猫",
        "f_75af9c39a64b03ef": "母",
        "f_0a1541124bfd6804": "33",
        "f_f13d0053b8f76ed2": "3"
      }
    ]
  },
  "allFields": [
    {
      "id": "1741162182659",
      "datasourceId": "1094695447743827968",
      "datasetTableId": "7302963519987650560",
      "datasetGroupId": "1094695540052070400",
      "chartId": null,
      "originName": "动物名字",
      "name": "动物名字",
      "dbFieldName": null,
      "description": "动物名字",
      "dataeaseName": "f_c8f616608981f38f",
      "groupType": "d",
      "type": "LONGTEXT",
      "precision": null,
      "scale": null,
      "deType": 0,
      "deExtractType": 0,
      "extField": 0,
      "checked": true,
      "columnIndex": null,
      "lastSyncTime": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldShortName": "f_c8f616608981f38f",
      "desensitized": null,
      "params": null
    },
    {
      "id": "1741162182660",
      "datasourceId": "1094695447743827968",
      "datasetTableId": "7302963519987650560",
      "datasetGroupId": "1094695540052070400",
      "chartId": null,
      "originName": "动物性别",
      "name": "动物性别",
      "dbFieldName": null,
      "description": "动物性别",
      "dataeaseName": "f_75af9c39a64b03ef",
      "groupType": "d",
      "type": "LONGTEXT",
      "precision": null,
      "scale": null,
      "deType": 0,
      "deExtractType": 0,
      "extField": 0,
      "checked": true,
      "columnIndex": null,
      "lastSyncTime": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldShortName": "f_75af9c39a64b03ef",
      "desensitized": null,
      "params": null
    },
    {
      "id": "1741162182661",
      "datasourceId": "1094695447743827968",
      "datasetTableId": "7302963519987650560",
      "datasetGroupId": "1094695540052070400",
      "chartId": null,
      "originName": "id",
      "name": "id",
      "dbFieldName": null,
      "description": "id",
      "dataeaseName": "f_0a1541124bfd6804",
      "groupType": "q",
      "type": "BIGINT",
      "precision": null,
      "scale": null,
      "deType": 2,
      "deExtractType": 2,
      "extField": 0,
      "checked": true,
      "columnIndex": null,
      "lastSyncTime": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldShortName": "f_0a1541124bfd6804",
      "desensitized": null,
      "params": null
    },
    {
      "id": "1741162182662",
      "datasourceId": "1094695447743827968",
      "datasetTableId": "7302963519987650560",
      "datasetGroupId": "1094695540052070400",
      "chartId": null,
      "originName": "praise",
      "name": "praise",
      "dbFieldName": null,
      "description": "praise",
      "dataeaseName": "f_f13d0053b8f76ed2",
      "groupType": "q",
      "type": "BIGINT",
      "precision": null,
      "scale": null,
      "deType": 2,
      "deExtractType": 2,
      "extField": 0,
      "checked": true,
      "columnIndex": null,
      "lastSyncTime": null,
      "dateFormat": null,
      "dateFormatType": null,
      "fieldShortName": "f_f13d0053b8f76ed2",
      "desensitized": null,
      "params": null
    }
  ],
  "sql": "VTBWTVJVTlVJR0IwWDJGZk1HQXVZR1pmWXpobU5qRTJOakE0T1RneFpqTTRabUFnUVZNZ1lHWmZZWGhmTUdBc0lHQjBYMkZmTUdBdVlHWmZOelZoWmpsak16bGhOalJpTURObFptQWdRVk1nWUdaZllYaGZNV0FzSUVOQlUxUW9ZSFJmWVY4d1lDNWdabDh3WVRFMU5ERXhNalJpWm1RMk9EQTBZQ0JCVXlCRVJVTkpUVUZNS0RFNUxDQXdLU2tnUVZNZ1lHWmZZWGhmTW1Bc0lFTkJVMVFvWUhSZllWOHdZQzVnWmw5bU1UTmtNREExTTJJNFpqYzJaV1F5WUNCQlV5QkVSVU5KVFVGTUtERTVMQ0F3S1NrZ1FWTWdZR1pmWVhoZk0yQWdSbEpQVFNBb1UwVk1SVU5VSUhSZllWOHdMbURsaXFqbmlhbmxrSTNsclpkZ0lFRlRJR0JtWDJNNFpqWXhOall3T0RrNE1XWXpPR1pnTEhSZllWOHdMbURsaXFqbmlhbm1nS2ZsaUt0Z0lFRlRJR0JtWHpjMVlXWTVZek01WVRZMFlqQXpaV1pnTEhSZllWOHdMbUJwWkdBZ1FWTWdZR1pmTUdFeE5UUXhNVEkwWW1aa05qZ3dOR0FzZEY5aFh6QXVZSEJ5WVdselpXQWdRVk1nWUdaZlpqRXpaREF3TlROaU9HWTNObVZrTW1BZ1JsSlBUU0JnWlhoalpXeGY1cGlPNTd1RzZLR29YelZqTjJZNVltUTFPV1JnSUhSZllWOHdLU0JCVXlCZ2RGOWhYekJnSUV4SlRVbFVJREV3TUNCUFJrWlRSVlFnTUE9PQ==",
  "total": null,
  "creator": "管理员",
  "updater": "管理员"
}