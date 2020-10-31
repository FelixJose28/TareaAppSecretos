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
    usuario: localStorage.getItem('token')

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
      console.log(res)
      console.log(localStorage.getItem('token'['id']))
    },err=>{console.log(err)
            console.log(localStorage.getItem('token'['id']))})
  }

  pruebam(){
    console.log(this.secretosService.verId())
  }


}
