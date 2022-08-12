import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Teachers from '../views/Teachers.vue'
import Students from '../views/Students.vue'
import EachOne from '../views/EachOne.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: Teachers
  },
  {
    path: '/students',
    name: 'students',
    component: Students
  },
  {
    path: '/each',
    name: 'each',
    component: EachOne
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
