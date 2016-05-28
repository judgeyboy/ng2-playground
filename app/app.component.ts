import {Component} from '@angular/core';

import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { NavigationComponent } from './navigation.component';


@Component({
    selector: 'my-app',
    template: `
        <navigation></navigation>
        <h1>My First Angular 2 App</h1>
        <router-outlet></router-outlet>
    `,
    directives: [
        RouterOutlet,
        NavigationComponent
    ]
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/login', name: 'Login', component: LoginComponent },
    { path: '/Register', name: 'Register', component: RegisterComponent }
])
export class AppComponent { }