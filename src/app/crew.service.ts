import { Injectable } from '@angular/core';
import { Crew } from './crew.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class CrewService {
  crews: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.crews = angularFire.database.list('crews');
  }

  getCrew() {
    return this.crews;
  }

  addCrew(newCrew: Crew) {
  this.crews.push(newCrew);
  }

  getCrewById(crewId: string){
     return this.angularFire.database.object('crews/' + crewId);
   }

   updateCrew(localUpdatedCrew){
    var crewEntryInFirebase = this.getCrewById(localUpdatedCrew.$key);
    crewEntryInFirebase.update({name: localUpdatedCrew.name,
                                department: localUpdatedCrew.department,
                                job: localUpdatedCrew.job,
                                experience: localUpdatedCrew.experience});
  }

}
