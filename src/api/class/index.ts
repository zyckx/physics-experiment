import http from '~/src/axios'

//查询某个班级的所有实验
export const getClassExperiments = (classId: number) => {
	return http.get(`/experiment/class/${classId}`)
}
//查询 登录老师 管理的所有班级
export const getTeacherClassByClass = () => {
	return http.get('/classes/find')
}
