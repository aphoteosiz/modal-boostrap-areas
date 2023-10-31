import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { area } from './interfaces/area.interfaces';



@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent {
  nombre: string = '';
  clave: string = '';
  selectedOption: string = '';





  constructor(public modalService: ModalService) { }
  lstAreas: area[] = [];
  areas: area = {
    id: 0,
    nombre: 'eni',
    clave: '1234',
    departamento: 'infra'
  }
  areas1: area = {
    id: 1,
    nombre: ' sistemas',
    clave: 'HQ13',
    departamento: 'IT'
  }
  areas2: area = {
    id: 2,
    nombre: 'Ventas',
    clave: 'KS12',
    departamento: 'Customers'
  }
  areas3: area = {
    id: 3,
    nombre: 'atenciona clientes',
    clave: 'QOK1',
    departamento: 'AT cliente'
  }


  ngOnInit() {
    // this.lstAreas.push(this.areas);
    // this.lstAreas.push(this.areas1);
    // this.lstAreas.push(this.areas2);
    // this.lstAreas.push(this.areas3);


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
  editarRegistro(id) {

  }
  guardaRegistro() {
    const nuevaArea: area = {
      id: this.lstAreas.length + 1,
      nombre: this.areas.nombre,
      clave: this.areas.clave,
      departamento: this.selectedOption
    };
    this.lstAreas.push(nuevaArea);
    this.areas = {
      id:0,
      nombre: '',
      clave: '',
      departamento:''
    }
    this.selectedOption = '';
    this.modalService.closeModal();



  }
  abrirModal() {
    this.modalService.showModal();

  }
  cerrarModal() {

  }
}
