import Vue from 'vue'
import Router from 'vue-router'
import HomeHero from './views/HomeHero'
import ArticlePage from './views/ArticlePage'
import ArchivePage from './views/ArchivePage'
import TagsPage from './views/TagsPage'
import AboutPage from './views/AboutPage'
import AdminPage from './views/admin/AdminPage'
import EditorPage from './views/admin/EditorPage'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeHero
  },
  {
    path: '/article',
    name: 'Article',
    component: ArticlePage
},
{
  path: '/archive',
  name: 'Archive',
  component: ArchivePage
},
{
  path: '/tags',
  name: 'Tags',
  component: TagsPage
},
{
  path: '/me',
  name: 'About',
  component: AboutPage
},
{
  path: '/adminds',
  name: 'Admin',
  component: AdminPage
},
{
  path: '/editor',
  name: 'Editor',
  component: EditorPage
}
    
  ]
})
