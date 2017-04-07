import { Injectable } from '@angular/core';
import { Crew } from './crew.model';
import { CREWS } from './mock-crew';
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

  getCrewById(crewId: number){
    for (var i = 0; i <= CREWS.length - 1; i++) {
      if (CREWS[i].id === crewId) {
        return CREWS[i];
      }
    }
  }

}
