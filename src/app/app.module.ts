import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//import { IatecLayoutModule } from '../../projects/iatec-layout/src/lib/iatec-layout.module';
import { IatecLayoutModule } from '@iatec/ng2-layout';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
    IatecLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
