import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogginComponent } from './components/loggin/loggin.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModificardatosusuarioComponent } from './components/modificardatosusuario/modificardatosusuario.component';

const routes: Routes = [
{
  path: '',
  component: LogginComponent
},
{
  path: 'loggin',
  component: LogginComponent
},
{
  path: 'registro',
  component: RegistroComponent
},
{
  path: 'modificardatosusuario',
  component: ModificardatosusuarioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
