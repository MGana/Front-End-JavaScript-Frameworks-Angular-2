import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';

@Injectable()
export class DishService {

  constructor(private http: Http,
              private processHttpmsgService: ProcessHttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get(baseURL + 'dishes')
                    .map(res => { return this.processHttpmsgService.extractData(res); })
                    .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getDish(id: number): Observable<Dish> {
    return  this.http.get(baseURL + 'dishes/'+ id)
                    .map(res => { return this.processHttpmsgService.extractData(res); })
                    .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get(baseURL + 'dishes?featured=true')
                    .map(res => { return this.processHttpmsgService.extractData(res)[0]; })
                    .catch(error => { return this.processHttpmsgService.handleError(error); });
  }

  getDishIds(): Observable<number[]> {
    return this.getDishes()
      .map(dishes => { return dishes.map(dish => dish.id) })
      .catch(error => { return error; } );
  }
}

//We will now let our services return Observables, and we will update the components to make use of Observables. The reason, as I mentioned, is because when we update our services to use the HTTP service to go to a server to fetch the data, then we would note that in Angular, the HTTP methods will return Observables. And, the services can simply pass the Observables on to our components and let the components subscribe to these Observables and make use of the data that they obtained thereby. 