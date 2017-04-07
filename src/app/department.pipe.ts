import { Pipe, PipeTransform } from '@angular/core';
import {Crew} from './crew.model';
import { FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'department',
  pure: false
})

export class DepartmentPipe implements PipeTransform {

  transform(input: Crew[], desiredDepartment) {
     var output: Crew[] = [];
     if(desiredDepartment === "lighting") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].department === "Lighting") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (desiredDepartment === "management") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].department === "Management") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (desiredDepartment === "sound") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].department === "Sound") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (desiredDepartment === "merchandise") {
       for (var i = 0; i < input.length; i++) {
         if (input[i].department === "Merchandise") {
           output.push(input[i]);
         }
       }
       return output;
     }  else if (desiredDepartment === "food") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].department === "Food") {
            output.push(input[i]);
          }
        }
        return output;
      } else {

        return input;
      }
   }

}
