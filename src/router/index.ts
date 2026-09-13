import { createRouter, createWebHistory } from 'vue-router'
import CoursesView from '../views/CoursesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition ?? { top: 0 }
  },
  routes: [
    { path: '/about', redirect: '/teachers' },
    { path: '/contacts', redirect: '/teachers' },
    {
      path: '/',
      name: 'courses',
      alias: '/courses',
      component: CoursesView,
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('../views/TeachersView.vue'),
    },
  ],
})

export default router
