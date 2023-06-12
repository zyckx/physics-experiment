import http from '~/src/axios'
//查询登录老师的所有班级
export const getTeacherClassByExp = (params: any) => {
	return http.get('/classes/find', { params })
}
