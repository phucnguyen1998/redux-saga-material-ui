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

  get(url){
    return this.instance.get(url)
  }
}

export default new AxiosServices();