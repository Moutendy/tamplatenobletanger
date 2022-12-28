import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
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


  ajouterpost()
  {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Actualiter Ajouter Admin',
      showConfirmButton: true,
      timer: 5000
    })
  }
  deletepost()
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
