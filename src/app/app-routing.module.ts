
import { UserCComponent } from './user-c/user-c.component';
import { UserBComponent } from './user-b/user-b.component';
import { UserAComponent } from './user-a/user-a.component';
import { AuthGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserAGuard } from './user-a.guard';
import { UserBGuard } from './user-b.guard';
import { UserCGuard } from './user-c.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard] ,component: DashboardComponent, children: [
    { path: 'userA', component: UserAComponent, canActivate: [UserAGuard]},
    { path: 'userB', component: UserBComponent, canActivate: [UserBGuard]},
    { path: 'userC', component: UserCComponent, canActivate: [UserCGuard]},
  ] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
