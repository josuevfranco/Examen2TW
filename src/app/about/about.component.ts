import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  marvel : Heroe [] = [
    {
      name : "Superman Returns",
      year : 2006,
      ranking : "3.9 / 5",
      img : "./assets/movies/Superman_Returns.jpg"
    },
    {
      name : "Spider-Man: Homecoming",
      year :  2017,
      ranking : "4.3 / 5",
      img : "./assets/movies/spiderman.jfif"
    },
    {
      name : "Avengers: Age of Ultron",
      year : 2015 ,
      ranking : "4.3 / 5",
      img : "./assets/movies/avengers.jpg"
    },
    {
      name : "Iron Man",
      year : 2008,
      ranking : "4.7 / 5",
      img : "./assets/movies/ironman.jfif"
    },
    {
      name : "Thor",
      year : 2011,
      ranking : "4.4 / 5",
      img : "./assets/movies/thor.jpg"
    }
  ];

  dc : Heroe [] = [
    {
      name : "Batman v Superman: Dawn of Justice",
      year : 2016 ,
      ranking : "4.1 / 5",
      img : "./assets/movies/batman.jfif"
    },
    {
      name : "Wonder Woman",
      year : 1984,
      ranking : "2.6 / 5",
      img : "./assets/movies/ww.jfif"
    },
    {
      name : "Teen Titans Go! To the Movies",
      year : 2018,
      ranking : "4.1 / 5",
      img : "./assets/movies/teen.jfif"
    },
    {
      name : "Green Lantern: Emerald Knights",
      year : 2011,
      ranking : "4.2 / 5",
      img : "./assets/movies/green.jfif"
    },
    {
      name : "Jonah Hex",
      year : 2010,
      ranking : "3.7 / 5",
      img : "./assets/movies/johan.jfif"
    },
  ];

}

class Heroe {
  name: string;
  year: number;
  ranking: string;
  img: string;
}
