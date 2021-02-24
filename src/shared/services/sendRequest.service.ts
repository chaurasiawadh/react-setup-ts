import axios, { AxiosResponse } from 'axios';
import ApplicationDetail from './applicationDetail.service';

axios.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse => {
    return res.data;
  },
);

class SendRequest {
  private static _instance: SendRequest = new SendRequest();
  private appDetail: ApplicationDetail = ApplicationDetail.instance;

  constructor() {
    if (SendRequest._instance) {
      throw new Error('Use DataService.instance');
    }
    SendRequest._instance = this;
  }

  static get instance(): SendRequest {
    return SendRequest._instance;
  }

  get<R>(
    url: string,
  ): Promise<any> {
    const reqOption = {
      headers: {
        'Content-Type': 'application/json',
        accessToken: this.appDetail.getAccessToken(),
      },
    };
    return axios(url, reqOption).catch((error: Error): void => {
      // errorHandler(error, isShowErrorInInterceptor);
    });
  }

  post<T, R>(
    url: string,
    body: T,
    sendRequestConfig: SendRequestConfig = defualtConfig,
    { headers, isShowErrorInInterceptor }: SendRequestConfig = { ...defualtConfig, ...sendRequestConfig },
  ): Promise<any> {
    body = {
      ...body,
    };
    headers = {
      'Content-Type': 'application/json',
      accessToken: this.appDetail.getAccessToken(),
      ...headers,
    };
    return axios
      .post(url, JSON.stringify(body), { headers })
      .catch((error: Error): void => {
        errorHandler(error, isShowErrorInInterceptor);
      });
  }

  all<R>(
    xhrArray: (AxiosResponse<R> | Promise<AxiosResponse<R>>)[],
  ): Promise<AxiosResponse<R>[]> {
    return axios.all(xhrArray);
  }

}
export default SendRequest;
