import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from "ng2-data-table";

import { AppComponent } from './app.component';
import { AddRevistaComponent } from './add-revista/add-revista.component';
import { FilterPipe } from './filter.pipe';

import { AddRevistaService } from './add-revista/add-revista.service';

@NgModule({
  declarations: [
    AppComponent,
    AddRevistaComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [AddRevistaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
