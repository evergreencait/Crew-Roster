import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Crew } from '../crew.model';
import { CrewService } from '../crew.service';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css'],
  providers: [CrewService]
})
export class CrewDetailComponent implements OnInit {
  crewId: string;
  crewToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private crewService: CrewService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.crewId = urlParameters['id'];
    });
    this.crewToDisplay = this.crewService.getCrewById(this.crewId);
  }
}
