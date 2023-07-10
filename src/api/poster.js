import {request} from './request'
export const getSongList = (data)=>{
    return request({
        url:'/songList',
        data
    })
}