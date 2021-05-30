import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements OnInit {

  constructor(private router: Router) { }

  selectedIndex = 1;
  ngOnInit(): void {
    const i = Number(localStorage.getItem('tabIndex'));
    i? this.selectedIndex = i: this.selectedIndex = 0;
    console.log('saved index is',i)
  }

  saveIndex(i: any){
    localStorage.setItem('tabIndex', i.toString())
    console.log('saving tabIndex', i)
  }

  openCv(){
    this.router.navigate(['/resume'])
  }
}
