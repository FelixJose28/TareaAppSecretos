import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individualsecreto',
  templateUrl: './individualsecreto.component.html',
  styleUrls: ['./individualsecreto.component.css']
})
export class IndividualsecretoComponent implements OnInit {

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
