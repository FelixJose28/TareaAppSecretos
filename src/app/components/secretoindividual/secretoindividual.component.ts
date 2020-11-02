import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Isecreto } from 'src/app/interfaces/isecreto';
import { SecretosService } from 'src/app/services/secretos.service';

@Component({
  selector: 'app-secretoindividual',
  templateUrl: './secretoindividual.component.html',
  styleUrls: ['./secretoindividual.component.css']
})
export class SecretoindividualComponent implements OnInit {

  @Input() secre: Isecreto

  @Output() borrar = new EventEmitter<number>()

  constructor(private secretoService: SecretosService) { }

  ngOnInit(): void {
  }
  Borrar(id) {
    this.borrar.emit(id)
  }
}
