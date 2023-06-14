import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'suppliers',
    loadChildren: () => import('./suppliers/suppliers.module').then(m => m.SuppliersModule)
  },
  {
    path: 'consumers',
    loadChildren: () => import('./suppliers/consumers/consumers.module').then(m => m.ConsumersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
