import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal';
  constructor(public modalService: ModalService) { }


  showModal() {
    console.log("modal");

    this.modalService.showModal();
  }

  closeModal() {

  }

  openLogin() {
    this.modalService.openLogin();
  }

}
