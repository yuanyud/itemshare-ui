import request from '@/utils/request'

// 查询信用评分管理列表
export function listScore(query) {
  return request({
    url: '/itemshare/score/list',
    method: 'get',
    params: query
  })
}

// 查询信用评分管理详细
export function getScore(studentId) {
  return request({
    url: '/itemshare/score/' + studentId,
    method: 'get'
  })
}

// 新增信用评分管理
export function addScore(data) {
  return request({
    url: '/itemshare/score',
    method: 'post',
    data: data
  })
}

// 修改信用评分管理
export function updateScore(data) {
  return request({
    url: '/itemshare/score',
    method: 'put',
    data: data
  })
}

// 删除信用评分管理
export function delScore(studentId) {
  return request({
    url: '/itemshare/score/' + studentId,
    method: 'delete'
  })
}
