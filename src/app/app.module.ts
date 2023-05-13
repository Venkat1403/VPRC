import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatafileComponent } from './datafile/datafile.component';

import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { TableComponent } from './table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'savedata', component: DatafileComponent },
  { path: '', component: TableComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DatafileComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
