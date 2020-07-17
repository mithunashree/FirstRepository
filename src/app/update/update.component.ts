import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id:number;
  fname:any;
  lname:any;
  add:any;
  phone:any;
  searchterm2:number;
  searchterm3:string;
  searchterm4:string;
  searchterm5:string;
  searchterm6:string;

  loginformgroup: FormGroup;
  data: any;
  a: any;
  constructor(private route:ActivatedRoute ,private formBuilder: FormBuilder,private router:Router,private _localvariable:ServiceService) {  
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id=params.id;
      this.fname=params.fname;
      this.lname=params.lname;
      this.add=params.add;
      this.phone=params.phone;
    });
    this.a=Number(this.id);
   console.log(this.a);
   }
 

  ngOnInit(): void {
    this.searchterm2=this.a;
    this.searchterm3=this.fname;
    this.searchterm4=this.lname;
    this.searchterm5=this.add;
    this.searchterm6=this.phone;
    this.loginformgroup = this.formBuilder.group({
      // Id: ['', Validators.required],
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Address:['',Validators.required],
      PhoneNumber:['',Validators.required]
    })

    // this.route.queryParams.subscribe((params) =>{
    //   console.log(params);
    //   this.data=JSON.parse(params.data);
    // }
    // )
    // this.loginformgroup.get(Id).value
  }
updatelogin(){
  this._localvariable.update(this.a,this.loginformgroup.value)
  .subscribe(
    response => console.log('success!', response),
    //  error =>console.error('Error!',error)
    error => console.log(error));

}
}