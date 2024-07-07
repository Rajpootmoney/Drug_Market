import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { routes } from '../app.routes';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly JWT_Token = 'JWT_TOKEN';
  private loggedUser?: string;
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  private apiUrl = 'https://localhost:44394/auth/register';
  private loginUrl = 'https://localhost:44394/auth/login';

  // private http = inject(HttpClient);

  constructor(private http: HttpClient, private router: Router) {}

  signUp(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  login(loginUser: any): Observable<any> {
    debugger;
    return this.http
      .post(this.loginUrl, loginUser)
      .pipe(tap((response) => this.doLoginUser(loginUser.email, response)));
  }

  private doLoginUser(username: string, tokens: any) {
    debugger;
    this.loggedUser = username;
    this.storeJwtToken(tokens.token);
    this.isAuthenticatedSubject.next(true);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_Token, jwt);
  }

  logOut() {
    localStorage.removeItem(this.JWT_Token);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return this.isAuthenticatedSubject.value;
  }
}
