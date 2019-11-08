import Cookies from 'js-cookie'

const TokenKey = 'access_token'

// 获取token
export function getToken() {
  return Cookies.get(TokenKey)
}

// 保存token到cookie中
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
// 删除toten
export function removeToken() {
  return Cookies.remove(TokenKey)
}
// 保存用户名到cookie中
export function setusername(data) {
    return Cookies.set('username', data)
}
// 从cookie中获取用户名 
export function getusername() {
    return Cookies.get('username')
}

