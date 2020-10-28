import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogginComponent } from './componentes/loggin/loggin.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
{path: '',component: LogginComponent},
{path: 'loggin', component: LogginComponent},
{path: 'registro', component: RegistroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
