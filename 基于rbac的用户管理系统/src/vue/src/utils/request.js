import axios from 'axios';
import {getAccessToken} from '@/utils/auth'
// axios.create 方法创建了一个 Axios 实例 service，该实例包含了 baseURL、timeout 等默认配置。创建该实例后，可以使用其内部封装的 get、post 等方法来发送 HTTP 请求，而这些方法会自动添加 baseURL 作为请求的前缀。
// 在代码中的 login 函数中，通过 request 对象调用了 service 实例封装的 post 方法，而不是直接向 mock 接口地址发送 POST 请求。由于 Axios 实例 service 的 baseURL 属性设置为 https://mock.apifox.cn/m1/2428381-0-default/admin-api，因此向 /user/login 发送 POST 请求时，会自动添加 https://mock.apifox.cn/m1/2428381-0-default/admin-api 前缀，即最终请求的地址为 https://mock.apifox.cn/m1/2428381-0-default/admin-api/user/login。
const service = axios.create({
  //baseurl=http://localhost:28080/admin-api
  baseURL:"http://localhost:28080/admin-api",
  timeout: 5000
});

// 这段代码是对 service 实例进行请求拦截器的配置，可以在发送请求前对请求进行处理，或者在请求出错时进行处理。
service.interceptors.request.use(
  config => {
    // 在请求发送之前对请求数据进行处理
    // ...
    if (getAccessToken() ) {
      config.headers['Authorization'] = 'Bearer ' + getAccessToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

// 这段代码是对 service 实例进行响应拦截器的配置，可以在收到响应后对响应进行处理，或者在响应出错时进行处理。
service.interceptors.response.use(
  response => {
    // 对响应数据进行处理
    // ...

    return response.data;
  },
  error => {
    // 对响应错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;