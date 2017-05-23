import { Injectable } from '@angular/core';
import {Sttodo} from './sttodo';
@Injectable()
export class StudentService {
public todo:Sttodo[] = [
  new Sttodo(1,'Task1'),
  new Sttodo(2,'Task2'),
  new Sttodo(3,'Task3'),
  new Sttodo(4,'Task4'),
  new Sttodo(5,'Task5')
]
  constructor() { 


  }
public getstudent():Sttodo[]{
return this.todo;
}
public addstudent(obj:Sttodo){
 this.todo.push(obj);
        return "New ToDo added successfully";
}

public delete(id:number):string
    {
        //code to remove the todo object from the array based on the id

        for(var i=0 ; i<this.todo.length ; i++)
        {
            if(this.todo[i].id == id)
            {
                this.todo.splice(i,1);
                break;
            }
        }
        return "ToDo deleted";       
    }

     public edit(newtodo:Sttodo):void
    {
        for(var i=0 ; i<this.todo.length ; i++)
        {
            if(this.todo[i].id == newtodo.id)
            {
                //overwrite the old object with the new object
                this.todo[i] = newtodo;
                break;
            }
        }
    }
}
