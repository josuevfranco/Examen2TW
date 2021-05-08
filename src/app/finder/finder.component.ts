import { Component, OnInit } from '@angular/core';

import { HeroeService, Heroe } from './../shared/heroe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  nombre: string;
  index: number;
  heroe : Heroe;

  constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute ) { 
    this.activatedRoute.params.subscribe(params => {
      this.nombre = params['nombre'];
      this.index = heroeService.buscarHeroe(this.nombre);
      console.log(this.index);
      if (this.index !== -1){
        this.heroe = this.heroeService.getHeroe(this.index);
      }
    });
  }

  ngOnInit(): void {
  }

}
