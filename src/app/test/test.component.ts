import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public nameboxid="hi";
  public text="";
  appear(text){
    this.text='hi';
  }
  disappear(text){
    this.text='';
  }
   constructor() { }

  ngOnInit() {
  }

}