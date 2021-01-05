import { NgModule } from '@angular/core';
import {ProductRepository} from './menu.repository';
import {StaticMenu} from './menu';


@NgModule({
  providers: [ProductRepository, StaticMenu]
})
export class ModelModule { }
