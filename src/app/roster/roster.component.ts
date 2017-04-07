import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Crew } from '../crew.model';
import { CrewService } from '../crew.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [CrewService]
})

export class RosterComponent implements OnInit {
  crews: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private crewService: CrewService){}

  filterByDepartment: string = "allCrew";

  ngOnInit(){
    this.crews = this.crewService.getCrew();
  }

  onChange(optionFromMenu) {
  this.filterByDepartment = optionFromMenu;
  }

  goToDetailPage(clickedCrew) {
    this.router.navigate(['crews', clickedCrew.$key]);
  };
}
