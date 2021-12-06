import Vue from 'vue'
import VueRouter from "vue-router"


const Home = () => import('../views/home/Home.vue')
const Management = () => import('../views/management/Management')
const Rank = () => import('../views/rank/Rank')
const SearchByIndex = () => import('../views/searchByIndex/SearchByIndex')
const Login = () => import('../views/login/Login')


Vue.use(VueRouter)


const routes = [
    {
        path: '/home',
        component:Home
    },
    {
        path: '/management',
        component: Management
    },
    {
        path: '/rank',
        component: Rank
    },
    {
        path: '/searchByIndex',
        component: SearchByIndex
    },


]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
