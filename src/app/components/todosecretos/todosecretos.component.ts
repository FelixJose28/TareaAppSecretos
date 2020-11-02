import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecretosService } from '../../services/secretos.service'
import { Isecreto } from '../../interfaces/isecreto';

@Component({
  selector: 'app-todosecretos',
  templateUrl: './todosecretos.component.html',
  styleUrls: ['./todosecretos.component.css']
})
export class TodosecretosComponent implements OnInit {

  secret: Isecreto[] = []


  constructor(private router: Router,
              private secretoService: SecretosService) { }



  ngOnInit(): void {
    this.getSecretos()
  }
  registrarCuenta(){
    this.router.navigate(["/registrarsecreto"])
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
