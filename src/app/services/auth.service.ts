import { Router } from '@angular/router';
import { ILogin } from './../interfaces/ilogin';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Atributo para saber si esta logueado
  private _isLogged: boolean;

  constructor(
    private afauth: AngularFireAuth,
    private router: Router
  ) {
    this._isLogged = false;
    // Compruebo inicialmente, si algun usuario esta logueado
    this.afauth.authState.subscribe(user => {
      if (user) {
        this._isLogged = true;
        this.router.navigate(['/resume'])
      }
    })
  }

  /**
   * Setea el valor de isLogged
   */
  set isLogged(value: boolean) {
    this._isLogged = value;
  }

  /**
   * Comeprueba si esta o no logueado
   * @param infoLofin informacion del login
   */
  login(infoLofin: ILogin) {
    return this.afauth.signInWithEmailAndPassword(infoLofin.email, infoLofin.password);
  }

  /**
   * Nos desloguea de la aplicacion
   */
  logout() {
    this.afauth.signOut();
    this._isLogged = false;
    this.router.navigate(['/login'])
  }

  /**
   * Indica si esta o no logueado
   */
  isAuthenticated() {
    return this._isLogged;
  }

}
