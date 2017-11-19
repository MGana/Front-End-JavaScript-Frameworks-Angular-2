import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';


@Injectable()
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    //return Observable.of(DISHES).delay(2000).toPromise();
    return Observable.of(DISHES).delay(2000);  
  }
  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
  }
  getFeaturedDish(): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
  }
  getDishIds(): Observable<number[]> {
    return Observable.of(DISHES.map(dish => dish.id ));
  } 
}

//We will now let our services return Observables, and we will update the components to make use of Observables. The reason, as I mentioned, is because when we update our services to use the HTTP service to go to a server to fetch the data, then we would note that in Angular, the HTTP methods will return Observables. And, the services can simply pass the Observables on to our components and let the components subscribe to these Observables and make use of the data that they obtained thereby. 