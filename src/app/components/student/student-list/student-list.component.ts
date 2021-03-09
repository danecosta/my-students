import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  filter: string;
  students: Student[] = [
    { id: '', name: 'Daniela', age: 28, email: '', language: 'EN', level: 'Advanced', firstClass: new Date(), notes: '', whatsapp: '' },
    { id: '', name: 'Iandra', age: 25, email: '', language: 'FR', level: 'Advanced', firstClass: new Date(), notes: '', whatsapp: '' },
  ];

  constructor() { }

  ngOnInit() {
  }

  filterStudents(): void {
    this.students = this.students.filter(x => x.name === this.filter);
  }

}
