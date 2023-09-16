import { Injectable } from '@angular/core';

type message = {
  name: string;
  email: string;
  message: string;
};
//standard method
/*@Injectable({
  providedIn: 'root',
})*/
//using the provider in app.module.ts
@Injectable()
export class MyFirstService {
 
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init():void{
    this.insert({
      name : 'abde',
      email : 'ezzalzouli@11.es',
      message: "loco loco"
    })
    this.insert({
      name : 'riad',
      email : 'chadi@11.es',
      message: "barcelona"
    })
    this.insert({
      name : 'ziyech',
      email : 'ajax@11.es',
      message: "khoot khoot"
    })
  }
  insert(message: message):void {
    this.messages.push(message);
  }

  getAllMessages():any[]{
      return this.messages;
  }
  deleteMessage(index : number):void{
      this.messages.splice(index,1);
  }
}
