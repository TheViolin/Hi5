import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FirstViewComponent } from './components/first-view/first-view.component';
import { ContactComponent } from './components/contact/contact.component';
import { OfferComponent } from './components/offer/offer.component';
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
    RegisterPopUpComponent,
    NavbarComponent,
    ClientsComponent,
    FirstViewComponent,
    ContactComponent,
    OfferComponent,
    TesztMainPageComponent
  ],
  imports: [
    NgbModule.forRoot(),
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [RegisterService, NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterPopUpComponent
  ]
})
export class AppModule { }
