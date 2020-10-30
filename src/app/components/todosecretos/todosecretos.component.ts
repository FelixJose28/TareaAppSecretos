import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todosecretos',
  templateUrl: './todosecretos.component.html',
  styleUrls: ['./todosecretos.component.css']
})
export class TodosecretosComponent implements OnInit {

  constructor(private router: Router) { }

  secretos = []

  ngOnInit(): void {
  }
  registrarCuenta(){
    this.router.navigate(["/registrarsecreto"])
  }


}
