import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'principal'
  },
  {
    path:'principal',
    loadChildren: ()=> import('src/app/components/components.module').then(m => m.ComponentsModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
