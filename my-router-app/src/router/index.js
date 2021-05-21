import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MyComp from '../views/MyComp.vue'
import Employees from '../views/Employee.vue'
import Employee from '../views/Emp.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/mycomp',
    name: 'MyComp',
    component: MyComp
  },
  {
    path:'/getEmployees',
    name:'Employees',
    component: Employees
  },
  {
    path:'/employee/:eid/:ename/:edesig',
    name:'Emp',
    component:Employee
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
