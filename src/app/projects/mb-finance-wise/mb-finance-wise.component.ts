import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mb-finance-wise',
  templateUrl: './mb-finance-wise.component.html',
  styleUrls: ['./mb-finance-wise.component.css']
})
export class MbFinanceWiseComponent implements OnInit {

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
