import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.app.padding = false;
    }, );
  }

}
