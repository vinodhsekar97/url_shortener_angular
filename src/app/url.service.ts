import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  postLongUrl(data): Observable<any>{
    return this.http.post("https://loh-url-shortener.herokuapp.com/longurl",data);
  }

  getUrls():Observable<any>{
    return this.http.get("https://loh-url-shortener.herokuapp.com/url");
  }
  deleteUrl(data):Observable<any>{
    console.log(data);
    return this.http.delete("https://loh-url-shortener.herokuapp.com/"+data);
  }
}
