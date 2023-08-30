import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  skills = ["Nodejs", "Python", "AWS", "Angular", "Nestjs", "Postgresql", "HTML 5", "Digital Ocean", 
     "Bootstrap", "Machine learning", "Software Design", "Architecture"]
  constructor() { }

  ngOnInit(): void {
  }

}
