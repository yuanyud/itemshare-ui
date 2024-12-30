import request from '@/utils/request'

// 查询评价管理列表
export function listReview(query) {
  return request({
    url: '/itemshare/review/list',
    method: 'get',
    params: query
  })
}

// 查询评价管理详细
export function getReview(id) {
  return request({
    url: '/itemshare/review/' + id,
    method: 'get'
  })
}

// 新增评价管理
export function addReview(data) {
  return request({
    url: '/itemshare/review',
    method: 'post',
    data: data
  })
}

// 修改评价管理
export function updateReview(data) {
  return request({
    url: '/itemshare/review',
    method: 'put',
    data: data
  })
}

// 删除评价管理
export function delReview(id) {
  return request({
    url: '/itemshare/review/' + id,
    method: 'delete'
  })
}
