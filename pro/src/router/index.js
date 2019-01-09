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
import AllC from '@/components/AllC'
import More from '@/components/More'
import Banner from '@/components/Banner'
import Title from '@/components/Title'

import Details from '@/components/Details'
import Logina from '@/components/Logina'
import Setting from '@/components/Setting'
import Payment from '@/components/Payment'





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
					component:Home,	
					
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
				{
					path:'/allc',
					component:AllC,
				},
				{
					path:'/more',
					component:More,
				},
				{	
					path:'/logina',
					component:Logina,
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
	},
	{
		path:'/mycenter',
		component:Mycenter
	},
	{
		path:'/Login',
		component:Login
	},
	{
		path:'/banner',
		component:Banner,
	},
	{
		path:'/title',
		component:Title,
	},
	{	
		path:'/details',
		component:Details,
	},
	{	
		path:'/setting',
		component:Setting,
	},
	{	
		path:'/payment',
		component:Payment,
	}
	
  ]
})
