import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  url:string = '/assets/data.json'
  str:string ="Hello"
  data: any[]=[];
  promData:any
  // form = {
  //   fullname: '',
  //   username: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   acceptTerms: false,
  // };
  constructor(private http:HttpClient,private router:Router) {
    this.promData = this.getDataViaPromise()
  }
  ngOnInit() {
    this.http.get(this.url).subscribe((res:any)=>{
      console.log(res);
      this.data = res.data
    })
   
  }

  getDataViaPromise(){
   return this.http.get(this.url).toPromise().then((res:any)=>{
    console.log(res)
    this.data = res.data
   }).catch((res:any)=>{
    console.log(res)
   }) 
  }

  navigateToHome(){
this.router.navigate(['/home'])
  }

  onSubmit(){


  }
}
