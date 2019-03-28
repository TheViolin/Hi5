import { Component, OnInit } from '@angular/core';
import { RegisterPopUpComponent } from '../register-pop-up/register-pop-up.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-first-view',
  templateUrl: './first-view.component.html',
  styleUrls: ['./first-view.component.css']
})
export class FirstViewComponent implements OnInit {
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
