import { Injectable } from '@angular/core';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {HttpClientModule, HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
import { throwError as _throw } from 'rxjs';
import { interfaceDetail } from 'interfaceforservice';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _url:string ="http://localhost:5001/api/Auth/";
  httpClient: any;
  
  constructor(private http:HttpClient) { }

  getDetail():Observable<interfaceDetail[]>{
    return this.http.get<interfaceDetail[]>(this._url);
  }

  delete(id):Observable<any>{
    return this.http.delete<interfaceDetail[]>(this._url+id);
  }

  postmethod(userdata){
        return this.http.post<any>(this._url,userdata,
          {
            headers:new HttpHeaders({
              'Content-Type':'application/json'
            })
          })
  }

  update(id:any,userdata):Observable<any>{
  console.log(id);
  return this.http.put<any>(this._url+id,userdata);
}

}
