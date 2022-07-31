import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsPdfComponent } from './js-pdf/js-pdf.component';
import { NgxPrintDemoComponent } from './ngx-print-demo/ngx-print-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'print', pathMatch: 'full' },
  { path: 'print', component: JsPdfComponent },
  { path: 'ngxPrint', component: NgxPrintDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
