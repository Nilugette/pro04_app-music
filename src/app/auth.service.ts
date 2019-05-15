import { Injectable } from '@angular/core';
import firebase from '../environments/firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // état de la connexion
  private _authState: boolean = false;

  constructor(private router: Router) {
    // Observable il teste si l'utilisateur est connecté
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this._authState = true;
      } else {
        this._authState = false;
      }
    });
  }

  // méthode d'authentification
  auth(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  get authState(): boolean {
        return this._authState;
    
        
  }

  logout() {
    firebase.auth().signOut().then(
      () => this.router.navigate(['/albums'], {
        queryParams: { messageError: 'Success logout' }} )
    );
  }
 
  
}
