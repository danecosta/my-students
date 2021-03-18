import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-class-new',
  templateUrl: './class-new.component.html',
  styleUrls: ['./class-new.component.css']
})
export class ClassNewComponent implements OnInit {

  classId = '';
  title = 'New';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.classId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.classId)
      this.title = "Update";
  }

}
