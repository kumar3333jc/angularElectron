import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import swal from 'sweetalert2';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake'
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @ViewChild('genPDF') genPDF: ElementRef;
  applicantsList: any[] = [];
  pdfContent: any;
  filepath: any;

  constructor(private applicationService: ApplicationService) { }
  ngOnInit() {
    this.getresult();
  };

  getresult() {
    this.applicationService.getItem().subscribe((data) => {
      console.log(data);
      this.applicantsList = data;
      this.applicantsList[0] = this.applicantsList[this.applicantsList.length - 1];
      console.log(this.applicantsList);

    }, (error: any) => {
      swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Unable to retrive Data!'
      });
    })
  };

  pdf() {
    const html = htmlToPdfmake(this.genPDF.nativeElement.innerHTML);
    const docDefinition = {
      content: [
        html
      ]
    };
    console.log(docDefinition)
    pdfMake.createPdf(docDefinition).download();
  }


  print() {
    const html = htmlToPdfmake(this.genPDF.nativeElement.innerHTML);
    const docDefinition = {
      content: [
        html
      ]
    };
    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
    console.log(pdfDocGenerator);
    const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = pdfDocGenerator;
      document.body.appendChild(iframe);
      iframe.contentWindow.print();
  }
};


