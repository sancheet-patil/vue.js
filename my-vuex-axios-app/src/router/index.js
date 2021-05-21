import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MyComp from '../views/MyComp.vue'
import Employee from '../views/Employee.vue'
import Emp from '../views/Emp.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/emp',
    name: 'Employee',
    component:Employee
  },
  {
    path:'/emp/:id/:ename/:design',
    name:'Emp',
    component:Emp
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/mycomp',
    name:'MyComp',
    component:MyComp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
