import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: '/', component: () => import(/*webpackChunkName:"ListPage"*/  '../modulos/pokemon/pages/ListPage') },
    { path: '/about', component: () => import(/*webpackChunkName:"AboutPage"*/  '../modulos/pokemon/pages/AboutPage') },
    {
        path: '/:id',
        name: 'pokemon-id',
        component: () => import(/*webpackChunkName:"PokemonPage"*/  '../modulos/pokemon/pages/PokemonPage'),
        props: (route) => {
            // console.log(route)
            const id = Number(route.params.id)
            return isNaN(id) ? { id: 1 } : { id }
        }
    },
    { path: '/:pathMatch(.*)*', component: () => import(/*webpackChunkName:"NoPageFound"*/  '../modulos/shared/pages/NoPageFound') },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router