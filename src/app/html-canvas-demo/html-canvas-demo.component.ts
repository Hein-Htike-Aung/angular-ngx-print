import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-html-canvas-demo',
  templateUrl: './html-canvas-demo.component.html',
  styleUrls: ['./html-canvas-demo.component.scss']
})
export class HtmlCanvasDemoComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  generatePDF() {
    const element = document.getElementById('contentToConvert');

    html2canvas(element!).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const position = 0;
      doc.addImage(imgData, 0, position, imgWidth, imgHeight);

      doc.save('image.pdf')
    })
  }
}
