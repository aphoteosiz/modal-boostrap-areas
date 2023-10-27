import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {


  constructor() { }
  public modal: boolean = false;
  public login: boolean = false;
  showModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }

  openLogin() {
    this.login = true;
  }
  closeLogin() {
    this.login = false;
  }
  }
   

