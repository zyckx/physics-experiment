import http from '../../axios'
import type { Response } from '../../axios'
export const login = (data: any) => {
	//传递多个params参数
	return http.post('/user/login', data)
}
export const getCaptcha = async () => {
	//设置请求图片的header
	const imgResponse = await http.get('/getCode', {}, { responseType: 'blob' })
	return URL.createObjectURL(imgResponse)
}
export const loginOut = () => {
	return http.get<Response>('/user/logout')
}
