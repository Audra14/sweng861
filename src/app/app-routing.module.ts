import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealplanComponent } from './mealplan/mealplan.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'mealplan', component: MealplanComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
