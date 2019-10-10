import * as configHelper from './../../app/helpers/configHelper';
import { UsuarioModel } from './../../app/models/usuarioModel';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { HttpProvider } from '../http/http';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { HttpResultModel } from '../../app/models/HttpResultModel';


@Injectable()
export class UsuarioProvider extends ProviderBase<UsuarioModel>{

  url: string = `${configHelper.ConfigHelper.Url}usuario`;

  constructor(public http: HttpProvider) {
    super(`${configHelper.ConfigHelper.Url}usuario`, http);
  }

  async autenticate(email: string, senha: string): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/autenticar`, { email: email, senha: senha });
  }

  async register(usuario: UsuarioModel): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/register`, usuario);
  }

  static RegisterLogin(result: any) {
    localStorage.setItem(configHelper.ConfigHelper.storageKeys.token, result.token);
    localStorage.setItem(configHelper.ConfigHelper.storageKeys.user, JSON.stringify(result.usuario));
  }

  static get GetTokenAccess(): string{
    return localStorage.getItem (ConfigHelper.storageKeys.token);
  }

  static get IsLogado(): boolean {
    return (localStorage.getItem(ConfigHelper.storageKeys.token) != undefined);
  }

}







