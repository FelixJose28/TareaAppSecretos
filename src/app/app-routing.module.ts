import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogginComponent } from './components/loggin/loggin.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ModificardatosusuarioComponent } from './components/modificardatosusuario/modificardatosusuario.component';
import { CambiarclaveComponent } from './components/cambiarclave/cambiarclave.component';
import { RegistrarsecretoComponent } from './components/registrarsecreto/registrarsecreto.component';
import { TodosecretosComponent } from './components/todosecretos/todosecretos.component';
import { AuthGuard} from './auth.guard'

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
  component: ModificardatosusuarioComponent,
  canActivate: [AuthGuard]
},
{
  path: 'cambiarclave',
  component: CambiarclaveComponent,
  canActivate: [AuthGuard]
},
{
  path: 'registrarsecreto',
  component: RegistrarsecretoComponent,
  canActivate: [AuthGuard]
},
{
  path: 'todosecretos',
  component: TodosecretosComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
