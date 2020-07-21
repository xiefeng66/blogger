import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import About from '../views/About.vue'
import Listpic from '../views/Listpic.vue'
import Newslistpic from '../views/Newslistpic.vue'
import Pagetable from '../views/Pagetable.vue'
import Compile from '../views/Compile.vue'



// 测试
import Ceshi from '../views/Ceshi.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Index
  },
  {
    path: '/About',
    component: About
  },
  {
    path: '/Listpic',
    component: Listpic
  },
  {
    path: '/Newslistpic',
    component: Newslistpic
  },
  {
    path: '/Pagetable',
    component: Pagetable
  },
  {
    path: '/Compile',
    component: Compile
  },
  {
    path: '/Ceshi',
    component: Ceshi
  }
]
// 存在router index.js下   是初始路径没有#号
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router