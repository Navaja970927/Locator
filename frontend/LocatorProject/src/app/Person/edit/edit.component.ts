import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Person } from 'src/app/Model/Person';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  person:Person = new Person;
  constructor(private route:Router, private service:ServiceService, private _builder:FormBuilder) {
    this.addperson = this._builder.group({
      fullname: [this.person.fullname, Validators.compose([Validators.required,Validators.minLength(10)])],
      cpf: [this.person.cpf, Validators.compose([Validators.required,Validators.pattern('[0-9]{11}')])],
      /*dbirth: ['', Validators],*/
      email: [this.person.email, Validators.compose([Validators.required,Validators.email])],
      gender: [this.person.gender, Validators.compose([Validators.required])],
      phone: [this.person.phone, Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],
      description: [this.person.description, Validators.required],
      neig: [this.person.neighborhood, Validators.required],
      numb: [this.person.number, Validators.required],
      city: [this.person.city, Validators.required],
      dir: [this.person.direction, Validators.required]
    })
   }

  ngOnInit(): void{
    this.Edit();
  }

  addperson = FormGroup;

  Edit(){
    let id=localStorage.getItem("id");
    this.service.getPersonById(+id).subscribe(data=>{
      this.person=data;
    })
    this.person.dateofbirth = moment(this.person.dateofbirth,'yyyy-MM-dd').toDate();
  }

  Change(person:Person){
  let da:Date= new Date()
  person.lastupdate=da
  let lng = localStorage.getItem("lng");
  let lat = localStorage.getItem("lat");
  person.coordinates = lng+" "+lat;
  this.service.updatePerson(person).subscribe(data=>{
  this.person=data;
  alert("Data updated!!!");
  this.route.navigate(['list']);
})
  }

  locate:boolean = false

  locator(person:Person){
    this.locate= !this.locate;
    let query:string = this.person.number.toString()+" "+this.person.direction.toString()+", "+this.person.neighborhood.toString()+", "+this.person.city.toString();
    localStorage.setItem("person", query);
  }

}
