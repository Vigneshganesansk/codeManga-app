import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { EditorViewComponent } from './editor-view/editor-view.component';

const contentRoutes: Routes = [ 
  {
    path: '',
    component: ContentComponent
    // children: [
    //   { path: 'contentview', component: EditorViewComponent },
    //   // { path: '', component: EditorViewComponent },
    // ]
  },
  { path: 'contentview', component: EditorViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(contentRoutes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
