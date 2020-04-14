import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public nameboxid="hi";
  public text="";
  appear(a,b){
    this.text="Your full name is " + a + " " +b;
  }
  disappear(){
    this.text='';
  }
   constructor() { }

  ngOnInit() {
  }

}