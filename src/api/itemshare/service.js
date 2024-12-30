import request from '@/utils/request'

// 查询跑腿服务管理列表
export function listService(query) {
  return request({
    url: '/itemshare/service/list',
    method: 'get',
    params: query
  })
}

// 查询跑腿服务管理详细
export function getService(id) {
  return request({
    url: '/itemshare/service/' + id,
    method: 'get'
  })
}

// 新增跑腿服务管理
export function addService(data) {
  return request({
    url: '/itemshare/service',
    method: 'post',
    data: data
  })
}

// 修改跑腿服务管理
export function updateService(data) {
  return request({
    url: '/itemshare/service',
    method: 'put',
    data: data
  })
}

// 删除跑腿服务管理
export function delService(id) {
  return request({
    url: '/itemshare/service/' + id,
    method: 'delete'
  })
}
