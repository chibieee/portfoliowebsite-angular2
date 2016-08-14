import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/pages/projects.component';
import { AboutComponent } from './components/pages/about.component';

@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
    <footer></footer>
    `,
    directives: [ROUTER_DIRECTIVES, NavbarComponent, ProjectsComponent, AboutComponent]
})

export class AppComponent{ }