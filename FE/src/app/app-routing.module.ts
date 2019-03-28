import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesztMainPageComponent } from './components/teszt-main-page/teszt-main-page.component';

const routes: Routes = [
  {path: '', component: TesztMainPageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
