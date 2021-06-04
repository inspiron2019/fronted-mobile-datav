import axios from 'axios'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      
    }
  }
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
       
      }
      this.queue[url] = true
      // 向head中写入token
      let token;
      let name = "_at_token_=";
      let param_b = "param_businessId=";
      let param_p = "param_projectId=";
      let ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) != -1){
          token = c.substring(name.length, c.length);
        }else if(c.indexOf(param_b) != -1){
            config.headers["profileId"] = c.substring(param_b.length, c.length);
        }else if(c.indexOf(param_p) != -1){
            config.headers["projectId"] = c.substring(param_p.length, c.length);
        }
      }
      config.headers["X-Auth-Token"] = token;
      return config;
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
   
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest


// import HttpRequest from '@/libs/axios'
// import config from '@/config'
// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

// const axios = new HttpRequest(baseUrl)
// export default axios
