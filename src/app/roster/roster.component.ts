import { Component } from '@angular/core';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {
  crews: Crew[] = [
   new Crew("Alfred Bello", "Lighting",
       "Light Tech", "15 years"),
   new Crew("John Brown", "Merchandise",
        "Merch Table", "2 years"),
   new Crew("Maggie", "Food",
        "Catering", "20 years"),
   new Crew("Rose Marie", "Lighting",
        "Light Tech", "4 years"),
   new Crew("Rubin Carter", "Security",
        "Bodyguard", "30 years"),
   new Crew("Woody Guthrie", "Sound",
        "Sound Engineer", "25 years"),
   new Crew("Rita May", "Sound",
        "Sound Engineer", "10 years"),
   new Crew("Arthur Dexter Bradley", "Management",
        "Tour Manager", "12 years"),
   new Crew("Jakob Dylan", "Management",
        "Stage Manager", "7 years")
 ];
}
