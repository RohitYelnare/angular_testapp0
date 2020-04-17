import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public text="";
  public text2="";
  public firstname="";
  public lastname="";
  public counter=0;
  public button_content="Show name";
  public myvar;
  public myboolean="";
  appear(a,b){
    this.text = a + " " + b;
  }
  disappear(){
    this.text='';
  }
  onClick(a,b,c){
    if(this.counter%2==0){
      this.text2= " " + a + " " + b;
      this.button_content="Hide name";
    }
    else{
      this.text2="";
      this.button_content="Show name";
    }
    this.counter++;
  }
  msg(value){
    if(value==1){
    this.myboolean="true";
    }
    else{
    this.myboolean="false";
    }
  }
  myclick(value){
    this.myvar=value;
  }
  mybool(){

  }
  truefunc(){
    this.myboolean="true";
  }
  falsefunc(){
    this.myboolean="false";
  }
   constructor() { }

  ngOnInit() {
  }

}