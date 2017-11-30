import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Feedback } from '../shared/feedback';
import { Http, Response } from '@angular/http';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular,
              private processHttpmsgService: ProcessHttpmsgService) { }
    
  submitFeedback(feedbackInfo: Feedback ): Observable<Feedback> {
    return this.restangular.all('feedback').post(feedbackInfo);
  }
    
}
