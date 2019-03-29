import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/Register/register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teszt-main-page',
  templateUrl: './teszt-main-page.component.html',
  styleUrls: ['./teszt-main-page.component.scss']
})
export class TesztMainPageComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  register(username, email, password) {
    this.registerService.register(username, email, password).subscribe(
      data => {
        console.log('data');
        //this.router.navigateByUrl('ip/8080/');
      })
  }
}
