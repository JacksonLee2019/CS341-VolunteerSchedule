import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/index';
import { ManagerComponent } from './manager/index';
import { VolunteerComponent } from './volunteer/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AdminGuard } from './_guards/index';
import { AuthGuard } from './_guards/index';
import { ManagerGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
    { path: 'volunteer', component: VolunteerComponent, canActivate: [AuthGuard]},
    { path: 'manager', component: ManagerComponent, canActivate: [ManagerGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);