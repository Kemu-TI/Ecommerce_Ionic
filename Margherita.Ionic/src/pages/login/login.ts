import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form: any ={};

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private usuarioSrv: UsuarioProvider  
     ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

 async login(): Promise<void>{
   let result = await this.usuarioSrv.autenticate(this.form.email, this.form.senha);
   
   if (result.sucess){
     UsuarioProvider.RegisterLogin(result.data);
     this.navCtrl.setRoot('CategoriaPage');
     } else {
       
     }
     
   console.log(result);
 }

  cadastrar():void{
    this.navCtrl.setRoot('CadastroPage');
  }
}
