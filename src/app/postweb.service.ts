import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostwebService {
  apiURL: string =
    'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';

  constructor(private http: HttpClient) {}

  public getPostits(apiKEY: string): Observable<Object> {
    return this.http.get(this.apiURL + '/get?key=' + apiKEY);
  }

  public uploadPostits(apiKEY: string, msg: string): Observable<Object> {
    return this.http.post(
      this.apiURL + '/post?key=' + apiKEY + '&msg=' + msg,
      null
    );
  }

  public getNewKey(): Observable<Object> {
    return this.http.post(this.apiURL + '/new', null);
  }
}
