//angular module's
import {Injectable} from '@angular/core';
import {Observable, of, pipe} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
//components
import {Route} from "../../components/routes";
import {ROUTES} from "../../components/mock-routes";
import {MessageService} from "../messageServices/message.service";

@Injectable({
  providedIn: 'root'
})

export class RouteService {

  constructor(private messageService: MessageService, private http: HttpClient,) {
  }

  //routes with light rail & heavy rail
  private routeUrl = 'https://api-v3.mbta.com/routes/?filter%5Btype%5D=0,1';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private log(message: string) {
    this.messageService.add(`Route services: ${message}`);
  }

  getRoutes(): Observable<Route[]> {
    // const routes = of(ROUTES)
    this.messageService.add('Route Services: fetched Route');
    // return routes;

    //routes from api server
    const r = this.http.get<Route[]>(this.routeUrl);
    console.log(r)
    return r
      .pipe(
        map((routes: Route[]) => {
          return routes.map(routes=>(
            {
             attributes : routes.attributes,
              id:routes.id
            }
          ))
        }),
        tap(_ => this.log('fetched routes')),
        catchError(this.handleError<Route[]>('getRoutes', []))
      )

  }

  getRoute(name: string): Observable<Route> {
    // assuming that route with name always exists
    const route = ROUTES.find(r => r.attributes.long_name === name)!;
    this.messageService.add(`Route services: fetched route name=${name}`);
    return of(route);
  }

//handling operations which going to fail
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} échoué: ${error.message}`);
      //keeping the app running
      return of(result as T);
    };
  }
}
