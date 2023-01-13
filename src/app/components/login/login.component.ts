import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { ILogin } from 'src/app/interfaces/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public showLoginError: boolean;
  public infoLogin: ILogin;

  constructor(
    public config: ConfigService,
    private auth: AuthService,
    private router: Router
  ) {
    this.showLoginError = false;
    this.infoLogin = {
      email: '',
      password: ''
    }
  }

  ngOnInit() {
    // Si estamos logueados, volvemos al resumen
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/resume'])
    }
  }

  /**
   * Comprobamos si el login es correcto
   */
  checkLogin() {

    this.auth.login(this.infoLogin).then(success => {

      console.log(success);
      if(success){
        // Indicamos que estamos logueados
        this.auth.isLogged = true
        this.router.navigate(['/resume'])
      }

    },error=>{
      this.showLoginError = true;
      console.error("Error en el login " + error);
    })


  }

}
