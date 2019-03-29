import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LogChargeService } from '../../services/LogCharge/log-charge.service';

@Component({
  selector: 'app-new-charge',
  templateUrl: './new-charge.component.html',
  styleUrls: ['./new-charge.component.scss']
})
export class NewChargeComponent implements OnInit {
  closeResult: string;

  constructor(
    public activeModal: NgbActiveModal,
    private logChargeService: LogChargeService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  addNewCharge(odometer, chargeAmount, price) {
    let token = localStorage.getItem()
    this.logChargeService.newCharge(odometer, chargeAmount, price, token).subscribe(
      data => {
        //localStorage.setItem('Token', `${data.token}`);
        console.log('data');
      })
  }

}
