import axios from "axios";


export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,

  headers: { "api-key": "b95218a1-0f48-4248-8371-9e16d7c3d831" },
});


export type ResponseType <D={}, RC = ResultCodesEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}

export enum ResultCodesEnum {
  Success = 0,
  Erorr = 1,
  CaptchaIsRequired = 10
}

export enum ResultCodesForCaptchaEnum {
 
  CaptchaIsRequired = 10
}






