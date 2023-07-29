import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        isPublic: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        // marks this route has public and not require a logged user
        isPublic: true
      }
    }
  ]
})

const isPublicRoute = (route) => {
  console.log(route)
  return route.meta.isPublic
}

/**
 * @todo Add logic to confirm if the user has the needed permissions in order to access to the route
 * @param {Object} route
 * @param {Object} user
 * @returns
 */
const hasPermissionsOverNextRoute = (route, user) => {
  return false
}

router.beforeEach(async (to, from) => {
  if (isPublicRoute(to)) return

  const canAccess = hasPermissionsOverNextRoute(to)
  /**
   * @todo configure to redirect to proper login page
   */
  if (!canAccess) return { name: 'login', query: { redirect: from.fullPath } }
})

export default router
