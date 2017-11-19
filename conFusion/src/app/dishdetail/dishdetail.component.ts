import { Component, OnInit } from '@angular/core';


import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishIds: number[];
  prev: number;
  next: number;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  /*ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.dishservice.getDish(id).subscribe(dish => this.dish = dish);
  }*/
    
  // what happens is that whenever the parameter, params observable changes value, which means that the route parameter changes value. Then immediately the switchMap operator will take the params value and then do a getDish from my dish server. So this will be automatically initiated. And this will be available as the other observable that is emitted by doing the switchMap operator on this observable.     
  ngOnInit() {
    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
  }
  //what happens is every time my dish gets updated, I will update the previous and the next also, correspondingly, from here
    
  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1)%this.dishIds.length];
  }
  //to be able to navigate through my list of dishes, I need to know the set of all my dishes. Or at least, I need to know the ID's of all my dishes. And that is the reason why I use this dishIds here. 
  //Now, if index is 1, index minus 1 will give me zero. If index is zero, index minus 1 will give me minus 1, but that's not what I want. I want to wrap around, and get dishId length minus 1. So that's why I am including this in there, and then doing a modulo with the dishIds. So when I reach, when index is zero, I will wrap around to get the last item in my array.    


  goBack(): void {
    this.location.back();
  }

}
