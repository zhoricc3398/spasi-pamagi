import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderComponent } from './form-builder/form-builder.component';

const routes: Routes = [
  { path: 'form-builder', component: FormBuilderComponent },
  {
    path: 'form-manager',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'resource-management',
    loadChildren: () =>
      import('./event/event.module').then((m) => m.EventModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
