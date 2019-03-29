import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesztMainPageComponent } from './components/teszt-main-page/teszt-main-page.component';
import { RegisterPopUpComponent } from './components/register-pop-up/register-pop-up.component';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';

const routes: Routes = [
  {path: '', component:LoggedOutComponent},
  {path: 'loggedin', component: TesztMainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
