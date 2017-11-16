import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable()
export class DishService {

  constructor() { }

//Now, since we have the result already available to us, I'm going to use the shortcut method of returning the promise by resolving the promise immediately. Now, obviously this works well if you have the results immediately available to you, but when you reconfigure your service to be able to go and fetch this data from a server, then we will have to rewrite this code to deal with the fact that the service will not return the result immediately.
//In the next exercise, we're going to simulate the delay by using a Javascript method, so that it gives you a feel of what it means to deal with delays in receiving a result from a promise. 
  getDishes(): Promise<Dish[]> {
    return Promise.resolve(DISHES);
  }
  getDish(id: number): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }
  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
}
