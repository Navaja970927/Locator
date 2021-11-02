import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(persons: any[], text: string, birth: string): any[] {
    if(!text && !birth) return persons;
    if(text && !birth){
      return persons.filter(person=>{
        return person.gender.includes(text);
      });
    }
    if(birth && !text){
      return persons.filter(person=>{
        return person.dateofbirth.includes(birth);
      })
    }
    else{
      return persons.filter(person=>{
        let p = person.dateofbirth.includes(birth);
        let g = person.gender.includes(text);
        if(p && g) return person;
      })
    }
  }

}
