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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TesztMainPageComponent } from './components/teszt-main-page/teszt-main-page.component';
import { RegisterService } from './services/Register/register.service';
import { HttpClientModule } from '@angular/common/http';
import { LoggedInComponent } from './components/logged-in/logged-in.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientsComponent,
    FirstViewComponent,
    ContactComponent,
    OfferComponent,
    TesztMainPageComponent,
    LoggedInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
