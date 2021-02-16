import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { AdditionalsComponent } from './additionals/additionals.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', redirectTo:'/home', pathMatch: 'full'},
	{ path: 'about-me', component: AboutMeComponent},
	{ path: 'resume', component: ResumeComponent},
	{ path: 'additionals', component: AdditionalsComponent},
	{ path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
