import { Injectable } from '@angular/core';
import { Crew } from './crew.model';
import { CREWS } from './mock-crew';

@Injectable()
export class CrewService {

  constructor() { }

  getCrew() {
    return CREWS;
  }

  getCrewById(crewId: number){
    for (var i = 0; i <= CREWS.length - 1; i++) {
      if (CREWS[i].id === crewId) {
        return CREWS[i];
      }
    }
  }

}
