import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlCanvasDemoComponent } from './html-canvas-demo/html-canvas-demo.component';
import { JsPdfComponent } from './js-pdf/js-pdf.component';
import { NgxPrintDemoComponent } from './ngx-print-demo/ngx-print-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'print', pathMatch: 'full' },
  { path: 'print', component: JsPdfComponent },
  { path: 'ngxPrint', component: NgxPrintDemoComponent },
  { path: 'html-canvas', component: HtmlCanvasDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
