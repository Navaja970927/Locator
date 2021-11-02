import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Person } from 'src/app/Model/Person';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit{

  person:Person = new Person;
  constructor(private router:Router, private service:ServiceService, private _builder:FormBuilder) {
    this.addperson = this._builder.group({
      fullname: ['', Validators.compose([Validators.required,Validators.minLength(10)])],
      cpf: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]{11}')])],
      /*dbirth: ['', Validators],*/
      email: ['', Validators.compose([Validators.required,Validators.email])],
      gender: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required,Validators.pattern('[0-9]*')])],
      description: ['', Validators.required],
      neig: ['', Validators.required],
      numb: ['', Validators.required],
      city: ['', Validators.required],
      dir: ['', Validators.required]
    })
   }

  ngOnInit(): void{
    
  }

  addperson = FormGroup;

  Saved(person:Person){
    let db = moment(person.dateofbirth,"yyyy-MM-dd");
    person.dateofbirth = db.toDate();
    let da:Date= new Date()
    let dd = moment(da,'yyyy-MM-dd');
    person.createdDate=dd.toDate();
    person.lastupdate=person.createdDate;
    let lng = localStorage.getItem("lng");
    let lat = localStorage.getItem("lat");
    person.coordinates = lng+" "+lat;
    this.service.createPerson(person).subscribe(data=>{
      alert("Person Added!!!");
      this.router.navigate(['list']);
    })
  }

  locate:boolean = false

  locator(person:Person){
    this.locate= !this.locate;
    let query:string = this.person.number.toString()+" "+this.person.direction.toString()+", "+this.person.neighborhood.toString()+", "+this.person.city.toString();
    localStorage.setItem("person", query);
  }

}
