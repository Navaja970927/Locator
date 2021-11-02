import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Person } from '../Model/Person';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  person!:Person[];
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/api/person/';

  getPeople(){
    return this.http.get<Person[]>(this.Url);
  }
  createPerson(person:Person){
    return this.http.post<Person>(this.Url,person);
  }
  getPersonById(id:number){
    return this.http.get<Person>(this.Url+"/"+id);
  }
  updatePerson(person:Person){
    return this.http.post<Person>(this.Url, person);
  }
  deletePerson(person:Person){
    return this.http.delete<Person>(this.Url+person.id);
  }
}
