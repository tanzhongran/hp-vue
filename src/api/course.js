import request from '@/utils/request'

export function saveCourse(params) {
  return request({
    url: '/course/save',
    method: 'post',
    params
  })
}

export function getCourseList(params) {
  return request({
    url: '/course/list',
    method: 'get',
    params
  })
}