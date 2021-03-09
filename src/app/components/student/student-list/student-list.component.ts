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
    { name: 'Daniela', age: 28 },
    { name: 'Iandra', age: 25 },
  ];

  constructor() { }

  ngOnInit() {
  }

  filterStudents(): void {
    this.students = this.students.filter(x => x.name === this.filter);
  }

}
