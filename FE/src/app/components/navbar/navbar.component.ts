import { Component, OnInit } from '@angular/core';
import { LoginPopUpComponent } from '../login-pop-up/login-pop-up.component';
import { NewChargeComponent } from '../new-charge/new-charge.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  closeResult: string;
  modalRef: NgbModal;
  public loggedIn: boolean;

  constructor(
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openFormModal() {
    const modalRef = this.modalService.open(LoginPopUpComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  openFormModalAddCharge() {
    const modalRef = this.modalService.open(NewChargeComponent);

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }


}