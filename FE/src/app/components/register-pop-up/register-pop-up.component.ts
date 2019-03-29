import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from '../../services/Register/register.service';


@Component({
  selector: 'app-register-pop-up',
  templateUrl: './register-pop-up.component.html',
  styleUrls: ['./register-pop-up.component.scss']
})
export class RegisterPopUpComponent implements OnInit {
  closeResult: string;

  constructor(
    public activeModal: NgbActiveModal,
    private registerService: RegisterService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  register(username, email, password) {
    this.registerService.register(username, email, password).subscribe(
      data => {
        console.log('data');
        //this.router.navigateByUrl('ip/8080/');
      })
  }

}
