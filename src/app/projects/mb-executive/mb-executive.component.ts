import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mb-executive',
  templateUrl: './mb-executive.component.html',
  styleUrls: ['./mb-executive.component.css']
})
export class MbExecutiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.respWidth();
  }

  width: number = 800;

  respWidth(){
    if (window.innerWidth <= 850) {
      this.width = 350;
    }
  }
  respWidthP(event: any){
    if (event.target.innerWidth <= 850){
      this.width = 350;
    }
    else{
      this.width = 800;
    }
  }
}
