import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL ='http://127.0.0.1:8000/api'

  constructor(private http: HttpClient,
              private router: Router) { }

  authregistrar(user){
    return this.http.post<any>(this.URL+'/registrar',user);
  }
  authlogearse(user){
    return this.http.post<any>(this.URL+'/login',user);
  }
  authestaLoggeado(){
    if(localStorage.getItem('token') != null){
      return true
    }
  }
  authGetToken(){
    return localStorage.getItem('token')
  }
  authLogout(){
    if(window.confirm('Desea cerrar la session??')){
      localStorage.removeItem('token')
      this.router.navigate['/loggin']
    }
  }

}
