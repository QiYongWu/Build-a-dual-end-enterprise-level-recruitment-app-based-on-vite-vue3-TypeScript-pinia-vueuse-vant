import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('../views/login/index.vue'),
    },
    {
        path: '/login/privacy-policy',
        component: () => import('../views/login/privacyPolicy.vue')
    },
    {
        path: '/login/serviceAgree',
        component: () => import('../views/login/serviceAgree.vue')
    },
    {
        path: '/message',
        component: () => import('../views/message/index.vue')
    },
    {
        path: '/message/system-details',
        component: () => import('../views/message/systemDetails.vue')
    },
    {
        path: '/message/system-list',
        component: () => import('../views/message/systemList.vue')
    },
    {
        path: '/message/talk',
        component: () => import('../views/message/talk.vue')
    },
    {
        path: '/talent',
        component: () => import('../views/talent/index.vue')
    },
    {
        path: '/talent/details',
        component: () => import('../views/talent/details.vue')
    },
    {
        path: '/task',
        component: () => import('../views/task/index.vue')
    },
    {
        path: '/task/company-source',
        component: () => import('../views/task/companySource.vue')
    },
    {
        path: '/task/details',
        component: () => import('../views/task/details.vue')
    },
    {
        path: '/task/search',
        component: () => import('../views/task/search.vue')
    },
    {
        path: '/my',
        component: () => import('../views/my/index.vue')
    },
    {
        path: '/my/account',
        component: () => import('../views/my/account/index.vue')
    },
    {
        path: '/my/account/advance',
        component: () => import('../views/my/account/advance.vue')
    },
    {
        path: '/my/account/coin-explain',
        component: () => import('../views/my/account/coinExplain.vue')
    },
    {
        path: '/my/account/deposit-explain',
        component: () => import('../views/my/account/depositExplain.vue')
    },
    {
        path: '/my/collect',
        component: () => import('../views/my/collect/index.vue')
    },
    {
        path: '/my/feedback',
        component: () => import('../views/my/feedback/index.vue')
    },
    {
        path: '/my/resume',
        component: () => import('../views/my/resume/index.vue')
    },
    {
        path: '/my/resume/preview',
        component: () => import('../views/my/resume/preview.vue')
    },
    {
        path: '/my/set',
        component: () => import('../views/my/set/index.vue')
    },
    {
        path: '/my/user',
        component: () => import('../views/my/user/index.vue')
    },
    {
        path: '/my/user/auth-real',
        component: () => import('../views/my/user/authReal.vue')
    },
    {
        path: '/my/user/certified',
        component: () => import('../views/my/user/certified.vue')
    },
    {
        path: '/my/user/identity-switch',
        component: () => import('../views/my/user/identitySwitch.vue')
    },
]

const history = createWebHistory()

export const router = createRouter({
    history,
    routes
})