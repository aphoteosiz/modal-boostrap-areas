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
  CargarDatos: any;
  EditarDatos: any;
  textInput1: string;
  textInput2:string
  registroEditado: area;
  modalEditado: boolean=false;





  constructor(public modalService: ModalService) { }
  lstAreas: area[] = [];
  areas: area = {
    id: 0,
    nombre: 'eni',
    clave: '1234',
    departamento: 'infra'
  }


  ngOnInit() {
    // this.lstAreas.push(this.areas);
    // this.lstAreas.push(this.areas1);
    // this.lstAreas.push(this.areas2);
    // this.lstAreas.push(this.areas3);
    this.nombre = '';
    this.clave = '';


  }

  cancel() {
    console.log("entrooooooo");

    this.modalService.modalEditar = false;
    this.modalService.modalEditar = false;
  }


  save() {
    console.log("entrooooooo");

    this.modalService.modalEditar = false;
    this.modalService.modalEditar = false;
  }
  closeModal() {
 this.modalService.modalEditar = false;
    this.modalService.modalEditar = false;
  }
  closeDialog() {
    this.modalService.closeModal();

  }
  editarRegistro(id: number) {
    this.registroEditado = this.lstAreas.find(area => area.id === id);
    this.modalEditado = true;
    this.modalService.showModalEditar();
  }
  guardaRegistro() {
    const nuevaArea: area = {
      id: this.lstAreas.length + 1,
      nombre: this.nombre,
      clave: this.clave,
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
    this.nombre = '';
    this.clave = '';
    this.modalService.closeModal();



  }
  abrirModal(modalId: string) {

       this.modalService.showModalEditar();
    }



  }

