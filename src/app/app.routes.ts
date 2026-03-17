import { AddStory } from './pages/add-story/add-story';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Stories } from './pages/stories/stories';
import { Register } from './pages/register/register';

export const routes: Routes = [
{
    path: 'home',
    component: Home,
},
{
    path: 'about',
    component: About,
},
{
    path: 'contact',
    component: Contact,
},
{
    path: 'products',
    component: Products,
},
{
    path: 'stories',
    component: Stories,
},
{
    path: 'add-story',
    component: AddStory,
},
{
    path: 'register',
    component: Register,
},
];
