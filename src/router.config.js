import Home from './components/Home.vue'
import News from './components/News.vue'
import User from './components/User.vue'
export default {
	routes:[
		{path:'/home',component:Home},

		{path:'/news',component:News},

		{path:'/user',component:User},
		{path:'*',redirect:'/home'}

	]
}