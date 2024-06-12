import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { canActivateChild } from './guards/auth.guard';

export const appRoutes: Route[] = [{ path: 'login', component: LoginComponent }, {
  path: 'register',
  component: RegisterComponent
},
  { path: 'timesheet', component: TimesheetComponent, canActivate: [canActivateChild] }, {
    path: '**',
    redirectTo: '/login'
  }];
