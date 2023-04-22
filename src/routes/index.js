import MyHome from '@/pages/MyHome';
import MySearch from '@/pages/MySearch';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'myHomePage',
    component: MyHome,
  },
  {
    path: '/search',
    name: 'mySearchPage',
    component: MySearch,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
