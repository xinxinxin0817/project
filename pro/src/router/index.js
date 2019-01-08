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
import Category from '@/components/Category'
import Health from '@/components/Health'
import Brand from '@/components/Brand'
import Login from '@/components/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
       redirect:'/home',
      component: HelloWorld,
      children:[
		     {
		    		path:'/home',
		    		component:Home
		    },
		    {
					path:'/shop',				
					redirect:'/health',
						component:Shop,
						children:[
							{
								path:'/category',
								component:Category,
							},
							{
								path:'/health',
								component:Health,
							},
							{
								path:'/brand',
								component:Brand,
							}
						]
						
					},
		    {
		    		path:'/find',
		    		component:Find
				},
				{
					path:'/cart',
					component:Cart
				},
				
      ]
    },
    {
    		path:'/detail/:id',
    		component:Detail
    	
    },
    {
    		path:'/register',
    		component:Register
	},
	{
		path:'/mycenter',
		component:Mycenter
	},
	{
		path:'/Login',
		component:Login
},
  ]
})
