import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SignupComponent } from './signup/signup.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    {
        path: 'aboutus',
        component: AboutusComponent,
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'privacy',
        component: PrivacyComponent,
    },
    {
        path: 'loginform/:i',
        component: LoginformComponent,
    },
    {
        path: '**',
        component: PnfComponent,
    },
];
