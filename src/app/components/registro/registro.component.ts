import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user= {
    correo: '',
    nombre: '',
    clave: ''
  }

  constructor(private authService: AuthService,
              private router:Router
              ) { }

  ngOnInit(): void {
  }
  registrarUser(){
    this.authService.signUp(this.user)
      .subscribe(
        res => {
          console.log(res)
          this.router.navigate(['/loggin'])
        },
        err => console.log(err)
      )
  }
}
