import { Component } from '@angular/core';
import { ModalService } from './modal.service';
import { area } from './custom-modal/interfaces/area.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modal';
  areas: { id: number; nombre: string; clave: string; departamento: string; };
  selectedOption: string;
  constructor(public modalService: ModalService) { }


  CargarDatosModal() {


    this.modalService.showModalRegistrar();
  }

  closeModal() {

  }

  openLogin() {
    this.modalService.openLogin();
  }

  }


