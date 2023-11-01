import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  areas: { id: number; nombre: string; clave: string; departamento: string; };
  selectedOption: string;


  constructor() { }
  public modalRegistrar: boolean = false;
  public modalEditar: boolean = false;
  public login: boolean = false;
  showModalRegistrar() {
    this.modalRegistrar = true;
  }

  showModalEditar() {
    this.modalEditar = true;
  }

  closeModal() {
    this.modalRegistrar = false;
    this.modalEditar = false;
  }

  openLogin() {
    this.login = true;
  }
  closeLogin() {
    this.login = false;
  }
  limpiarCampos() {
    this.areas = {
      id: 0,
      nombre: '',
      clave: '',
      departamento: ''
    }
    this.selectedOption = '';
  }
}

