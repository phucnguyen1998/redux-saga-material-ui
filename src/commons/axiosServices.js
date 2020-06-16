import axios from 'axios';

class AxiosServices {
  constructor() {
    const instance = axios.create();
    instance.interceptors.response.use(this.handleSuccess,this.handleError)
    this.instance = instance;
  }
  
  // goi api thanh cong
  handleSuccess(response) {
    return response;
  }

  // goi api that bai
  handleError(error){
    return Promise.reject(error);
  }

  //GET
  get(url){
    return this.instance.get(url)
  }

  //POST
  post(url,body){
    return this.instance.post(url,body);
  }
}

export default new AxiosServices();