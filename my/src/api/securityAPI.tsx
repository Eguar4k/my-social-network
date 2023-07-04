import { instance } from "./api";

// authAPI.me().then((res: AxiosResponse<any>)=>res.data)
type GetCaptchaUrlResponseType ={
  url: string
}

export const securityAPI = {
  getCaptchaUrl() {
    // debugger;
    return instance
      .get<GetCaptchaUrlResponseType>(`security/get-captcha-url`)
      .then((response) => response.data);
  },
};
