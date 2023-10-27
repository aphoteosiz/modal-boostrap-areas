import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

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
