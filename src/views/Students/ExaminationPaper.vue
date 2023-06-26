<template>
	<div class="paper-wrap">
		<n-card>
			<div class="paper-title">
				<h2>试卷</h2>
				<div class="stu-info">
					<div class="stu-info-item">
						<span>学号：</span>
						<span>2018210405001</span>
					</div>
					<div class="stu-info-item">
						<span>姓名：</span>
						<span>张三</span>
					</div>
					<div class="stu-info-item">
						<span>班级：</span>
						<span>软件工程1801</span>
					</div>
				</div>
			</div>
			<n-divider title-placement="left"> 一、实验目的</n-divider>
			<div class="paper-purpose">
				<ol>
					<li>
						1、观察液体的内摩擦现象，用落球法测定液体的黏滞系数
					</li>
					<li> 2、掌握读书显微镜的使用方法 </li>
					<li> 3、学习用外延拓展法处理数据获得理想数值的方法 </li>
				</ol>
			</div>
			<n-divider title-placement="left"> 二、实验仪器</n-divider>
			<div class="paper-instrument">
				<p class="instruments"
					>多管黏滞系数测量仪、小钢球、密度计、温度计、气泡水准器、小磁铁、读数显微镜、秒表、米尺、游标卡尺
				</p>
			</div>
			<n-divider title-placement="left"> 三、实验原理</n-divider>
			<div class="paper-principle">
				<p class="principles"> 具体内容请参照实验指导书进行学习 </p>
			</div>

			<n-divider title-placement="left"> 四、数据记录与处理</n-divider>
			<div class="paper-data">
				<h2>(一) 基本量测量 </h2>
				<n-form
					ref="formRef"
					:model="model"
					:rules="rules"
					size="large"
					:show-label="false"
					class="form1"
				>
					<n-form-item path="userName" style="line-height: 50px">
						<n-input-group>
							<n-input-group-label
								>测量前蓖麻油的温度</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
					<n-form-item path="password">
						<n-input-group>
							<n-input-group-label
								>测量后蓖麻油的温度</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>

					<n-form-item>
						<n-input-group>
							<n-input-group-label
								>两刻线A、B间的距离S</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
					<n-form-item>
						<n-input-group>
							<n-input-group-label
								>蓖麻油的密度ρ₀</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
					<n-form-item>
						<n-input-group>
							<n-input-group-label
								>小钢球的密度ρ(重力加速度g=9.80m·s⁻²)</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
				</n-form>
				<h2>(二) 测定小球下落时间 </h2>
				<table
					border="1"
					style="
						width: 100%;
						border-collapse: collapse;
						border: 1px solid #000;
					"
				>
					<tr style="background: rgb(0, 0, 0, 0.1)">
						<td>油管编号</td>
						<td>小钢球下落时间t/s</td>
						<td>t/s</td>
						<td>圆筒内直径D/mm</td>
						<td>d/D</td>
					</tr>
					<tr v-for="i in 5" :key="i">
						<th>{{ i }}</th>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
					</tr>
				</table>
				<h2>(三) 测定小钢球的直径 </h2>
				<table
					border="1"
					style="
						width: 100%;
						border-collapse: collapse;
						border: 1px solid #000;
					"
				>
					<tr style="background: rgb(0, 0, 0, 0.1)">
						<td>测量次数</td>
						<td>初读数</td>
						<td>末读数</td>
						<td>小球直径</td>
						<td>d/mm</td>
						<td> 绝对误差</td>
						<td>d/mm</td>
					</tr>
					<tr>
						<th>1</th>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<td rowspan="3">
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<!-- 向下合并三个 -->
						<td rowspan="3">
							<input type="text" />
						</td>
					</tr>
					<tr>
						<th>2</th>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>

						<td>
							<input type="text" />
						</td>
					</tr>
					<tr>
						<th>3</th>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>
						<td>
							<input type="text" />
						</td>

						<td>
							<input type="text" />
						</td>
					</tr>
				</table>
				<p
					>经系统计算： 测量次数为1的 d= 测量次数为2的 d=
					测量次数为3的 d= d = Δd1= Δd2= Δd3= Δd=</p
				>
				<h2>(四)计算小球的收尾速度及蓖麻油的黏滞系数</h2>
				<n-form
					ref="formRef"
					:model="model"
					:rules="rules"
					size="large"
					:show-label="false"
					class="form1"
				>
					<n-form-item path="userName" style="line-height: 50px">
						<n-input-group>
							<n-input-group-label
								>令x=t,y=d/D,用最小二乘法拟合得y=</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
					<n-form-item path="password">
						<n-input-group>
							<n-input-group-label
								>由以上关系式得，截距t₀=</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>

					<n-form-item>
						<n-input-group>
							<n-input-group-label
								>收尾速度为v₀=S/t₀=
							</n-input-group-label>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
					<n-form-item>
						<n-input-group>
							<n-input-group-label
								>蓖麻油的年滞系数η=
							</n-input-group-label>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
					<n-form-item>
						<n-input-group>
							<n-input-group-label
								>小钢球的密度ρ(重力加速度g=9.80m·s⁻²)</n-input-group-label
							>
							<n-input :style="{ width: '33%' }" />
						</n-input-group>
					</n-form-item>
				</n-form>
			</div>
			<n-divider title-placement="left">五、实验分析</n-divider>
			<div class="paper-analyze">
				<n-form
					ref="formRef"
					:model="model"
					:rules="rules"
					size="large"
					:show-label="false"
					class="form1"
				>
					<n-form-item path="userName" style="line-height: 50px">
						<n-input
							v-model:value="value"
							type="textarea"
							placeholder="基本的 Textarea"
						/>
					</n-form-item>
					<n-form-item path="password">
						<n-input
							v-model:value="value"
							type="textarea"
							placeholder="基本的 Textarea"
						/>
					</n-form-item>
				</n-form>
			</div>
			<div class="btn-group">
				<n-button type="info"> 返回 </n-button>
				<n-button type="success"> 审批通过 </n-button>
				<n-button type="error"> 审批不通过 </n-button>
			</div>
		</n-card>
	</div>
</template>
<script setup lang="ts">
const model = ref({
	userName: '',
	password: '',
})
const value = ref('')
const rules = ref({
	userName: [
		{ required: true, message: '请输入用户名', trigger: 'blur' },
		{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
	],
	password: [
		{ required: true, message: '请输入密码', trigger: 'blur' },
		{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
	],
})
</script>

<style lang="less" scoped>
.paper-title {
	.stu-info {
		display: flex;
		align-items: center;
		.stu-info-item {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 10px;
		}
	}
}
.form1 {
	.form-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px;
		.input-group {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			.input {
				width: 100%;
			}
		}
	}
}
table {
	margin: 10px;
	tr {
		td {
			text-align: center;
			padding: 10px;
			input {
				width: 100%;
				height: 100%;
				border: none;
				outline: none;
				text-align: center;
				box-sizing: border-box;
				&:focus {
					border-radius: 5px;
					border: 1px solid #000;
				}
			}
		}
	}
}
.btn-group {
	// 右下角
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	margin: 10px;
	.n-button {
		margin-left: 10px;
	}
}
</style>
