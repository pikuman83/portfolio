import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.css']
})
export class ProposalComponent implements OnInit {

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
    setTimeout(() => this.appComponent.padding = false);
  }

}
