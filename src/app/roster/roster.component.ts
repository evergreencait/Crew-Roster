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
  constructor(private router: Router, private crewService: CrewService){}

  ngOnInit(){
    this.crews = this.crewService.getCrew();
  }

  goToDetailPage(clickedCrew: Crew) {
    this.router.navigate(['crews', clickedCrew.id]);
  };
}
