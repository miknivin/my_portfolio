import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAllCOuntries():Observable<any>{
    const url = "https://gist.githubusercontent.com/devhammed/78cfbee0c36dfdaa4fce7e79c0d39208/raw/07df5ed443941c504c65e81c83e6313473409d4c/countries.json"
    return this.httpClient.get(url);
  }

  postContact(contactData:{}):Observable<any>{
    return this.httpClient.post(`https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/cpQU9JiJ#generic-webhook`,contactData)
  }
}
