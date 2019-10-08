import {UsuarioProvider} from './../providers/usuario/usuario';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Platform} from 'ionic-angular';
import {Component} from '@angular/core';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = UsuarioProvider.IsLogado ? 'CategoriaPage' : 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

