import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];


  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }
//when you have a service you are injecting services like this here, but when you have a value, when you inject the value by using the @Inject decorator

  ngOnInit() {
    this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }


}

//ngOnInit This life cycle method will be executed by the Angular framework, whenever this component is instantiated, so whenever this component gets created.
