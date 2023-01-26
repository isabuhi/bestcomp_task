import {useQuery, useMutation} from "react-query"
import {toast } from 'react-hot-toast';


import axios from "axios"

const BaseUrl = "https://jsonplaceholder.typicode.com/users"

export const FetchProfiles = ()=>{
    return useQuery("fetch-profiles", ()=>{
       return axios.get(BaseUrl)
    })
}

export const FetchProfile = (param)=>{
    return useQuery("fetch-profile", ()=>{
       return axios.get(`${BaseUrl}/${param}`)
    })
}

export const UpdateProfile = ()=>{
    return useMutation((profile)=>{
       
       return axios.put(`${BaseUrl}/${profile.param}`, profile.data).then((data)=>{
        toast("Updated!")
        return data
      })
    })
}

export const DeleteProfile = ()=>{
    return useMutation((id)=>{
       return axios.delete(`${BaseUrl}/${id}`).then((data)=>{
        toast("Deleted!")
        return data
      })
    })
}

export const CreateProfile = ()=>{
    return useMutation((data)=>{
       return axios.post(`${BaseUrl}`, data).then((data)=>{
        toast("Created!")
        return data
      })
    })
}