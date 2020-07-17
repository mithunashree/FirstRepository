import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   arrayfordetails=[];
  loginformgroup: FormGroup;
  id: number;
  constructor(private _localvariable: ServiceService, private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
      this. arrayfordetails=[];
    this.loginformgroup = this.formBuilder.group({
      // Id: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Address: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
    })
  }
  loginclicked(): void {
    console.log(this.loginformgroup.value);
    this._localvariable.postmethod(this.loginformgroup.value)
      .subscribe(
        response => console.log('success!', response),
        //  error =>console.error('Error!',error)
        error => console.log(error)); 
        this.router.navigate(['/register/']);
  }
}
