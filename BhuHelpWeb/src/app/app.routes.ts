import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'login',loadChildren:()=>import('./components/auth/components/login/login.routes').then(mod=>mod.rotes)
    },
    {
        path:'bhu-info',loadChildren:()=>import('./components/bhuinfo/components/bhuinfo/bhuinfo.routes').then(mod=>mod.routes)
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    }
];
