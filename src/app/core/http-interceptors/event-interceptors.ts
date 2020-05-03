import {Injectable, Inject} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {filter, tap} from 'rxjs/operators';
import {AppService} from '@app/services/app.service';
import {AuthService} from '@app/services/auth.service';


@Injectable()
export class EventInterceptor implements HttpInterceptor {

  url: string;

  constructor(protected auth: AuthService, protected app: AppService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = next.handle(req);


    return request.pipe(tap(
      httpEvent => {
        if (httpEvent instanceof HttpResponse && httpEvent.status === 401) {
          this.auth.logout();
        }
      }, error => {
        if (error.status === 401) {
          this.auth.logout().then();
        } else {
          switch (error.status) {
            case 403:
              this.app.alert("Você não tem permissão para continuar", "Não autorizado").then();
              break;
            default:
              if (error.error.Message) {
                this.app.alert(error.error.Message).then();
              }
              break;
          }
        }

      }));
  }


}
