import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user= {
    correo: '',
    nombre: '',
    contrasena: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  registrarUser(){
    console.log(this.user)
  }
}
