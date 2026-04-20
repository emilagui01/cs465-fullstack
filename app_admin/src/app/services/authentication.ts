import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../user';
import { AuthResponse } from '../models/auth-response';
import { TripDataService } from './trip-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
  ) {}

  authResp: AuthResponse = new AuthResponse();

  // Get token
  public getToken(): string {
    const token = this.storage.getItem('travlr-token');
    return token ? token : '';
  }

  // Save token
  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  // Logout
  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  // Check if logged in
  public isLoggedIn(): boolean {
    const token = this.getToken();

    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  // Get current user
  public getCurrentUser(): User {
    const token = this.getToken();
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
    return { email, name } as User;
  }

  // Login
  public login(user: User, password: string): void {
    this.tripDataService.login(user, password)
      .subscribe({
        next: (value: any) => {
          if (value) {
            this.authResp = value;
            this.saveToken(this.authResp.token);
          }
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

  // Register
  public register(user: User, password: string): void {
    this.tripDataService.register(user, password)
      .subscribe({
        next: (value: any) => {
          if (value) {
            this.authResp = value;
            this.saveToken(this.authResp.token);
          }
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }
}
