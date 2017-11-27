import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
  '[@flyInOut]': 'true',
  'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMess: string;


  constructor(private dishService: DishService,
    @Inject('BaseURL') private BaseURL) { }
//when you have a service you are injecting services like this here, but when you have a value, when you inject the value by using the @Inject decorator

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);
  }


}

//ngOnInit This life cycle method will be executed by the Angular framework, whenever this component is instantiated, so whenever this component gets created.
