import {request} from './request'
export const getTab = ()=>{
    return request({
        url:'/getTabs'
    })
}