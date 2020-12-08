import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import{Config} from './modal';


@Injectable({
  providedIn: 'root'
})
export class PeopleListService {
  private baseURL='https://swapi.dev/api/';
  private peopleUrl = 'people/1/';

  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';
// getConfig() {
//   return this.http.get(this.configUrl);

  
// }

getConfig() {
  // now returns an Observable of Config
  return this.http.get<Config>(this.baseURL+this.peopleUrl)
  .pipe(
    catchError(this.handleError<Config>('getPeople'))
  );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  log(arg0: string) {
    throw new Error("Method not implemented.");
  }
}
