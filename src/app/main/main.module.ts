import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MainComponent} from './main.component';
import {ModelModule} from './models/model.module';
import {InlineSVGModule} from 'ng-inline-svg';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { CheckComponent } from './components/check/check.component';

@NgModule({
  declarations: [
    SidebarComponent,
    MainComponent,
    HeaderComponent,
    CardComponent,
    BreadcrumbsComponent,
    CheckComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ]
})
export class MainModule { }
