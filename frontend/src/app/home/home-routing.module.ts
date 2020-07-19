import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentViewComponent } from './content-view/content-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'link0', pathMatch: 'full' },
  { path: 'contentview', component: ContentViewComponent },
  { path: ':sectionId', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
