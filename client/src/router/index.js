import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/layouts/main-page/mainpage'),
    redirect: { name: 'Homepage' },
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/homepage/Home')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/otherpage/RegisterView')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/otherpage/LoginView')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/otherpage/Profile')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    window.scrollTo(0, 0)
  }
})

export default router
