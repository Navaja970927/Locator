import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './Person/list/list.component';
import { AddComponent } from './Person/add/add.component';
import { EditComponent } from './Person/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SearchPipe } from './Pipes/search.pipe';
import { PaginatePipe } from './Pipes/paginate.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MapComponent } from './Map/map/map.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    SearchPipe,
    PaginatePipe,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
