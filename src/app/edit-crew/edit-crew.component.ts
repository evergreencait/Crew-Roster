import { Component, OnInit, Input } from '@angular/core';
import { Crew } from '../crew.model';
import { CrewService } from '../crew.service';

@Component({
  selector: 'app-edit-crew',
  templateUrl: './edit-crew.component.html',
  styleUrls: ['./edit-crew.component.css'],
  providers: [CrewService]
})
export class EditCrewComponent implements OnInit {
  @Input() selectedCrew;

  constructor(private crewService: CrewService) { }

  ngOnInit() {
  }

  beginUpdatingCrew(crewToUpdate){
    this.crewService.updateCrew(crewToUpdate);
  }

  beginDeletingCrew(crewToDelete){
   if(confirm("Are you sure you want to remove this crew member from the tour?")){
     this.crewService.deleteCrew(crewToDelete);
   }
 }

}
