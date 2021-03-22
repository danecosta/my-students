import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Class } from '../models/class.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  filter: string;
  classes: Class[] = [
    { id: 'ca154c82-e7bb-4d91-a43b-a2ea65d5ae17', title: 'Family and Numbers', language: 'EN', level: 'Basic', contentOfLesson: '' },
    { id: '9f9ac777-98a4-4b78-92ad-82d34a5ac06c', title: 'Irregular Verbs', language: 'EN', level: 'Advanced', contentOfLesson: '' }
  ];
  classesBkp = Object.assign(this.classes);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  filterClasses(): void {
    this.classes = this.classesBkp;
    if (this.filter)
      this.classes = this.classesBkp.filter(x => x.title === this.filter);
  }

  edit(id: string): void {
    this.router.navigate(['/class/update', id]);
  }

}
