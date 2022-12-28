import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageComponent } from './image/image.component';
import { UpdateappartementComponent } from './updateappartement/updateappartement.component';


@Component({
  selector: 'app-ajouterappartement',
  templateUrl: './ajouterappartement.component.html',
  styleUrls: ['./ajouterappartement.component.scss']
})
export class AjouterappartementComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  updateappartment() {
    this.modalService.open(UpdateappartementComponent, {scrollable: true}).result.then((result) => {
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

  image()
  {
    this.modalService.open(ImageComponent, {scrollable: true}).result.then((result) => {
      console.log("Modal closed" + result);
    }).catch((res) => {});
  }
}
