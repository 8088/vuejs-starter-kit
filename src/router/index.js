import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import PageA from '@/pages/group/PageA'
import PageA1 from '@/pages/group/PageA1'
import PageA2 from '@/pages/group/PageA2'
import PageB from '@/pages/group/PageB'
import PageC from '@/pages/group/PageC'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home/pagea'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children:[
                { path: '/home/pagea', name: 'pagea', component: PageA, children: PageA.data().routes},
                { path: '/home/pageb', name: 'pageb', component: PageB},
                { path: '/home/pagec', name: 'pagec', component: PageC}
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/test',
            name: 'test',
            component: PageA1
        }
    ]
})
