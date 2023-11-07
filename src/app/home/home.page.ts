import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit {
  url:string = '/assets/data.json'
  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
  formData: any={
    "name":"Ank"
  };
isFormVisible:boolean = false
  constructor(private router:Router,private http:HttpClient) {
 
  }

  ngOnInit(){
  
  }
  showForm(){
this.isFormVisible = !this.isFormVisible
  }

onSubmit(){
  console.log(JSON.stringify(this.form, null, 2));
  this.formData = JSON.stringify(this.form, null, 2)
      this.router.navigate(['/child'])

this.http.post(this.url,this.formData).subscribe((res:any)=>{
  console.log(res)
})
}
}
