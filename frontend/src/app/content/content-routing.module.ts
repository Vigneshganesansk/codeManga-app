import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', redirectTo: 'master', pathMatch: 'full' },
  { path: 'master', component: ContentComponent },
  { path: '*', component: ContentComponent },
  // { path: ':code', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
