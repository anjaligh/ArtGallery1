import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MuralComponent } from './mural/mural.component';
import { AcrylicComponent } from './acrylic/acrylic.component';
import { WatercolorComponent } from './watercolor/watercolor.component';
import { AbstractComponent } from './abstract/abstract.component';
import { NftComponent } from './nft/nft.component';
import { PastelComponent } from './pastel/pastel.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MuralComponent,
    AcrylicComponent,
    WatercolorComponent,
    AbstractComponent,
    NftComponent,
    PastelComponent,
    AboutusComponent,
    ContactusComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
