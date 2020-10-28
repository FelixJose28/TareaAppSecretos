import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogginComponent } from './components/loggin/loggin.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModificardatosusuarioComponent } from './components/modificardatosusuario/modificardatosusuario.component';
import { CambiarclaveComponent } from './components/cambiarclave/cambiarclave.component';

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
},
{
  path: 'cambiarclave',
  component: CambiarclaveComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
