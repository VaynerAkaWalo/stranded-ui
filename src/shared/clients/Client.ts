import axios, {type AxiosRequestConfig} from 'axios';

class Client {

  public get = async (url: string, config?: AxiosRequestConfig) => {
    return axios.get(url, config)
  }

  public post = async <T=never>(url: string, request: T): Promise<never> => {
    return axios.post(url, request)
  }
}

export const HTTPClient = new Client()
