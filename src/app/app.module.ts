import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

/**Material*/
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

/** Rutas */
import { FeatureRoutingModule } from './app.routes';

/** Servicios */
import { LoginService } from './components/login/login.service';


/**Components*/
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ApiService } from './services/api.service';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FeatureRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
