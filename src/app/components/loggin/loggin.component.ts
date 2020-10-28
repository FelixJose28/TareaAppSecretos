import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  registrarCuenta(){
    this.router.navigate(['registro'])
  }

}
