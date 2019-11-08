import { loginByUserInfo } from '../../api/login'
const login = {
	state: {
		username: sessionStorage.getItem('USERNAME'),
		role: sessionStorage.getItem('ROLE'),
		introduce: '',
		newrouter: [],
	},
	mutations: {
		SET_USERNAME: (state, username) => {
			state.username = username;
		},
		SET_ROLE: (state, role) => {
			state.role = role;
		},
		SET_INTRODUCE: (state, introduce) => {
			state.introduce = introduce;
		},
		SET_NEWROUER: (state, newrouter) => {
			state.newrouter = newrouter;
		},
	},
	actions: {
		Logins({ commit,state }, info) {
			return new Promise((resolve, reject) => {
				console.log(3)
				let data = {};
				loginByUserInfo.map(function (item) { //获取所以用户信息
					if (info.username === item.username || info.pew === item.pew) {
						commit('SET_USERNAME', item.username);  //将username和role进行存储
						sessionStorage.setItem('USERNAME', item.username); //存入 session 
						commit('SET_ROLE', item.role);
						sessionStorage.setItem('ROLE', item.role);
						console.log(state.username)
						console.log(state.role)
						return data = { username: item.username, introduce: item.introduce };
					} else {
						return data;
					}
				});
				console.log(4)
				resolve(data);
			})
		},
		Roles({ commit }, newrouter) {
			console.log('Roles',newrouter)
			return new Promise((resolve, reject) => {
				commit('SET_NEWROUER', newrouter); //存储最新路由
				resolve(newrouter);
			})
		},
		Logout({ commit, state }) {
			return new Promise((resolve, reject) => {
				// 清空用户名
				commit('SET_USERNAME', '');
				// 清空角色
				commit('SET_ROLE', '');
				// 清空路由
				commit('SET_NEWROUER', []);
				// 页面刷新
				// location.reload();
				sessionStorage.removeItem('USERNAME');
				sessionStorage.removeItem('ROLE');
				resolve();
			})
		},

	}
}
export default login;