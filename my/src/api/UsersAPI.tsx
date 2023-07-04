
import { UsersType } from "../types/typs";
import { instance,ResponseType } from "./api";

export type GetUsersResponseType = {
  items: Array<UsersType>
  totalCount:number
  error:string | null
}

export const UsersAPI = {
  getUsars(currentPage: number=1, pageSize: number=10) {
    // debugger;
    return instance
      .get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollowed(userId: number | null) {
    return instance
      .delete(`follow/${userId}`) 
      .then((response) => response.data) as Promise<ResponseType>;
  },
  followed(userId: number | null) {
    return instance.post<ResponseType>(`follow/${userId}`).then((response) => response.data);
  },
};
