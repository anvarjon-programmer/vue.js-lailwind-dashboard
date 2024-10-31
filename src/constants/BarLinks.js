import DawnLoadPage from "@/pages/DawnLoadPage.vue";
import HomePage from "@/pages/HomePage.vue";
import MessagesPage from "@/pages/MessagesPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";

export  const data =[
  {
    name:"Home",
    path:'/',
    component:HomePage
  },
  {
    name:"Profile",
    path:'/profile',
    component:ProfilePage
  },
  {
    name:"Messages",
    path:'/messages',
    component:MessagesPage
  },
  {
    name:"Dowload",
    path:'/dowload',
    component:DawnLoadPage
  },
]