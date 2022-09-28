import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'
import itemPage from '../views/itemPage.vue'
import categoryPage from '../views/categoryPage.vue'
import allCategoriesView from '../components/allCategoriesView.vue'

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
    component: allCategoriesView,
  },
  {
    name: 'undercategory',
    path: '/undercategory/:name',
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


