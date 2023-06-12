import http from '~/src/axios'
//根据学生编号和实验编号查询学生实验信息
export const getStudentExperimentByStudentIdAndExperimentId = (params: any) => {
	return http.get('/report/all/{sid}/{eid}', { params })
}
//查看学生实验
/*
 * 0 未开始 1 一开始 2未批阅 3已批阅  all 全部
 */
export const getStudentExperimentByStudentId = (params: any) => {
	return http.get('/report/student/', { params })
}
// 根据实验编号查询学生实验信息
export const getStudentExperimentByExperimentId = (params: any) => {
	return http.get('/report/all/{eid}', { params })
}
//更新实验报告
export const updateStudentExperiment = (params: any) => {
	return http.post('/report/update', { params })
}
//查看教师未开始报告 0 未开始 1 一开始 2未批阅 3已批阅  all 全部
export const getTeacherExperimentByTeacherId = (params: any) => {
	http.get('/report/teacher/', { params })
}
//教师查看学生实验报告
export const getTeacherExperimentByStudentId = (params: any) => {
	http.get('/report/teacher/student/', { params })
}
