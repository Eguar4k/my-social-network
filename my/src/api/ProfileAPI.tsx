import { PhotosType, ProfileType } from "../types/typs";
import { instance,ResponseType } from "./api";

type SavePhotosResponseDataType ={
  photos: PhotosType
}

export const ProfileAPI = {
  profile(userId: number | null) {
    return instance.get<ProfileType>(`profile/` + userId).then((response) => response.data);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/` + userId).then((response) => response.data);;
  },
  updateStatus(status: string) {
    // debugger;
    return instance.put<ResponseType>(`profile/status`, { status: status }).then((response) => response.data);;
  },
  savePhoto(photoFile: File) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put<ResponseType<SavePhotosResponseDataType>>(`profile/photo`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => response.data);;
  },
  saveProfile(profile: ProfileType) {
    // debugger;
    return instance.put<ResponseType<ProfileType>>(`profile`, profile).then((response) => response.data);;
  },
};
