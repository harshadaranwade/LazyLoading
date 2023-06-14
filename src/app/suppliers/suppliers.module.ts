import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersComponent } from './suppliers.component';
import { CreateSuppliersComponent } from './create-suppliers/create-suppliers.component';
import { ViewSuppliersComponent } from './view-suppliers/view-suppliers.component';


@NgModule({
  declarations: [
    SuppliersComponent,
    CreateSuppliersComponent,
    ViewSuppliersComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ]
})
export class SuppliersModule { }
