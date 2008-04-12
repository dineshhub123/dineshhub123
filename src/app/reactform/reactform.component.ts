import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';    
@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {
signupform:FormGroup;
firstname:string="";
lastname:string="";
email:string="";
password:string="";
  constructor(private firmbuilder:FormBuilder) {
    this.signupform=firmbuilder.group({
fname:new FormControl(),
lname:new FormControl(),
email:new FormControl(),
password: new FormControl()

    });
   }

  ngOnInit() {}
    postdata(signupform:NgForm)
    {
console.log(signupform.controls);

    }
  

}
