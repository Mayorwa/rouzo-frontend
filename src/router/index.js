import Vue from 'vue';
import VueRouter from 'vue-router';

//MIDDLEWARE
import VisitorGuard from './visitor-guard';
import AuthGuard from './auth-guard';
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "defaultContainer",
    component: () => import("@/layouts/default.vue"),
    redirect: {name: "Home",},
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import("@/views/Pages/home.vue"),
      },{
        path: '/faq',
        name: 'FAQ',
        component: () => import("@/views/Pages/faq.vue"),
      },{
        path: '/contact-us',
        name: 'Contact',
        component: () => import("@/views/Pages/contact.vue"),
      },
    ]
  },
  {
    path: "",
    name: "authContainer",
    component: () => import("@/layouts/auth.vue"),
    redirect: {name: "Login",},
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Auth/login.vue"),
        beforeEnter: VisitorGuard,
      },
      {
        path: '/investor',
        name: 'Investor',
        component: () => import("@/views/Auth/investor.vue"),
        beforeEnter: VisitorGuard,
      }
    ]
  },
  {
    path: "/dashboard",
    name: "investorContainer",
    component: () => import("@/layouts/investor.vue"),
    redirect: {name: "dashboardIndex",},
    beforeEnter: AuthGuard,
    children: [
      {
        path: 'home',
        name: 'dashboardIndex',
        component: () => import("@/views/Investor/index.vue"),
      },
      {
        path: 'settings',
        name: 'dashboardSettings',
        component: () => import("@/views/Investor/settings.vue"),
      },
      {
        path: 'referral',
        name: 'dashboardReferral',
        component: () => import("@/views/Investor/referral.vue"),
      },
      {
        path: 'stash',
        name: 'dashboardStash',
        component: () => import("@/views/Investor/savings.vue"),
      },
      {
        path: 'investment',
        name: 'dashboardInvestment',
        component: () => import("@/views/Investor/investment.vue"),
      },
      {
        path: 'investment/:id',
        name: 'dashboardOneInvestment',
        component: () => import("@/views/Investor/oneInvestment.vue"),
      },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active"
});

export default router;
