import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateCurriculum from '../views/CreateCurriculum.vue';
import DisplayCurriculum from '../views/DisplayCurriculum.vue';
import DisplayCurricula from '../views/DisplayCurricula.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curricula',
    name: 'curricula',
    component: DisplayCurricula
  },
  {
    path: '/curricula/:id',
    name: 'curriculum',
    component: DisplayCurriculum
  },
  {
    path: '/create',
    name: 'create',
    component: CreateCurriculum
  }
]

const router = new VueRouter({
  routes
})

export default router
