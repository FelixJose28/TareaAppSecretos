import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL ='http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }

  authregistrar(user){
    return this.http.post<any>(this.URL+'/registrar',user);
  }
  authlogearse(user){
    return this.http.post<any>(this.URL+'/login',user);
  }

}
