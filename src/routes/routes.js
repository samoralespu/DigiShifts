import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [{
        path: '/',
        redirect: 'ClientQueue',
        component: DashboardLayout,
        children: [{
                path: '/ClientQueue',
                name: 'Cliente Queue',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/ClientQueue.vue')
            },
            {
                path: '/AdminQueue',
                name: 'Admin Queue',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/AdminQueue.vue')
            },
            {
                path: '/ClientRequest',
                name: 'Client Request',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/ClientRequest.vue')
            },
            {
                path: '/AdminStands',
                name: 'Admin Stands',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/AdminStands.vue')
            },
        ]
    },

];

export default routes;