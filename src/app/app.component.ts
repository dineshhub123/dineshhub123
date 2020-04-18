import { Component,OnInit } from '@angular/core';
import {Pipe,PipeTransform} from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',  
  styleUrls:['./app.component.css'],
})
export class AppComponent {
  public result:any;
  public showError:any;
  constructor( private http:Http){}

  Api(){
 return this.http.get("http://jsonplaceholder.typicode.com/posts")
 .map(res=>res.json())
 .catch(this.errorCheck)

}
  errorCheck(error:Response){
  
    return Observable.throw(error);
  
  }

ngOnInit(){

this.Api().subscribe(data=>this.result=data,
error=>{this.showError=" Error from server side , please try again later....!"});

}
  
}