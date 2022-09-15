import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'
import signinPage from '../views/signinPage.vue'



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
  
]

const router = new VueRouter({
  routes
})

export default router


