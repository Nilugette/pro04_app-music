import { Injectable } from '@angular/core';
import firebase from '../environments/firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // état de la connexion
  private authState: boolean = false;

  constructor(private router: Router) {
    // Observable il teste si l'utilisateur est connecté
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.authState = true;
      } else {
        this.authState = null;
      }
    });
  }

  // méthode d'authentification
  auth(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  authenticated() {

  }

  currentUserObservable() {

  }
  
}
