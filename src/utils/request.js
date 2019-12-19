import Vue from 'vue'
import store from '@/store'
import axios from 'axios'
import qs from 'qs'
import {
  getCookie
} from './cookie.js'

const request = axios.create({
  baseURL: '/'
})

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
})

Vue.prototype.$http = request
