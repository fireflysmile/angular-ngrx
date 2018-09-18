import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class DataService {

  constructor(private http: HttpClient) {}

  getData(url): Observable<any>{
    return this.http.get(url).pipe(map(res => res))
  }

}
