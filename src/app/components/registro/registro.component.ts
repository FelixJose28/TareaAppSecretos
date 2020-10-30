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
    clave: '',
    repetirclave:''
  }

  constructor(private authService: AuthService,
              private router:Router
              ) { }

  ngOnInit(): void {
  }
  registrarUser(){
    if(this.user.clave === this.user.repetirclave){
        this.authService.authregistrar(this.user)
          .subscribe(
            res => {
              if(res['StatusCode'] == 200)
              console.log(res)
              this.router.navigate(['/loggin'])
            }
        ,
          err => console.log(err)
        )
    }else{
      console.log('contrasenas no validas')
    }
  }
}
