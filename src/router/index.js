import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useLoginStore } from '../stores/login'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        isPublic: false
      }
    },
    {
      path: '/shop',
      component: () => import('../layouts/ShopLayout.vue'),
      children: [
        {
          path: '',
          name: 'shop',
          component: () => import('../views/ShopView.vue'),
          children: []
        }
      ],
      meta: {
        isPublic: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),

      /**
       * Passing props in route config to decouple pages and views from routes
       * @see https://router.vuejs.org/guide/essentials/passing-props.html
       * @param {*} route
       * @returns
       */
      props: (route) => route.query,
      meta: {
        // marks this route has public and not require a logged user
        isPublic: true
      }
    }
  ]
})

const isPublicRoute = (route) => {
  return route.meta.isPublic
}

/**
 * @todo Add logic to confirm if the user has the needed permissions in order to access to the route
 * @param {Object} route
 * @param {Object} user
 * @returns
 */
const hasPermissionsOverNextRoute = (route, user) => {
  const loginStore = useLoginStore()

  return loginStore.isLogged
}

router.beforeEach(async (to, from) => {
  if (isPublicRoute(to)) return

  const canAccess = hasPermissionsOverNextRoute(to)
  /**
   * @todo configure to redirect to proper login page
   */

  if (!canAccess) return { name: 'login', query: { redirect: to.fullPath } }
})

export default router
