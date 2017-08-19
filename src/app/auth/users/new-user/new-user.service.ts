import { Injectable } from '@angular/core';
import { HttpService } from '../../../common/services/http.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { User } from '../../../common/models/user.model';

@Injectable()
export class NewUserListService extends HttpService {

  constructor( public _http: Http, private _authService: AuthenticationService ) {
    super( _http );
  }

  public createUser( user: User ): Observable<Object> {
    const url = `${this.apiBaseURL}/users`;
    return this.post( url, user, this._authService.user.api_token );
  }
}
