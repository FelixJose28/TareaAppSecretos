import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todosecretos',
  templateUrl: './todosecretos.component.html',
  styleUrls: ['./todosecretos.component.css']
})
export class TodosecretosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre = 'Felix'
  getNombre(){
    return this.nombre
  }
  col = 'text-success'
  keyUpMethod(){
      console.log('Presiono enter')
  }

}
