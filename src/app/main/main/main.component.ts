import { Component, OnInit } from '@angular/core';
import { getProjects } from 'src/app/static/projects';
import { IProject } from 'src/app/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  projects: IProject[];
  constructor() { 
    this.projects = getProjects();
  }

  ngOnInit(): void {
  }

}
