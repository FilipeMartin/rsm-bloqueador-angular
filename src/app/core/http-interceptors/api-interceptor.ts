import {Injectable, Inject} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '@app/services/auth.service';
import {environment} from "../../../environments/environment";


@Injectable()
export class APIInterceptor implements HttpInterceptor {

  url: string;

  constructor(protected auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.match(/^(?:(?:\w+:\/\/)|\/)/) === null) {
      const apiReq = req.clone({url: `${environment.api.replace(/\/$/, '')}/${req.url}`});
      return next.handle(apiReq);
    }
    return next.handle(req);
  }
}
