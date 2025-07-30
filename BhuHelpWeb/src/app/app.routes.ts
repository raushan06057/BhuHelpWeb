import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'login',loadChildren:()=>import('./components/auth/components/login/login.routes').then(mod=>mod.rotes)
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    }
];
