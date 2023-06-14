import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersComponent } from './suppliers.component';
import { ViewSuppliersComponent } from './view-suppliers/view-suppliers.component';
import { CreateSuppliersComponent } from './create-suppliers/create-suppliers.component';

const routes: Routes = [{ path: '', component: SuppliersComponent },
{path:'create-supplier',component:CreateSuppliersComponent},
{path:'view-supplier',component:ViewSuppliersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
