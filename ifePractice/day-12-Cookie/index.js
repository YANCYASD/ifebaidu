/**
 * @description 获取cookie
 * @method getCookie
 * @param {String} name cookie的键名
 * @return {String} 返回对应的cookie值，如果没找到，则返回 undefined
 */

 function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * @description 设置cookie
 * @method setCookie
 * @param {string} name cookie的键名
 * @param {string} value cookie的键值
 * @param {object} [option] cookie其他项，比如过期日期、安全策略等
 */

function setCookie(name,value,options={}){
  options = {
    path:"/",
    ...options
  }
  if(options.expires instanceof Date) {
    options.expires = options.expires.toUTCString()
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for(let optionKey in options) {
    updatedCookie += ";" + optionKey;
    let optionValue = options[optionKey];
    if(optionValue !== true){
      updatedCookie += "=" + optionValue
    }
  }
  document.cookie = updatedCookie

}

// 使用范例：
setCookie("student", "Amy", { secure: true, "max-age": 3600 });

/**
 * @description 删除cookie
 * @method deleteCookie
 * @param {String} name cookie的键名
 * @return {Bool} 删除成功返回true，删除失败，返回false
 */

function deleteCookie(name) {
  //your complement
setCookie(name,"",{"max-age":-1})
}
