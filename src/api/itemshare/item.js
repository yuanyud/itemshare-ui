import request from '@/utils/request'

// 查询物品管理列表
export function listItem(query) {
  return request({
    url: '/itemshare/item/list',
    method: 'get',
    params: query
  })
}

// 查询物品管理详细
export function getItem(id) {
  return request({
    url: '/itemshare/item/' + id,
    method: 'get'
  })
}

// 新增物品管理
export function addItem(data) {
  return request({
    url: '/itemshare/item',
    method: 'post',
    data: data
  })
}

// 修改物品管理
export function updateItem(data) {
  return request({
    url: '/itemshare/item',
    method: 'put',
    data: data
  })
}

// 删除物品管理
export function delItem(id) {
  return request({
    url: '/itemshare/item/' + id,
    method: 'delete'
  })
}
