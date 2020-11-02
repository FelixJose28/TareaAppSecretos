import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecretosService } from '../../services/secretos.service'


@Component({
  selector: 'app-todosecretos',
  templateUrl: './todosecretos.component.html',
  styleUrls: ['./todosecretos.component.css']
})
export class TodosecretosComponent implements OnInit {

  secret = []


  constructor(private router: Router,
              private secretoService: SecretosService) { }



  ngOnInit(): void {
    this.getSecretos()
  }
  registrarCuenta(){
    this.router.navigate(["/registrarsecreto"])
  }

  delete(id) {
    this.secretoService.authborrarSecreto(id).subscribe(
        res => {
          this.getSecretos()
          console.log(res)
        },
        err => console.log(err)
      )
  }

  getSecretos(){
    this.secretoService.authgetSecreto().subscribe(
      res => {
        this.secret = res.ApiSecretos
      },
      err => console.log(err)
    )
  }
}
