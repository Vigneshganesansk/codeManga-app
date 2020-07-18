import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component'


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',
  //   component: HomeComponent

  // },
  // // {
  // //   path: '',
  // //   loadChildren: 'app/home/home.module#HomeModule'
  // // },
  // {
  //   path: 'content',
  //   loadChildren: 'app/content/content.module#ContentModule'
  // }
  { path: '', component: HomeComponent, },
  {
    path: 'content',
    loadChildren: () => import('../app/content/content.module')
      .then(mod => mod.ContentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
