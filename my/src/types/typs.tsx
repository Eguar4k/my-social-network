export type PostsType = {
    id: number
    message: string
    liksCounter: number
  }
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainlink: string
  }
  
export  type PhotosType = {
    small: string | null
    large: string | null
  }
  
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType 
  }
export type UsersType ={
    id: number
    name: string
    status: string
    photos: PhotosType 
  }