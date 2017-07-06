import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class AddRevistaService {

  constructor(private _http: Http) { }

  listarRevistas() {
    return this._http.get(`assets/revistas.json`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {

    let body = res.json();

    return body || {};
  }
  private handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {

      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return Observable.throw(errMsg);
  }


}