import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.respWidth();
    // }, );
  }

  width = 340;
  height = 340;

  respWidth(){
    const i = document.getElementsByName('fotoFrame');
    if (window.innerWidth < 767) {
      this.width = 250;
      this.height = 200;
      for (let q = 0; q< i.length; q++){
        i[q].classList.remove('card');
      }
    }
  }
  respWidthP(event: any){
    const i = document.getElementsByName('fotoFrame');
    if (event.target.innerWidth < 767){
      this.width = 200;
      this.height = 200;
      for (let q = 0; q< i.length; q++){
        i[q].classList.remove('card');
      }
    }
    else{
      this.width = 168;
      this.height = 168;
      for (let q = 0; q< i.length; q++){
        i[q].classList.add('card');
      }
    }
  }

}
