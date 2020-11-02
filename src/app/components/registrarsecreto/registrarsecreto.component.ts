import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecretosService } from '../../services/secretos.service';

@Component({
  selector: 'app-registrarsecreto',
  templateUrl: './registrarsecreto.component.html',
  styleUrls: ['./registrarsecreto.component.css']
})
export class RegistrarsecretoComponent implements OnInit {


  secreto = {
    titulo:'',
    descripcion:'',
    valor_monetario:'',
    fecha:'',
    lugar:'',
    latylng:'',
    token: localStorage.getItem('token')

  }
  constructor(
    private router: Router,
    private secretosService: SecretosService
  ) { }

  ngOnInit(): void {
  }
  regitrarSecreto(){
    this.secretosService.authregistrarSecreto(this.secreto)
    .subscribe(res=>{
      if(res['Mensaje'] == 'secreto registrado'){
        this.router.navigate(['/todosecretos'])
      }
    },err=>{console.log(err)}
    )
  }
}
