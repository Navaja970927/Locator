import { DatePipe } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/Model/Person';
import { ServiceService } from 'src/app/Service/service.service';
import * as moment from 'moment';
import { FormControl, FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  persons:Person[] = new Array<Person>();
  constructor(private service:ServiceService, private router:Router) {}

  ngOnInit(){
    this.service.getPeople().subscribe(data=>{
      this.persons=data;
    });
  }

  Edit(person:Person): void{
    localStorage.setItem("id", person.id.toString());
    let da = moment(person.dateofbirth, "yyyy-MM-dd");
    person.dateofbirth = da.toDate();
    this.router.navigate(["edit"]);
  }

  Delete(person:Person){
    this.service.deletePerson(person).subscribe(data=>{
      this.persons=this.persons.filter(p=>p!==person);
      alert("User deleted!!!");
    })
  }

  page_size: number = 10
  page_number:number = 1
  pageOptions = [1,5,10,20,50,100]

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
}
