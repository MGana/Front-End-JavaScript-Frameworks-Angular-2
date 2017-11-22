import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProcessHttpmsgService {

  constructor() { }

  public extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
    // If the body turns out to be null so, I'm going to return an empty object instead from this method  
  }
    
}
