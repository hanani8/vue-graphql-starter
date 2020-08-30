import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from './components/Blog2.vue'
import About from './components/About.vue'
import Ciao from './views/ciao.vue'
import Counter from './views/rooms-counter.vue'


Vue.use(VueRouter)

const routes = [
	{ path: '/', name: 'home', component: Blog },
	{ path: '/about', name: 'about', component: About },
	{ path: '/ciao', name: 'ciao', component: Ciao },
	{ path: '/rooms', name: 'rooms', component: Counter },


]

const router = new VueRouter({
	routes,
	mode: 'history',
})

export default router
