import { Component, OnInit } from '@angular/core';

import { AddRevistaService } from './add-revista.service';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-revista',
  templateUrl: './add-revista.component.html',
  styleUrls: ['./add-revista.component.css']
})
export class AddRevistaComponent implements OnInit {

  add = false;
  xlsxData:Array<any>;
  headers: Array<string>;
  public data = [];
  selectedElement: any = {
    issn:"", titulo: "", estrato:""
  }

  limparSelecao() {
    this.selectedElement = {
      issn:"", titulo: "", estrato:""
    }
  }

  fileChange(event) {
    let result;
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let reader = new FileReader();
      reader.onload = (e) => {
        var arrayBuffer = reader.result,
          data = new Uint8Array(arrayBuffer),
          arr = new Array();
        for (let i = 0; i != data.length; ++i)
          arr[i] = String.fromCharCode(data[i]);
        let bstr = arr.join("");

        let workbook:XLSX.WorkBook = XLSX.read(bstr, {type:"binary"});
        let firstSheetName: string = workbook.SheetNames[0];
        let worksheet:XLSX.WorkSheet = workbook.Sheets[firstSheetName];
        this.setXlsxData(XLSX.utils.sheet_to_json(worksheet));
      }
      reader.readAsArrayBuffer(file);   
    }
  }

  setXlsxData(data: Array<any>) {
    this.headers = Object.keys(data[0]);
    this.xlsxData = data;
    console.log(JSON.stringify(this.xlsxData));
  }

  props: Array<any>;

  constructor(private addRevistaService: AddRevistaService) { }

  ngOnInit() {
    this.addRevistaService.listarRevistas()
      .subscribe(
        res => {
          this.data = res;
        },
        error => console.log(error)
      );
  }

}
