import { Component, OnInit } from '@angular/core';
import { NewChargeComponent } from '../new-charge/new-charge.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/GetData/get-data.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {
  incomeData;
  distance;
  co;
  money;

  constructor(private modalService: NgbModal,
    private router: Router,
    private getService: GetDataService) { }

  ngOnInit() {
    this.getData();
  }

  logOut() {
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

  getData() {
    let token = localStorage.getItem('Token');
    this.getService.getCharge(token).subscribe(
      data => {
        this.incomeData = data;
        this.distance = this.incomeData.totalDistance;
        this.co = this.incomeData.co2Saved;
        this.money = this.incomeData.moneySaved;
        console.log(this.incomeData)
        //localStorage.setItem('Token', `${data.token}`);
        console.log(data);
      })

}
}
