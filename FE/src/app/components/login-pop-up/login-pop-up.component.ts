import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../../services/Login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-pop-up',
  templateUrl: './login-pop-up.component.html',
  styleUrls: ['./login-pop-up.component.scss']
})
export class LoginPopUpComponent implements OnInit {
  closeResult: string;

  constructor(
    public activeModal: NgbActiveModal,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }


  login(username, password) {
    this.loginService.login(username, password).subscribe(
      data => {
        localStorage.setItem('Token', `${data['token']}`);
        this.closeModal();
        this.router.navigateByUrl('/loggedin');
      })
  }

}
