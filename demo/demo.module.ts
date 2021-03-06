import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap';

import { NgxQueryModule } from '../src';
import { DemoComponent } from './demo.component';
import { Sample1Component } from "./sample1.component";
import { Sample2Component } from "./sample2.component";
import { Sample3Component } from "./sample3.component";
import { Sample4Component } from "./sample4.component";
import { Sample5Component } from "./sample5.component";
import { Sample6Component } from "./sample6.component";

@NgModule({
  declarations: [
    DemoComponent,
    Sample1Component,
    Sample2Component,
    Sample3Component,
    Sample4Component,
    Sample5Component,
    Sample6Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    NgxQueryModule.forRoot()
  ],
  bootstrap: [DemoComponent]
})
export class DemoModule { }