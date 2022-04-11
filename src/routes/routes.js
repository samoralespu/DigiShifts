import DashboardLayout from '@/views/Layout/DashboardLayout.vue';


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
            {
                path: '/AdminStandsLocal',
                name: 'Admin Stands local',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/AdminStandsLocal.vue')
            },
            {
                path: '/AdminQueueLocal',
                name: 'Admin Queue local',
                component: () =>
                    import ( /* webpackChunkName: "demo" */ '../views/AdminQueueLocal.vue')
            },
        ]
    },

];

export default routes;