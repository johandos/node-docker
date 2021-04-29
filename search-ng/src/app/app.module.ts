import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// @ts-ignore
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeersComponent } from './components/beers/beers.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    BeersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule, Ng2SearchPipeModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
