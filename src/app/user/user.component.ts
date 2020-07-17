import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router,NavigationExtras,ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  arrayfordetails=[];
  user :any;
  id: number;
  constructor(private _localvariable: ServiceService,private router: Router) { }

  ngOnInit(): void {
    this. arrayfordetails=[];
    this._localvariable.getDetail()
  
        .subscribe((data:any[])=>{
          console.log(data);
          this.arrayfordetails=data;
         this.user=data;
        });
  }
  delete(array):void{
    // this.id=1;
      this._localvariable.delete(array)
      .subscribe(
        response => console.log('sucess!',response),
      //  error =>console.error('Error!',error)
       error => console.log(error));
    }

    update(array){
      let navigationExtras:NavigationExtras ={
        queryParams:{
          id:array.id,
          fname:array.firstName,
          lname:array.lastName,
          add:array.address,
          phone:array.phoneNumber
        }
      }
      this.router.navigate(['/update/'],navigationExtras);
    }
}
