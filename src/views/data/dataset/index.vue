<script setup lang="tsx">
import ArrowSide from '@/views/common/DeResourceArrow.vue'
import { computed, reactive, ref, shallowRef } from 'vue'
// import { useAppStoreWithOut } from '@/store/modules/app'
// @ts-ignore
import { DocumentAdd, Download, Edit, FolderOpened, HelpFilled, Histogram, MoreFilled, Plus, Search, TrendCharts } from '@element-plus/icons-vue'
// import { ElMessage } from 'element-plus'
// import { debounce } from 'lodash-es'
import nothingSelect from '@/assets/img/nothing-select.png'
import { cloneDeep } from 'lodash-es'
import { defaultTab, exportPermission, fieldTypeText, res, result, state, timestampFormatDate } from './index'

const defaultNode = {
  name: '',
  createBy: '',
  creator: '',
  id: '',
  nodeType: '',
  createTime: 0,
  weight: 0
}
const nodeInfo = reactive<any>(cloneDeep(defaultNode))
const isIframe = ref(false)
const dtLoading = ref(false)
const nickName = ref('')
const datasetListTree = ref()
const width = ref(279)
const isDataEaseBi = ref(false)
const mounted = ref(false)
const rootManage = ref(false)
const exportPermissions = computed(() => exportPermission(nodeInfo.weight, nodeInfo.ext))
const activeName = ref('dataPreview')
const total = ref(0)
const columns = shallowRef([])
const tableData = shallowRef([])
const dataPreviewLoading = ref(false)

const defaultProps = {
  children: 'children',
  label: 'name'
}

const infoList = computed(() => {
  return {
    creator: nodeInfo.creator,
    createTime: nodeInfo.createTime && timestampFormatDate(nodeInfo.createTime)
  }
})

const createPanel = (type: string) => {
  console.log(type, 'type')
}

const exportDataset = () => {
  console.log('导出数据集')
}

const editorDataset = () => {
  console.log('编辑数据集')
}

let columnsPreview = [] as any[]
let dataPreview = [] as any[]
let allFields = [] as any[]
const datasetTableFiled = ref([])

const handleClick = (tabName: any) => {
  console.log(tabName, 'tabName')
  switch (tabName) {
    case 'dataPreview':
      if (columnsPreview.length) {
        columns.value = columnsPreview
        tableData.value = dataPreview
        break
      }
      // dataPreviewLoading.value = true
      // total.value = null
      // getDatasetPreview(nodeInfo.id)
      //   .then(res => {
          allFields = (result?.allFields as unknown as any[]) || []
          datasetTableFiled.value = allFields
          columnsPreview = generateColumns((result?.data?.fields as any[]) || [])
          dataPreview = (result?.data?.data as Array<{}>) || []
          columns.value = columnsPreview
          tableData.value = result?.data?.data
        // })
        // .finally(() => {
        //   dataPreviewLoading.value = false
        // })
      // getDatasetTotal(nodeInfo.id).then(res => {
      //   total.value = res
      // })
      break
    case 'structPreview':
      columns.value = allFieldsColumns
      tableData.value = allFields
      break
    case 'row':
      break
    case 'column':
      break
    default:
      break
  }
}


const generateColumns = (arr: any[]) =>
  arr.map(ele => ({
    key: ele.dataeaseName,
    deType: ele.deType,
    dataKey: ele.dataeaseName,
    title: ele.name,
    width: 150,
  }))

const allFieldsColumns = [
  {
    key: 'name',
    dataKey: 'name',
    title: '字段名称',
    width: 250
  },
  {
    key: 'deType',
    dataKey: 'deType',
    title: '字段类型',
    width: 250,
    cellRenderer: ({ cellData: deType }: any) => (
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        {fieldTypeText[deType]}
      </div>
    )
  },
  {
    key: 'description',
    dataKey: 'description',
    title:'字段备注',
    width: 250
  }
]

const tablePanes = ref([])
const tablePaneList = computed(() => {
  return nodeInfo.weight >= 7 ? [...defaultTab, ...tablePanes.value] : [...defaultTab]
})

const rowClick = (_: any, __: any, event: any) => {
  const element = event.target.parentNode.parentNode
  if ([...element.classList].includes('no-hide')) {
    element.classList.remove('no-hide')
    return
  }
  element.classList.add('no-hide')
}

const filterNode = (value: string, data: any) => {
  if (!value) return true
  return data.name?.toLowerCase().includes(value.toLowerCase())
}

// const appStore = useAppStoreWithOut()

const sideTreeStatus = ref(true)
const changeSideTreeStatus = (val: boolean) => {
  sideTreeStatus.value = val
}

const mouseenter = () => {
//   appStore.setArrowSide(true)
}

const mouseleave = () => {
//   appStore.setArrowSide(false)
}


const handleDatasetTree = (cmd: string, data?: any) => {
    console.log(cmd, data,'cmd, data')
  // if (cmd === 'dataset') {
  //   createDataset(data)
  // }
  // if (cmd === 'folder') {
  //   creatDsFolder.value.createInit(cmd, data || {})
  // }
}

// const isDataEaseBi = computed(() => true)

const createDataset = (data?: any) => {
  // if (isDataEaseBi.value) {
  //   embedded.clearState()
  //   embedded.setdatasetPid(data?.id as string)
  //   useEmitt().emitter.emit('changeCurrentComponent', 'DatasetEditor')
  //   return
  // }
  // router.push({
  //   path: '/dataset-form',
  //   query: {
  //     pid: data?.id
  //   }
  // })
}

const handleNodeClick = (data: any) => {
  if (!data.leaf) {
    datasetListTree.value.setCurrentKey(null)
    return
  }
  console.log(data,'data')
  console.log(result,'result')
  console.log(res,'res')
  Object.assign(nodeInfo, res)
  // barInfoApi(data.id).then(res => {
  //   const nodeData = res as unknown as Node[]
  //   Object.assign(nodeInfo, nodeData)
  //   nodeInfo.weight = data.weight
  //   nodeInfo.ext = data.ext || 0
  //   columnsPreview = []
  //   dataPreview = []
  //   activeName.value = 'dataPreview'
    handleClick(activeName.value)
  // })
}

const expandedKey = ref([])
const nodeExpand = (data: any) => {
  if (data.id) {
    expandedKey.value.push(data.id)
  }
}
const nodeCollapse = (data: any) => {
  if (data.id) {
    expandedKey.value.splice(expandedKey.value.indexOf(data.id), 1)
  }
}

const handleEdit = (id: string) => {
  console.log(id, 'id')
}

const handleMore = (id: string) => {
  console.log(id, 'id')
}

const handleAdd = (id: string) => {
  console.log(id, 'id')
}

const handleDelete = (id: string) => {
  console.log(id, 'id')
} 
</script>

<template>
  <div class="dataset-manage" :class="isIframe && 'de-100vh'" v-loading="dtLoading">
    <ArrowSide
      :style="{ left: (sideTreeStatus ? width - 12 : 0) + 'px' }"
      @change-side-tree-status="changeSideTreeStatus"
      :isInside="!sideTreeStatus"
    ></ArrowSide>
    <el-aside
      class="resource-area"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
      :class="{ retract: !sideTreeStatus }"
      ref="node"
      :style="{ width: width + 'px' }"
    >
      <ArrowSide
        :isInside="!sideTreeStatus"
        :style="{ left: (sideTreeStatus ? width - 12 : 0) + 'px' }"
        @change-side-tree-status="changeSideTreeStatus"
      ></ArrowSide>
      <div class="resource-tree">
        <div class="tree-header">
          <div class="icon-methods">
            <span class="title"> {{ '数据集' }} </span>
            <div  class="flex-align-center">
              <el-tooltip
                class="box-item"
                effect="dark"
                content="新建文件夹"
                placement="top"
              >
                <el-icon
                  class="custom-icon btn"
                  style="margin-right: 20px;color: #0066ff;"
                  @click="handleDatasetTree('folder')"
                >
                <DocumentAdd />
                </el-icon>
              </el-tooltip>
              <el-tooltip
                class="box-item"
                effect="dark"
                content="新建数据集"
                placement="top"
              >
                <el-icon class="custom-icon btn" @click="createDataset" style="color: #0066ff;">
                  <FolderOpened />
                </el-icon>
              </el-tooltip>
            </div>
          </div>
          <el-input
            placeholder="搜索"
            v-model="nickName"
            clearable
            class="search-bar"
          >
            <template #prefix>
                <el-icon><Search /></el-icon>
            </template>
          </el-input>
          <!-- <el-dropdown @command="handleSortTypeChange" trigger="click">
            <el-icon class="filter-icon-span">
              <el-tooltip :offset="16" effect="dark" :content="sortTypeTip" placement="top">
                <Icon name="dv-sort-asc" class="opt-icon"
                  ><dvSortAsc v-if="state.curSortType.includes('asc')" class="svg-icon opt-icon"
                /></Icon>
              </el-tooltip>
              <el-tooltip :offset="16" effect="dark" :content="sortTypeTip" placement="top">
                <Icon name="dv-sort-desc" class="opt-icon"
                  ><dvSortDesc v-if="state.curSortType.includes('desc')" class="svg-icon"
                /></Icon>
              </el-tooltip>
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu style="width: 246px">
                <template :key="ele.value" v-for="ele in sortList">
                  <el-dropdown-item
                    class="ed-select-dropdown__item"
                    :class="ele.value === state.curSortType && 'selected'"
                    :command="ele.value"
                  >
                    {{ ele.name }}
                  </el-dropdown-item>
                  <li v-if="ele.divided" class="ed-dropdown-menu__item--divided"></li>
                </template>
              </el-dropdown-menu>
            </template>
          </el-dropdown> -->
        </div>

        <el-scrollbar class="custom-tree">
          <el-tree
            menu
            ref="datasetListTree"
            node-key="id"
            :data="state.datasetTree"
            :filter-node-method="filterNode"
            expand-on-click-node
            highlight-current
            draggable
            @node-expand="nodeExpand"
            @node-collapse="nodeCollapse"
            :default-expanded-keys="expandedKey"
            :props="defaultProps"
            @node-click="handleNodeClick"
          >
            <template #default="{ node, data }">
              <span class="custom-tree-node">
                <el-icon v-if="!data.leaf" style="font-size: 18px;color: rgb(255, 198, 10);">
                    <FolderOpened />
                </el-icon>
                <el-icon v-if="data.leaf" style="font-size: 18px;color: rgb(22, 192, 255);">
                    <HelpFilled />
                </el-icon>
                <span :title="node.label" class="label-tooltip ellipsis">{{ node.label }}</span>
                <div class="icon-more" v-if="data.weight >= 7">
                  <!-- <handle-more
                    @handle-command="cmd => handleDatasetTree(cmd, data)"
                    :menu-list="datasetTypeList"
                    placement="bottom-start"
                    v-if="!data.leaf"
                  ></handle-more> -->
                  <div v-if="data.leaf">
                    <el-icon class="hover-icon" @click.stop="handleEdit(data.id)">
                    <Edit />
                  </el-icon>
                  <el-icon class="hover-icon" @click.stop="handleMore(data.id)" style="margin-left: 8px;">
                    <MoreFilled />
                  </el-icon>
                  </div>
                  <div v-else>
                    <el-icon class="hover-icon" @click.stop="handleAdd(data.id)">
                      <Plus />
                    </el-icon>
                    <el-icon class="hover-icon" @click.stop="handleMore(data.id)" style="margin-left: 8px;">
                    <MoreFilled />
                  </el-icon>
                  </div>
                  <!-- <handle-more
                    @handle-command="cmd => operation(cmd, data, data.leaf ? 'dataset' : 'folder')"
                    :menu-list="getMenuList(data.leaf)"
                  ></handle-more> -->
                </div>
              </span>
            </template>
          </el-tree>
        </el-scrollbar>
      </div>
    </el-aside>

    <div
      class="dataset-content"
      :class="{
        auto: isIframe || isDataEaseBi
      }"
    >
      <template v-if="!state.datasetTree.length && mounted">
        <empty-background description="暂无数据集" img-type="none">
          <el-button v-if="rootManage" @click="() => createDataset()" type="primary">
            <template #icon>
              <Icon name="icon_add_outlined"><icon_add_outlined class="svg-icon" /></Icon>
            </template>
            {{ '新建' + '数据集' }}</el-button
          >
        </empty-background>
      </template>
      <template v-else-if="!!nodeInfo.id">
        <div class="dataset-info">
          <div class="info-method">
            <span :title="nodeInfo.name" class="dataset-name ellipsis">{{ nodeInfo.name }}</span>
            <el-divider style="margin: 0 12px" direction="vertical" />
            <span class="create-user">
              {{'创建人'}}:{{ nodeInfo.creator }}
            </span>

            <!-- <el-popover show-arrow :offset="8" placement="bottom" width="290" trigger="hover">
              <template #reference>
                <el-icon><Warning /></el-icon>
              </template>
              <dataset-detail
                :create-time="infoList.createTime"
                :creator="infoList.creator"
              ></dataset-detail>
            </el-popover> -->
            <div class="right-btn">
              <el-button secondary @click="createPanel('dashboard')">
                <template #icon>
                  <el-icon><Histogram /></el-icon>
                </template>
                新建仪表板
              </el-button>
              <el-button secondary @click="createPanel('dvCanvas')">
                <template #icon>
                  <el-icon><TrendCharts /></el-icon>
                  </template
                >新建数据大屏
              </el-button>
              <el-button secondary @click="exportDataset">
                <template #icon>
                  <el-icon><Download /></el-icon>
                </template>
                数据集导出
              </el-button>
              <el-button type="primary" @click="editorDataset" v-if="nodeInfo.weight >= 7">
                <template #icon>
                  <Icon name="icon_edit_outlined"><icon_edit_outlined class="svg-icon" /></Icon>
                </template>
                编辑
              </el-button>
            </div>
          </div>
          <div class="tab-border">
            <el-tabs v-model="activeName" @tab-change="handleClick">
              <el-tab-pane
                v-for="ele in tablePaneList"
                :key="ele.name"
                :label="ele.title"
                :name="ele.name"
              ></el-tab-pane>
            </el-tabs>
            <!-- <XpackComponent
              jsname="L2NvbXBvbmVudC9yb3ctY29sLXBlcm1pc3Npb24vcGFuZS9pbmRleA=="
              @loaded="panelLoad"
            /> -->
          </div>
        </div>
        <div class="dataset-table-info">
          <div v-if="activeName === 'dataPreview'" class="preview-num">
            {{ `显示${total}条数据，共${total}条` }}
          </div>
          <template v-if="['dataPreview', 'structPreview'].includes(activeName)">
            <div class="info-table" :class="[{ 'struct-preview': activeName === 'structPreview' }]">
              <el-auto-resizer v-if="activeName === 'structPreview'">
                <template #default="{ height, width }">
                  <el-table-v2
                    key="structPreview"
                    :columns="columns"
                    v-loading="dataPreviewLoading"
                    header-class="header-cell"
                    :data="tableData"
                    :width="width"
                    :height="height"
                    fixed
                    ><template #empty>
                      <empty-background
                        description="暂无数据"
                        img-type="noneWhite"
                      /> </template
                  ></el-table-v2>
                </template>
              </el-auto-resizer>
              <template v-if="activeName === 'dataPreview'">
                <el-table
                  v-loading="dataPreviewLoading"
                  class="dataset-preview_table"
                  header-class="header-cell"
                  :data="tableData"
                  @row-click="rowClick"
                  key="dataPreview"
                  border
                  style="width: 100%; height: 100%"
                >
                  <el-table-column
                    :key="column.dataKey"
                    v-for="(column, index) in columns"
                    :prop="column.dataKey"
                    :label="column.title"
                    :min-width="150"
                    :fixed="columns.length - 1 === index ? 'right' : false"
                  >
                    <template #header>
                      <div class="flex-align-center">
                        <!-- <ElIcon style="margin-right: 6px">
                          <Icon :className="`field-icon-${fieldType[column.deType]}`"
                            ><component
                              class="svg-icon"
                              :class="`field-icon-${fieldType[column.deType]}`"
                              :is="iconFieldMap[fieldType[column.deType]]"
                            ></component
                          ></Icon>
                        </ElIcon> -->
                        <span class="ellipsis" :title="column.title" style="width: 120px">
                          {{ column.title }}
                        </span>
                      </div>
                    </template>
                  </el-table-column>
                  <template #empty>
                    <empty-background description="暂无数据" img-type="noneWhite" />
                  </template>
                </el-table>
              </template>
            </div>
          </template>
          <template v-if="['row', 'column'].includes(activeName)">
            <div class="table-row-column">
              <!-- <XpackComponent
                :active-name="activeName"
                :dataset-id="nodeInfo.id"
                jsname="ZGF0YXNldC1yb3ctcGVybWlzc2lvbnM="
              />
              <XpackComponent
                :active-name="activeName"
                :dataset-id="nodeInfo.id"
                jsname="ZGF0YXNldC1jb2x1bW4tcGVybWlzc2lvbnM="
              /> -->
            </div>
          </template>
        </div>
      </template>
      <el-empty description="请在左侧选择数据集" :image="nothingSelect" style="margin-top: 300px;" v-if="nodeInfo.id === ''"/>
    </div>
  </div>
</template>


<style lang="less" scoped>
@import '@/styles/mixin.less';

:deep(.dataset-preview_table) {
  .ed-table__body {
    .ed-table__row:not(.no-hide) {
      .cell {
        white-space: nowrap;
      }
    }
  }
}

.ed-table {
  --ed-table-header-bg-color: #f5f6f7;
}
.form-tree-cont {
  .tree-cont {
    height: 200px;
    width: 100%;
    padding: 16px;
    border-radius: 4px;
    border: 1px solid var(--deBorderBase, #dcdfe6);
    overflow: auto;

    .content {
      height: 100%;
      width: 100%;
    }
  }
}
.filter-icon-span {
  border: 1px solid #bbbfc4;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  color: #1f2329;
  padding: 8px;
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;

  .opt-icon:focus {
    outline: none !important;
  }
  &:hover {
    background: #f5f6f7;
  }

  &:active {
    background: #eff0f1;
  }
}
.dataset-manage {
  display: flex;
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;

  &.de-100vh {
    height: 100vh;
  }

  .resource-area {
    position: relative;
    height: 100%;
    width: 279px;
    padding: 0;
    border-right: 1px solid #d7d7d7;
    overflow: visible;
    &.retract {
      display: none;
    }

    .resource-tree {
      padding: 16px 0 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .tree-header {
        padding: 0 16px;
      }

      .icon-methods {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 20px;
        font-weight: 500;
        color: var(--TextPrimary, #1f2329);
        padding-bottom: 16px;

        .title {
          margin-right: auto;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }

        .custom-icon {
          &.btn {
            color: var(--ed-color-primary);
          }

          &:hover {
            cursor: pointer;
          }
        }
      }

      .search-bar {
        padding-bottom: 10px;
        width: calc(100% - 40px);
      }
    }
  }

  .dataset-height,
  .dataset-content {
    // height: 100vh;
    overflow: auto;
    position: relative;
  }

  .dataset-content {
    background: #f5f6f7;
    &.auto {
      height: auto;
    }

    :deep(.ed-table-v2__header-cell) {
      background-color: #f5f6f7 !important;
    }
  }

  .dataset-list {
    width: 279px;
    padding: 16px 8px;
  }

  .dataset-content {
    flex: 1;
    position: relative;

    .dataset-info {
      background: #fff;
      padding: 0 24px;
      padding-top: 12px;
      height: 90px;
      .info-method {
        height: 32px;
        width: 100%;
        display: flex;
        align-items: center;
        font-family: var(--de-custom_font, 'PingFang');
        font-size: 16px;
        font-weight: 500;

        .dataset-name {
          max-width: 200px;
        }

        .create-user {
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          color: #646a73;
          margin-right: 4px;
        }

        .mr8 {
          margin-left: 8px;
        }

        .right-btn {
          margin-left: auto;
        }
      }
      .tab-border {
        .border-bottom-tab(24px);
        :deep(.ed-tabs__item) {
          font-size: 14px;
        }
        :deep(.ed-tabs__nav-wrap::after) {
          border-color: rgba(31, 35, 41, 0.15);
        }
        margin-left: 0;
      }
    }

    .dataset-table-info {
      padding: 24px;
      margin: 24px;
      background: #fff;
      border-radius: 4px;
      height: calc(100% - 198px);
    }

    .preview-num {
      color: var(--deTextSecondary, #606266);
      font-family: var(--de-custom_font, 'PingFang');
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      margin-bottom: 16px;
    }

    .info-table {
      height: calc(100% - 37px);
    }

    .struct-preview {
      height: 100%;
    }

    .table-row-column {
      height: calc(100% - 50px);
      :deep(.add-row-column) {
        margin-bottom: 16px;
      }
    }
  }
}

.custom-tree {
  height: calc(100vh - 172px);
  padding: 0 8px;
}

.custom-tree-node {
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  box-sizing: content-box;
  padding-right: 4px;

  .label-tooltip {
    width: 100%;
    margin-left: 8.75px;
  }

  .icon-more {
    margin-left: auto;
    display: none;
  }

  &:hover {
    .label-tooltip {
      width: calc(100% - 78px);
    }

    .icon-more {
      display: inline-flex;
    }
  }
}
</style>
