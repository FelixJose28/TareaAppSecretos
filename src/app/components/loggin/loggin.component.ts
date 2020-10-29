import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  user = {
    correo: '',
    clave: ''
  }
  ngOnInit(): void {
  }
  registrarCuenta(){
    this.router.navigate(['registro'])
  }
  logginUser(){
    this.authService.authlogearse(this.user)
      .subscribe(
        res =>{
          console.log(res)
          this.router.navigate(['/todosecretos'])
          localStorage.setItem('token',res['token'])

        },
        err => console.log(err)
      )
  }

}
