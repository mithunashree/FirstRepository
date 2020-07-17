import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  arrayfordetails=[];
  user :any;
  Name :any;
  loginformgroup: FormGroup;
  constructor(private router: Router,private _localvariable: ServiceService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginformgroup = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login(){
    this. arrayfordetails=[];
    this._localvariable.getDetail()
  
        .subscribe((data:any[])=>{
          console.log(data);
          this.arrayfordetails=data;
         this.user=data;
        });
        for(var i=0;i<=this.user.length;i++)
        {
        if((this.user[i].firstName===this.loginformgroup.value.fname) && (this.user[i].lastName===this.loginformgroup.value.lname) && (this.user[i].phoneNumber === this.loginformgroup.value.password))
         {
          this.router.navigate(['/user/']);
         }
        }
       
  }
  login1(){
    this.router.navigate(['/login/']);
  }

}
