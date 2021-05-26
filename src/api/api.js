import { get, post } from '../utils/request'
import baseURL from './base'
const url = baseURL
// 首页banner
export const banner = p => get(url.api + '/banner/json', p)
// 注册
export const register = p => post(url.api + '/user/register', p)
// 登录
export const login = p => post(url.api + '/user/login', p)
// 获取歌单列表
export const getSongLists = p => get(url.qqapi + '/getSongLists', p)
// /获取首页推荐
export const getRecommend = p => get(url.qqapi + '/getRecommend', p)
// 排行榜单列表
export const getTopLists = p => get(url.qqapi + '/getTopLists', p)
// 排行榜单列表
export const getSongListDetail = p => get(url.qqapi + '/getSongListDetail', p)
