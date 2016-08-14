"use strict";
var router_1 = require('@angular/router');
var projects_component_1 = require('./components/pages/projects.component');
var skills_component_1 = require('./components/pages/skills.component');
var about_component_1 = require('./components/pages/about.component');
var contact_component_1 = require('./components/pages/contact.component');
var routes = [
    { path: '', component: projects_component_1.ProjectsComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'skills', component: skills_component_1.SkillsComponent },
    { path: 'contact', component: contact_component_1.ContactComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map