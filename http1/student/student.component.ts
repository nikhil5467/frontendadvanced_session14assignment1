import { Component, OnInit,ElementRef} from '@angular/core';
import {StudentService} from '../student.service';

import {Sttodo} from '../sttodo';
declare var $: any
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit   {
  public todo:Sttodo = new Sttodo();
  public con:boolean = true;
   public don:boolean = true;
   public did:number;
  public result:string; 
  public resultd:string;
  

  constructor(private svc:StudentService, private el:ElementRef) { 


  }
public getstudent():Sttodo[]{
return this.svc.getstudent();
}
public addstudent():string{
 var result = this.svc.addstudent(this.todo);       //recreate the object
        this.todo = null;
        this.todo = new Sttodo();
        this.con = true;
        
        return  this.result = result;
      }

        public ad(){
          this.con = false;
        }

        public cancel(){
          this.did = 0;
          this.don = true;
          this.con = true;
          
          this.todo = new Sttodo();
        }

public delete(id:number):string
    {
        //alert("DeleteToDo() called for deleting id:" +id);
            //this.did = id;
            var resultd = this.svc.delete(id);
            this.don = true;
        
        return this.resultd = resultd;
    }
    public confirm(id:number){
     this.did = id;
      this.don = false;
    }
ngOnInit(){

  
}
 

  
}
