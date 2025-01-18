import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { UploadComponent } from './upload/upload.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [

  { path: 'summary', component: SummaryComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'preview', component: PreviewComponent },



  { path: '**', redirectTo: 'upload' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
