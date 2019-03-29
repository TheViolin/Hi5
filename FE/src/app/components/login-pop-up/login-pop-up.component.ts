import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/Login/login.service';


@Component({
  selector: 'app-login-pop-up',
  templateUrl: './login-pop-up.component.html',
  styleUrls: ['./login-pop-up.component.scss']
})
export class LoginPopUpComponent implements OnInit {
  closeResult: string;

  constructor(
    public activeModal: NgbActiveModal,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  login(email, password) {
    this.loginService.login(email, password).subscribe(
      data => {
        //localStorage.setItem('Token', `${data.token}`);
        console.log('data');
      })
  }

}
