import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [{
        path: '/',
        redirect: 'ClientQueu',
        component: DashboardLayout,
        children: [{
            path: '/ClientQueu',
            name: 'Cliente Queu',
            component: () =>
                import ( /* webpackChunkName: "demo" */ '../views/ClientQueu.vue')
        }, ]
    },

];

export default routes;