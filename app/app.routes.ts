import { provideRouter, RouterConfig } from '@angular/router';

import { ProjectsComponent } from './components/pages/projects.component';
import { SkillsComponent } from './components/pages/skills.component';
import { AboutComponent } from './components/pages/about.component';
import { ContactComponent } from './components/pages/contact.component';


const routes: RouterConfig = [
    { path:'', component: ProjectsComponent},
    { path: 'about', component: AboutComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'contact', component: ContactComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];