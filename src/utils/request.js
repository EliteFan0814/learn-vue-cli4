import Vue from 'vue'
import store from '@/store'
import axios from 'axios'
import qs from 'qs'
import {
  Message
} from 'element-ui'
import {
  getCookie
} from './cookie.js'

const request = axios.create({
  baseURL: '/'
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
  // 如果是 post 请求
  if (config.method === 'post') {
    // 如果请求参数不是 FormData 类型
    if (!(config.data instanceof FormData)) {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
  }
  // 登录后的所有请求附带 token
  if (store.state.isLogin && store.state.token) {
    config.headers = {
      Authorization: 'Bearer ' + getCookie('token'),
      ...config.headers
    }
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use((res) => {
  if (res.data.success || res.data.code === 1) {
    if (res.data.msg && res.data.msg != "ok") {
      Message.success(res.data.msg)
    }
    return res.data
  }
  if (res.data.code === 0) {
    Message.error(res.data.msg)
  }
  return Promise.reject(res.data)
}, (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      Message.error('请重新登陆')
      store.commit('LOG_OUT')
    }
    if (error.response.status === 403) {
      Message.error('没有操作权限')
    }
    if (error.response.status === 400) {
      if (error.response.data && error.response.data.message)
        Message.error(error.response.data.message)
      else {
        Message.error(JSON.stringify(error.response.data))
      }
    }
  }
})
Vue.prototype.$http = request