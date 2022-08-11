import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPrintModule } from 'ngx-print';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsPdfComponent } from './js-pdf/js-pdf.component';
import { NgxPrintDemoComponent } from './ngx-print-demo/ngx-print-demo.component';
import { HtmlCanvasDemoComponent } from './html-canvas-demo/html-canvas-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    JsPdfComponent,
    NgxPrintDemoComponent,
    HtmlCanvasDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
