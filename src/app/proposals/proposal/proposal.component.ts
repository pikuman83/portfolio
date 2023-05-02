import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  constructor(private padding: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.padding.padding = false;
    }, );
    
  }

}
