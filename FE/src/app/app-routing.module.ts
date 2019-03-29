import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesztMainPageComponent } from './components/teszt-main-page/teszt-main-page.component';
import { RegisterPopUpComponent } from './components/register-pop-up/register-pop-up.component';

const routes: Routes = [
  //{path: 'teszt', component: RegisterPopUpComponent}, 
  //{path: '', component: TesztMainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
