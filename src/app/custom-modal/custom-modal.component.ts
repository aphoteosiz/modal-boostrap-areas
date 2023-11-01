import { Component } from '@angular/core';
import { ModalService } from '../modal.service';
import { area } from './interfaces/area.interfaces';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




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
  registroEditado: area;
  modalEditado: boolean = false;
  form: any;
  router: any;

registro: FormGroup;



  constructor(public modalService: ModalService, private formBuilder: FormBuilder) {
    this.registro = this.formBuilder.group({
      nombre: ['', Validators.required],
      clave: ['', [Validators.required, Validators.maxLength(4)]],
    })
   }

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
    this.modalService.modalRegistrar = false;
    this.selectedOption = '';
    this.nombre = '';
    this.clave = '';
    this.modalService.closeModal();
  }


  save() {



    this.modalService.modalEditar = false;
    this.modalService.modalRegistrar = false;
  }
  closeModal() {
    this.modalService.modalEditar = false;
    this.modalService.modalEditar = false;
  }
  closeDialog() {
    this.modalService.closeModal();
    this.selectedOption = '';
    this.nombre = '';
    this.clave = '';
    this.modalService.closeModal();

  }
  editarRegistro(id: number) {
    this.registroEditado = this.lstAreas.find(area => area.id === id);
    this.modalEditado = true;
    this.modalService.showModalEditar();
  }
  guardaRegistro() {

    if (this.registro.invalid==false) {



      const nuevaArea: area = {

        id: this.lstAreas.length + 1,
        nombre: this.nombre,
        clave: this.clave,
        departamento: this.selectedOption
      };
      this.lstAreas.push(nuevaArea);
      this.areas = {
        id: 0,
        nombre: '',
        clave: '',
        departamento: ''
      }
      this.selectedOption = '';
      this.nombre = '';
      this.clave = '';
      this.modalService.closeModal();

    }



  }
  abrirModal(modalId: string) {

    this.modalService.showModalEditar();
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
  campoVacio(campo:string):boolean {
    return campo === null || campo === '';
    }

}
