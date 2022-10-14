import Vue from 'vue'
import VueRouter from 'vue-router'
import itemPage from '../views/itemPage.vue'
import categoryPage from '../views/categoryPage.vue'
import allCategoriesView from '../itemViews/itemCategoriesView.vue'
import errorPage from '../views/errorPage.vue'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    name: '404error',
    path: 'notfound',
    component: errorPage,
  }
]

const router = new VueRouter({
  routes
})

export default router


