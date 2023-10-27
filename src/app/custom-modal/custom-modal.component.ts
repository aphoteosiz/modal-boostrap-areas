import { Component, OnInit, inject } from '@angular/core';
import { ModalService } from '../modal.service';



@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent {
  input1Value: string = '';
  input2Value: string = '';
  selectedOption: string = '';





  constructor(public modalService: ModalService){}

  ngOnInit() {

  }

  cancel() {
    console.log("entrooooooo");

    this.modalService.modal=false;
  }


  save() {
    console.log("entrooooooo");

    this.modalService.modal = false;
  }
  closeModal() {
this.modalService.modal = false;
  }
  closeDialog() {
    this.modalService.closeModal();

  }
}
