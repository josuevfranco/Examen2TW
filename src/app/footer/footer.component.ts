import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  descrip : string = "Tecnologías Web - ISC UAA";

  constructor() { }

  ngOnInit(): void {
  }

}
