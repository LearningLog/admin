/**
 * @author: YanHuaKang
 * @2018/11/26
 * @Description:输出当前所在左侧菜单
 */
// 路由地址对应左侧导航的index
let menuConfig = [
  ['/'],
  ['/commodityList', '/commodityAdd', '/commodityDetail'],
  ['/publishProductList', '/addPublishProduct', '/publishProductApprove'],
  ['/totalInventoryList', '/totalInventoryDetail'],
  ['/inventoryList', '/inventoryAdd', '/godownEntry', '/inventoryDetail'],
  ['/manufacturerList', '/manufacturerAdd'],
  ['/orderFormList', '/orderFormDetail'],
  ['/marketList', '/marketDetail'],
  ['/splitAccountList', '/splitAccountDetail'],
  ['/clientList', '/customerSalesOrderDetail'],
  ['/myMarketDocList', '/myCoinsList', '/myBeansList']
]
export const getActiveMenu = path => {
  for (let i = 0, len = menuConfig.length; i < len; i++) {
    let item = menuConfig[i]
    for (let j = 0, len2 = item.length; j < len2; j++) {
      var item2 = item[j]
      if (item2 === path) {
        return [i.toString()]
      } else {
        return []
      }
    }
  }
}
