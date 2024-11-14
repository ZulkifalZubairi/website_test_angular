import { Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'home', component: MainContentComponent },
    { path: 'about', component: AboutUsComponent },
    { path: '**', component: MainContentComponent },
];
