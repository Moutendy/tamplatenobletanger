import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdatepostComponent } from './updatepost/updatepost.component';

@Component({
  selector: 'app-ajouterpost',
  templateUrl: './ajouterpost.component.html',
  styleUrls: ['./ajouterpost.component.scss']
})
export class AjouterpostComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openScrollableModal() {
    this.modalService.open(UpdatepostComponent, {scrollable: true}).result.then((result) => {
      console.log("Modal closed" + result);
    }).catch((res) => {});
  }

  openFileBrowser(event: any) {
    event.preventDefault();
    let element: HTMLElement = document.querySelector("#fileUploadInputExample") as HTMLElement;
    element.click()
  }

  handleFileInput(event: any) {
    if (event.target.files.length) {
      let element: HTMLElement = document.querySelector("#fileUploadInputExample + .input-group .file-upload-info") as HTMLElement;
      let fileName = event.target.files[0].name;
      element.setAttribute( 'value', fileName)
    }
  }
}
