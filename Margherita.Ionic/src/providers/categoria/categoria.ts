import { HttpProvider } from './../http/http';
import { ConfigHelper } from './../../app/helpers/configHelper';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { CategoriaModel } from '../../app/models/categoriaModel';

@Injectable()
export class CategoriaProvider extends ProviderBase<CategoriaModel> {

  url: string = `${ConfigHelper.Url}categoria`;

  constructor(public http: HttpProvider){
      super(`${ConfigHelper.Url}categoria`, http);
  }
  
}
