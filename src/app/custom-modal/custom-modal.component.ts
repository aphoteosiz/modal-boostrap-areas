import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { area } from './interfaces/area.interfaces';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { departamento } from './interfaces/departamento.interfaces';





@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})

export class CustomModalComponent {
  nombre: string;
  clave: string = '';
  selectedOption: string = '';
  CargarDatos: any;
  EditarDatos: any;
  textInput1: string;
  textInput2: string
  registroEditado: area | null = null;
  modalEditado: boolean = false;
  form: any;
  router: any;
  arr: string = '';
  registroOriginal: any;




  lstDepartamento: departamento[] = [];
  Departamento: departamento = {
    id: 0,
    nombre: 'infra',
  }

  departamento1: departamento = {
    id: 1,
    nombre: 'IT',
  }

  departamento2: departamento = {
    id: 2,
    nombre: 'ventas',
  }
  registros: area[] = [];

  constructor(public modalService: ModalService) {

    this.lstDepartamento = [this.Departamento, this.departamento1, this.departamento2];
  }

  lstAreas: area[] = [];
  areas: area = {
    id: 0,
    nombre: 'eni',
    clave: '1234',
    departamento: 'infra'
  }




  ngOnInit() {

    this.nombre = '';
    this.clave = '';
    this.selectedOption = '';


  }

  cancel() {
    this.modalService.modalEditar = false;
    this.modalService.modalRegistrar = false;
    this.selectedOption = '';
    this.nombre = '';
    this.clave = '';
    if (this.registroEditado)
      this.registroEditado = { ...this.registroOriginal };
    this.modalService.closeModal();
  }



  save() {
    const index = this.lstAreas.findIndex(area => area.id === this.registroEditado.id);
    if (index !== -1) {
      this.lstAreas[index] = { ...this.registroEditado };
    }

    this.modalService.modalEditar = false;
    this.registroEditado = null;
    this.modalService.modalRegistrar = false;
  }
  closeModal() {
    this.modalService.modalEditar = false;
    this.modalService.modalEditar = false;
  }
  closeDialog() {
    this.registroOriginal = { ...this.registroEditado };
    this.modalService.closeModal();
    this.selectedOption = '';
    this.nombre = '';
    this.clave = '';
    this.modalService.closeModal();

  }
  editarRegistro(id: number) {

    this.registroEditado = { ...this.lstAreas.find(area => area.id === id) };
    this.registroOriginal = { ...this.registroEditado };
    this.modalService.showModalEditar();
  }
  guardaRegistro() {
    if (this.camposCompletos()) {
      const nuevaArea: area = {

        id: this.lstAreas.length + 1,
        nombre: this.nombre.replace(/[^a-zA-Z\s]/g, ''),
        clave: this.clave = this.clave.toUpperCase(),
        departamento: this.selectedOption


      }
      this.lstAreas.push(nuevaArea);
    }


    this.nombre = '';
    this.clave = '';
    this.selectedOption = '';
    this.modalService.closeModal();





  }
  abrirModal(modalId: string) {

    this.modalService.showModalEditar();
  }
  validarYConvertirClave(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // Utiliza una expresión regular para permitir solo letras (sin acentos)
    const letras = inputValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜ]+/g, '');

    // Convierte las letras a mayúsculas
    inputElement.value = letras.toUpperCase();
  }
  validarYConvertirNombre(newValue: string) {

    const palabras = newValue.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜÑñ\s]+/g, '');
    this.nombre = palabras;
    this.CargarDatos.viewToModelUpdate(this.nombre);
  }
  campoVacio(campo: string): boolean {
    return campo === null || campo === '';
  }
  camposCompletos(): boolean {
    return this.nombre.trim() !== '' && this.clave.trim() !== '';

  }
  eliminarRegistro(id: number) {

      const index = this.lstAreas.findIndex(registro => registro.id === id);
      if(index !== -1) {
      this.lstAreas.splice(index, 1);
    }
  }

  // eliminarRegistro(registro: any) {
  //   let id = this.lstAreas.indexOf(registro);
  //   if (id != 0) {
  //     this.lstAreas.splice(id);
  //   }
  // }
  soloLetras(event: KeyboardEvent): void {
    const key = event.key;


    if (!/[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]/.test(key)) {
      event.preventDefault();
    }
  }
}
