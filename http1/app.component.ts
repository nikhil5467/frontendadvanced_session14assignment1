import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private r:Router){
 
}
public showstudent(){
  this.r.navigate(['student']);
}
public showemployee(){
  this.r.navigate(['employee']);
}
public showsalary(){
  this.r.navigate(['salary']);
}
}
