import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/Register/register.service';
import { Router } from '@angular/router';
import { RegisterPopUpComponent } from '../register-pop-up/register-pop-up.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teszt-main-page',
  templateUrl: './teszt-main-page.component.html',
  styleUrls: ['./teszt-main-page.component.scss']
})
export class TesztMainPageComponent implements OnInit {
  closeResult: string;

  modalRef: NgbModal;

  constructor(
    private modalService: NgbModal
    ) { }

  ngOnInit() {
  }

  openFormModal() {
    const modalRef = this.modalService.open(RegisterPopUpComponent);
    
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

}
