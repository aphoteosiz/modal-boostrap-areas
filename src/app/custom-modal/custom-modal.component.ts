import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { area } from './interfaces/area.interfaces';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { departamento } from './interfaces/departamento.interfaces';




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
  textInput2: string
  registroEditado: area | null = null;
  modalEditado: boolean = false;
  form: any;
  router: any;
  arr: string = '';
  registroOriginal: any;


  registro: FormGroup;



  constructor(public modalService: ModalService, private formBuilder: FormBuilder) {
    this.registro = this.formBuilder.group({
      nombre: ['', Validators.required],
      clave: ['', [Validators.required, Validators.maxLength(4)]],
      departamento: ['']


    })
  }

  lstAreas: area[] = [];
  areas: area = {
    id: 0,
    nombre: 'eni',
    clave: '1234',
    departamento: 'infra'
  }

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


  ngOnInit() {
    // this.lstAreas.push(this.areas);
    // this.lstAreas.push(this.areas1);
    // this.lstAreas.push(this.areas2);
    // this.lstAreas.push(this.areas3);
    this.nombre = '';
    this.clave = '';
    this.selectedOption = '';


  }

  cancel() {
    console.log("entrooooooo");

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
        nombre: this.nombre.replace(/[^a-zA-Z]/g, ''),
        clave: this.clave=this.clave.toUpperCase(),
        departamento: this.selectedOption


      }
      this.lstAreas.push(nuevaArea);
    }


    // if (this.registro.valid) {

    //   const nuevaArea: area = {

    //     id: this.lstAreas.length + 1,
    //     nombre: this.nombre,
    //     clave: this.clave,
    //     departamento: this.selectedOption

    //   };

    //   this.lstAreas.push(nuevaArea);
    //   this.areas = {
    //     id: 0,
    //     nombre: '',
    //     clave: '',
    //     departamento: ''
    //   }

    // }




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
    const letras = inputValue.replace(/[^a-zA-Z]+/g, '');

    // Convierte las letras a mayúsculas
    inputElement.value = letras.toUpperCase();
  }
  validarYConvertirNombre(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // Utiliza una expresión regular para permitir solo letras (sin acentos)
    const palabras = inputValue.replace(/[^a-zA-Z]+/g, '');
    inputElement.value = palabras;
  }
  validarFormulario(): boolean {
    if (this.form.valid) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'su registro ha sido guardado',
        showConfirmButton: false,
        timer: 1500
      });

      return true;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'hay campos vacios!',
        footer: 'verifique si su informacion esta completa'
      });
      return false;
    }
  }
  campoVacio(campo: string): boolean {
    return campo === null || campo === '';
  }
  camposCompletos(): boolean {
    return this.nombre.trim() !== '' && this.clave.trim() !== '';

  }
  toUpperCase(event: any): void {
    event.target.value = event.target.value.toUpperCase();
  }
  eliminarRegistro(registro: any) {
    let id = this.lstAreas.indexOf(registro);
    if (id != 0) {
      this.lstAreas.splice(id);
    }
  }
}
