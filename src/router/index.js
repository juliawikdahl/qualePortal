import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'
// import signinPage from '../views/signinPage.vue'
import itemPage from '../views/itemPage.vue'
import categoryPage from '../views/categoryPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: homePage,
  },
  // {
  //   path: '/login',
  //   component: signinPage,
  
  // },
  {
    name: 'category',
    path: '/category/:name',
    component: categoryPage,
  },
  {
    name: 'item',
    path: '/item/:id',
    component: itemPage,
  }
]

const router = new VueRouter({
  routes
})

export default router


