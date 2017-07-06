import { Component, OnInit } from '@angular/core';

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
  data: any = [
    {
      issn: "1528-7106",
      titulo: "AACE INTERNATIONAL TRANSACTIONS",
      estrato: "C"
    },
    {
      issn: "2528-7106",
      titulo: "BACE INTERNATIONAL TRANSACTIONS",
      estrato: "D"
    }
  ];
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
  }

  props: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
