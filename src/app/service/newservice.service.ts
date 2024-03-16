import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  constructor(private _http: HttpClient) { }
  newApiUrl = "https://newsapi.org/v2/everything?q=apple&from=2024-03-13&to=2024-03-13&sortBy=popularity&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2"
  topHeading():Observable<any>
  {
    return this._http.get(this.newApiUrl);
  }
  newApiTechnology = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-14&sortBy=publishedAt&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2"
  topTechnology(): Observable<any>
  {
    return this._http.get(this.newApiTechnology);
  }
  newApiBusiness = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2"
  topBusiness():Observable<any>
  {
    return this._http.get(this.newApiBusiness);
  }
  newApiSource = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2"
  topSource():Observable<any>
  {
    return this._http.get(this.newApiSource);
  }
  newApiDomain = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=609430c41dcb4ba0bddfd2dc5b4012a2"
  topDomain():Observable<any>{
    return this._http.get(this.newApiDomain)
  }
}
