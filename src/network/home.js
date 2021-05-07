/*
 * @Author: your name
 * @Date: 2021-05-05 21:50:30
 * @LastEditTime: 2021-05-05 22:02:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\network\home.js
 */

// 导入request
import { request } from "./request";

// 封装函数
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}