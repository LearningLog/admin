<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>厂商管理</el-breadcrumb-item>
      <el-breadcrumb-item>厂商列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--搜索-->
    <el-form :inline="true" :model="searchData" size="mini" class="searchData">
      <el-form-item label="厂商名称:">
        <el-input v-model="searchData.manufacturerName" placeholder="请输入厂商名称"></el-input>
      </el-form-item>
      <el-form-item label="厂商编号:">
        <el-input v-model="searchData.manufacturerCode" placeholder="请输入厂商编号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">查询</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="mini" @click="add" :disabled="btnDisabled">添加</el-button>
    <el-button type="danger" size="mini" @click="remove" :disabled="btnDisabled">删除</el-button>
    <!--表格-->
    <el-table
      :data="productList"
      stripe
      border
      ref="checkedList"
      @selection-change="handleSelectionChange"
      style="width: 100%">
      <el-table-column
        type="selection"
        label="选择"
        align="center"
        width="40">
      </el-table-column>
      <el-table-column
        prop="name"
        label="厂商编号"
        align="center"
        width="140">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="厂商名称">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="品牌">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="注册地址">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="联系电话">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="联系人">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import { getManufacturerList, deleteManufacturer } from '../../api/manufacturerManage.js'
  export default {
    created () {
      // getManufacturerList().then(res => {
      //   if (res.meta.status === 200) {
      //     this.productList = res.data.productList
      //     this.btnDisabled = res.data.btnDisabled
      //   }
      // })
    },
    data () {
      return {
        searchData: { // 搜索数据
          manufacturerName: '', // 厂商名称
          manufacturerCode: '' // 厂商编号
        },
        productList: [{}], // 产品列表
        btnDisabled: false, // 是否禁用按钮
        checkedList: [] // CheckBox选择的数据
      }
    },
    methods: {
      // 搜索
      onSearch () {
        getManufacturerList(this.searchData).then(res => {
          if (res.meta.status === 200) {
            this.productList = res.data.productList
          }
        })
      },
      // 重置
      reset () {
        this.searchData = { // 搜索数据
          manufacturerName: '', // 厂商名称
          manufacturerCode: '' // 厂商编号
        }
        this.onSearch()
      },
      // 添加
      add () {
        // 到新增页面
        this.$router.push({path: '/manufacturerAdd'})
      },
      // 选中数据
      handleSelectionChange (row) {
        this.checkedList = row
      },
      // 删除
      remove () {
        if (this.checkedList.length === 0) {
          this.$message({
            message: '请选择至少一项产品记录！',
            type: 'warning'
          })
          return false
        } else {
          deleteManufacturer(this.checkedList).then(res => {
            if (res.meta.status === 200) {
              this.productList = res.data.productList
            }
          })
        }
      },
      // 修改
      handleEdit (index, row) {
        // 到编辑页面
        //   this.$router.push({path: '/manufacturerAdd', query: {pId: row.goods_id}})
        this.$router.push({path: '/manufacturerAdd', query: {pId: '1111'}})
      }
    }
  }
</script>
<style scoped>
  .el-breadcrumb {
    background-color: #D3DCE6;
    height: 45px;
    font-size: 15px;
    padding-left: 10px;
    line-height: 45px;
  }
  .searchData {
    margin-top: 10px;
  }
</style>
