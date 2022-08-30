import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfowidgetComponent } from './login/infowidget/infowidget.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app-state';
@NgModule({
  declarations: [
    AppComponent, InfowidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
