import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import * as Auth from "../models/interfaces/auth";
import LoginResponse = Auth.LoginResponse;
import Event = Auth.Event;
import LoginRequest = Auth.LoginRequest;
import Response = Auth.Response;


const storageKey = "loggedUser";


@Injectable({
  providedIn: "root"
})
export class AuthService {
  public redirectTo = "/dashboard";

  private loginResponse: LoginResponse;

  protected authEventsSource: BehaviorSubject<Event>;

  authEvent: Observable<Event>;

  constructor(private http: HttpClient, protected router: Router) {
    let loggedUser;
    if (localStorage.getItem(storageKey) != null) {
      loggedUser = localStorage.getItem(storageKey);
    } else if (sessionStorage.getItem(storageKey) != null) {
      loggedUser = sessionStorage.getItem(storageKey);
    }

    if (loggedUser) {
      try {
        this.loginResponse = JSON.parse(loggedUser);
      } catch (e) {
        console.error(e.message);
      }
    }
  }

  get username() {
    return (this.loginResponse && this.loginResponse.username) || 'Admin';
  }


  get expiration() {
    if (this.loginResponse && this.loginResponse.expires) {
      return new Date(this.loginResponse.expires);
    }
    return null;
  }

  get token() {
    if (this.loginResponse && this.loginResponse.token) {
      return this.loginResponse.token;
    }
    return false;
  }

  get isLoggedIn() {
    if(sessionStorage.getItem('isLogin') === "true") {
      return true;
    }
    return false;
  }

  async login(login: LoginRequest){
    return await this.http.post(`session?email=${login.email}&password=${login.password}`, null, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    }).toPromise();
  }

  async logout(redirect?: string): Promise<void> {
    sessionStorage.removeItem("isLogin");
    await this.router.navigateByUrl(redirect);
  }

}

