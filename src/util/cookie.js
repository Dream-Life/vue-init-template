import Vue from 'vue'

// 获取cookie
function getCookie(name) {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  // console.log(arr)
  return (arr ? arr[2] : null)
}

// 设置cookie,增加到vue实例方便全局调用
function setCookie(name, value, expireHours) {
  let exdate = new Date()
  // exdate.setMonth(exdate.getMonth() + expireMonths)
  exdate.setHours(exdate.getHours() + expireHours)
  document.cookie = name + '=' + escape(value) + ((expireHours == null) ? '' : ';expires=' + exdate.toGMTString())
}

// 删除cookie
function delCookie(name) {
  let exp = new Date()
  exp.setTime(exp.getTime() - 1)
  let cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}

Vue.prototype.$getCookie = getCookie
Vue.prototype.$setCookie = setCookie
Vue.prototype.$delCookie = delCookie
