import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateappartement',
  templateUrl: './updateappartement.component.html',
  styleUrls: ['./updateappartement.component.scss']
})
export class UpdateappartementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openFileBrowser(event: any) {
    event.preventDefault();
    let element: HTMLElement = document.querySelector("#fileUploadInputExample1") as HTMLElement;
    element.click()
  }

  handleFileInput(event: any) {
    if (event.target.files.length) {
      let element: HTMLElement = document.querySelector("#fileUploadInputExample1 + .input-group .file-upload-info") as HTMLElement;
      let fileName = event.target.files[0].name;
      element.setAttribute( 'value', fileName)
    }
  }
}
