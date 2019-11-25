import Cookies from 'js-cookie'  //js-cookie是一个简单的，轻量级的处理cookies的js API。
const tokenKey='Admin_Token'
export  function setToken(token) {             //这个文件是封装cookie
  return Cookies.set(tokenKey,token)
}
export function  getToken() {
   return Cookies.get(tokenKey)
}
export  function removeToken() {
  return Cookies.remove(tokenKey)
}
