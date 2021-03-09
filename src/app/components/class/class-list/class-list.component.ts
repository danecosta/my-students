import { Component, OnInit } from '@angular/core';
import { Class } from '../models/class.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  filter: string;
  classes: Class[] = [
    { id: '', title: 'Family and Numbers', language: 'EN', level: 'Basic', conversation: '', grammar: '', vocabulary: '' },
    { id: '', title: 'Irregular Verbs', language: 'EN', level: 'Advanced', conversation: '', grammar: '', vocabulary: '' }
  ];

  constructor() { }

  ngOnInit() {
  }

  filterClasses(): void {
    this.classes = this.classes.filter(x => x.title === this.filter);
  }

}
