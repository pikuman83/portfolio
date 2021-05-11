import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.respWidth();
  }

  width = 168;
  height = 168;

  respWidth(){
    const x = window.innerWidth;
    const y = x - ((x*20)/100);
    const i = document.getElementsByName('fotoFrame');
    if (x < 767) {
      this.width = 300;
      this.height = 200;
      for (let q = 0; q<= i.length-1; q++){
        document.getElementsByName('fotoFrame')[q].classList.remove('card');
      }
    }
  }
  respWidthP(event: any){
    const x = event.target.innerWidth;
    const y = x - ((x*20)/100);
    const i = document.getElementsByName('fotoFrame');
    if (x < 767){
      this.width = 300;
      this.height = 200;
      for (let q = 0; q<= i.length; q++){
        document.getElementsByName('fotoFrame')[q].classList.remove('card');
      }
    }
    else{
      this.width = 168;
      this.height = 168;
      for (let q = 0; q<= i.length; q++){
        document.getElementsByName('fotoFrame')[q].classList.add('card');
      }
    }
  }

}
