// 这段代码是与应用程序中使用的令牌有关的代码，具体来说是使用了 localStorage 来存储和检索访问令牌。其中 ACCESS_TOKEN 是一个常量，用于定义存储在 localStorage 中的键名，即用于保存访问令牌的键名。

// getAccessToken()：从 localStorage 中获取访问令牌。

// setToken(token)：将访问令牌存储到 localStorage 中。

// removeToken()：从 localStorage 中删除访问令牌。


const AccessTokenKey = 'ACCESS_TOKEN'

// ========== Token 相关 ==========

export function getAccessToken() {
  return localStorage.getItem(AccessTokenKey)
}

// localStorage 是 HTML5 提供的一种本地存储方式，可以用来存储简单的键值对。它可以在浏览器关闭后仍然保留存储的数据，因此非常适合存储用户的持久化数据，如用户的偏好设置、登录信息等。

// localStorage 只能存储字符串类型的数据，因此如果要存储其他类型的数据，需要将它们转换成字符串类型再进行存储。可以使用 JSON.stringify() 将 JavaScript 对象转换为 JSON 格式的字符串，使用 JSON.parse() 将 JSON 格式的字符串转换为 JavaScript 对象。

export function setToken(token) {
  localStorage.setItem(AccessTokenKey, token)
}

export function removeToken() {
  localStorage.removeItem(AccessTokenKey)
}