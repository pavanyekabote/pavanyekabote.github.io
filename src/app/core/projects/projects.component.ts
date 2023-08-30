import { Component, Input, OnInit } from '@angular/core';
import { IProject } from '../../types';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input("project") project: IProject;
  
  constructor() { 
    this.project = null as any;
  }

  ngOnInit(): void {
  }

}
