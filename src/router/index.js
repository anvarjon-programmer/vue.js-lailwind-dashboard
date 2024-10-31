import DawnLoadPage from "@/pages/DawnLoadPage.vue";
import HomePage from "@/pages/HomePage.vue";
import DashboardPage from "@/pages/master/DashboardPage.vue";
import MessagesPage from "@/pages/MessagesPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: DashboardPage,
    children:[
      {
        name: 'Home',
        path: '/home',
        component: HomePage,
      },
      {
        name: 'Profile', 
        path: '/profile',
        component: ProfilePage,
      },
      {
        name: 'Messages', 
        path: '/messages',
        component: MessagesPage,
      },
      {
        name: 'Dowload', 
        path: '/dowload',
        component: DawnLoadPage,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
