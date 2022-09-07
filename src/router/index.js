import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'
import signinPage from '../views/signinPage.vue'
import itemPage from '../views/itemPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/signin',
    component: signinPage,
  
  },
  {
    path: '/item',
    component: itemPage,
  
  }
]

const router = new VueRouter({
  routes
})

export default router


