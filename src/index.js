import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import apolloProvider from './apollo-provider'
import './supply'
import store, { supplyCache } from './store'


import VueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false
Vue.use(VueGeolocation)


import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps , {
	load: {
		key: 'AIzaSyBZ-NIjwwHQNqKBEIrrzrVXhjRp3fO0GsA',
	}
})



new Vue({
	el: '#app',
	render: h => h(App),
	router,
	// Inject the apollo provider
	apolloProvider,
	// Inject the store & the supply cache
	store,
	supplyCache,
})
