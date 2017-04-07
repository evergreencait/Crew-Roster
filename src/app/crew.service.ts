import { Injectable } from '@angular/core';
import { Crew } from './crew.model';
import { CREWS } from './mock-crew';

@Injectable()
export class CrewService {

  constructor() { }

  getCrew() {
    return CREWS;
  }

}
