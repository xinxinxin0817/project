import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Shop from '@/components/Shop'
import Home from '@/components/Home'
import Find from '@/components/Find'
import Cart from '@/components/Cart'
import Mycenter from '@/components/Mycenter'
import Detail from '@/components/Detail'
import Register from '@/components/Register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // redirect:'/register',
      component: HelloWorld,
      children:[
		     {
		    		path:'/home',
		    		component:Home
		    },
		    {
		    		path:'/shop',
		    		component:Shop
		    },
		    {
		    		path:'/find',
		    		component:Find
				},
				{
					path:'/cart',
					component:Cart
				},
				{
					path:'/mycenter',
					component:Mycenter
				}
      ]
    },
    {
    		path:'/detail/:id',
    		component:Detail
    	
    },
    {
    		path:'/register',
    		component:Register
    }
  ]
})
