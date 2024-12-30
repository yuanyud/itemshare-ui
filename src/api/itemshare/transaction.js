import request from '@/utils/request'

// 查询交易管理列表
export function listTransaction(query) {
  return request({
    url: '/itemshare/transaction/list',
    method: 'get',
    params: query
  })
}

// 查询交易管理详细
export function getTransaction(id) {
  return request({
    url: '/itemshare/transaction/' + id,
    method: 'get'
  })
}

// 新增交易管理
export function addTransaction(data) {
  return request({
    url: '/itemshare/transaction',
    method: 'post',
    data: data
  })
}

// 修改交易管理
export function updateTransaction(data) {
  return request({
    url: '/itemshare/transaction',
    method: 'put',
    data: data
  })
}

// 删除交易管理
export function delTransaction(id) {
  return request({
    url: '/itemshare/transaction/' + id,
    method: 'delete'
  })
}
