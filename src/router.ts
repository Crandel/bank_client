import Vue from 'vue';
import Router from 'vue-router';

import App from './views/App.vue';
import Home from './views/Home.vue';
import NewTransaction from './views/NewTransaction.vue';
import Account from './views/Account.vue';
import NewAccount from './views/NewAccount.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';

import auth from './components/auth';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/', component: Home, name: 'home', beforeEnter: (to, from, next) => {
                if (auth.user.authenticated) {
                    next();
                } else {
                    to = {name: 'login'};
                    next(to);
                }
            },
        }, {
            path: '/transaction', component: NewTransaction,
            name: 'transaction', beforeEnter: (to, from, next) => {
                if (auth.user.authenticated) {
                    next();
                } else {
                    to = {name: 'login'};
                    next(to);
                }
            },
        }, {
            path: '/account/:AcId', component: Account,
            name: 'account', beforeEnter: (to, from, next) => {
                if (auth.user.authenticated) {
                    next();
                } else {
                    to = {name: 'login'};
                    next(to);
                }
            },
        }, {
            path: '/account/new', component: NewAccount,
            name: 'new-account', beforeEnter: (to, from, next) => {
                if (auth.user.authenticated) {
                    next();
                } else {
                    to = {name: 'login'};
                    next(to);
                }
            },
        }, {
            path: '/login', component: Login, name: 'login',
        }, {
            path: '/signup', component: Signup, name: 'signup',
        },
        {
            path: '*', redirect: '/',
        },
    ],
});
