import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'
import signinPage from '../views/signinPage.vue'
import itemPage from '../views/itemPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: homePage,
  },
  {
    path: '/login',
    component: signinPage,
  
  },
  {
    name: 'item',
    path: '/item/:name',
    component: itemPage,
  }
]

const router = new VueRouter({
  routes
})

export default router


