import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secretoindividual',
  templateUrl: './secretoindividual.component.html',
  styleUrls: ['./secretoindividual.component.css']
})
export class SecretoindividualComponent implements OnInit {

  @Input() secre = {
    titulo:'',
    descripcion:'',
    valor_monetario:'',
    fecha:'',
    lugar:'',
    latylng:'',
    token: localStorage.getItem('token')
  }

  @Output() borrar = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }
  Borrar(id) {
    this.borrar.emit(id)
  }
}
