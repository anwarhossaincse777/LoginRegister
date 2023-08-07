import { createRouter, createWebHistory } from 'vue-router'

const Register=()=>import("../views/RegisterView.vue")
const Login=()=>import("../views/LoginView.vue")

const Welcome=()=>import("../views/WelcomeView.vue")

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/register',
      name: 'register',
      component: Register
    },

    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },


  ]
})

export default router
