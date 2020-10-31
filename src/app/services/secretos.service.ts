import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SecretosService {

  constructor(
    private http: HttpClient
  ) { }

    private URL = 'http://127.0.0.1:8000/api';


    authgetSecreto(){
      return this.http.get<any>(this.URL+ '/verSecretos?token='+localStorage.getItem('token'))
    }
    authregistrarSecreto(secreto){
      return this.http.post<any>(this.URL+'/usuario/registrarSecreto/',secreto)
    }
    verId(){
      return localStorage.getItem('token')
    }









    authdeleteSecreto(id){
      return this.http.delete<any>(this.URL +'/usuario/registrarSecreto/'+id+'?token='+localStorage.getItem('token'))
    }
    // authdeleteSecreto(id){
      // return this.http.delete<any>(this.URL +'/usuario/registrarSecreto/'+id+'?token='+localStorage.getItem('token'))
    // }
}
