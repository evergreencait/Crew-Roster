import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { CrewService } from '../crew.service';
import { Crew } from '../crew.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CrewService]
})
export class AdminComponent {

  constructor(private crewService: CrewService) { }

  submitForm(name: string, department: string, job: string, experience: string) {
    var newCrew: Crew = new Crew(name, department, job, experience);
    this.crewService.addCrew(newCrew);
  }
}
