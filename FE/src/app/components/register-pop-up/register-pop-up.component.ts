import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-register-pop-up',
  templateUrl: './register-pop-up.component.html',
  styleUrls: ['./register-pop-up.component.scss']
})
export class RegisterPopUpComponent implements OnInit {
  closeResult: string;

  constructor(
    public activeModal: NgbActiveModal
    ) {}

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

}
