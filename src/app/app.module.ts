import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { ModificardatosusuarioComponent } from './components/modificardatosusuario/modificardatosusuario.component';
import { CambiarclaveComponent } from './components/cambiarclave/cambiarclave.component';
import { TodosecretosComponent } from './components/todosecretos/todosecretos.component';
import { RegistrarsecretoComponent } from './components/registrarsecreto/registrarsecreto.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LogginComponent,
    ModificardatosusuarioComponent,
    CambiarclaveComponent,
    TodosecretosComponent,
    RegistrarsecretoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
