import { Component, Input,OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {arr} from '../interface'
@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
export class ChildPage implements OnInit,OnChanges {
 @Input() formData:any
 arrOfObj:arr[]=[
{
  "name":"ank",
  id:1
},
{
  "name":"asd",
  id:2
},
{
  "name":"qwerty",
  id:3
}

 ]
  constructor() {
   // console.log(this.form)
   }
  ngOnInit() {
    console.log(this.formData)
  }
ngOnChanges(changes:SimpleChanges){
  console.log(changes)
  console.log(this.formData)
}
  

}
