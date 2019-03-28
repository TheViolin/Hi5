import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesztMainPageComponent } from './components/teszt-main-page/teszt-main-page.component';
import { RegisterService } from './services/Register/register.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPopUpComponent } from './components/register-pop-up/register-pop-up.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TesztMainPageComponent,
    RegisterPopUpComponent
  ],
  imports: [
    NgbModule.forRoot(),
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RegisterService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterPopUpComponent
  ]
})
export class AppModule { }
