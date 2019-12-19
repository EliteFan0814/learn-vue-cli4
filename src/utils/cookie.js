// 根据 cookie 名获取 cookie 值
const getCookie = function (cookieName) {
  let cookieReg = new RegExp('(^| )' + cookieName + '=([^;]*)(;|$)')
  let cookieValue = document.cookie.match(cookieReg)[2]
  if (cookieValue) {
    return cookieValue
  } else {
    return null
  }
}

//修改或添加 cookie 并设置键值以及过期时间
const setCookie = function (cookieName, value, expiredays) {
  let nowDate = new Date()
  let expireData = nowDate.setDate(nowDate.getDate() + expiredays)
  document.cookie = `${cookieName}=${value};expires=${expireData.toGMTString()}`
}

//删除 cookie 清空目标 cookie 的值并把 expires 设置为一个过期时间
const deleteCookie = function (cookieName) {
  document.cookie = `${cookieName}=;expires=Thu, 01-Jan-1970 00:00:01 GMT`
}

export default {
  getCookie,
  setCookie,
  deleteCookie
}