import {createRouter, createWebHistory} from "vue-router"

import Cards from "../pages/deals/Cards.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/deals',
            name: 'deals',
            component: Cards,
            meta: {name: 'balance', requiresAuth: true, requiresOrg: true}
        },
    ]
})

router.beforeEach(async (to, from) => {

})

export default router
