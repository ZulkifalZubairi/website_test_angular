import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { BookDemoComponent } from './components/book-demo/book-demo.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms-and-condition', component: TermsAndConditionsComponent },
    { path: 'book-demo', component: BookDemoComponent },
    { path: '**', component: MainContentComponent },
];