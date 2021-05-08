import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private_config:NgbCarouselConfig) {
    private_config.interval = 10000;
    private_config.pauseOnHover = true;
    private_config.showNavigationArrows = true;
  }

  peliculas : any[] = [
    {
      name: "The Marvel Cinematic Universe (MCU)",
      img: "assets/marvel.jpg",
      des: "It's an American media franchise and shared universe centered on a series of superhero films, independently produced by Marvel Studios and based on characters that appear in American comic books published by Marvel Comics."
    },
    {
      name: "DC Comics, Inc.",
      img: "assets/dc.JPG",
      des: "It's an American comic book publisher and the flagship unit of DC Entertainment,[4][5] a subsidiary of the Warner Bros. Global Brands and Experiences division of Warner Bros., which itself is a subsidiary of AT&T's WarnerMedia through its Studios & Networks division."
    }
  ]
  
  ngOnInit(): void {
  }

  cardsTitle : string [] = [
    "Spider-Man", "Aquaman", "Captain America"
  ];

  cardDescription : string [] = [
    "With Great Power, Comes Great Responsibility.”",
    "“It was up to me and I let him die.",
    "I don't like bullies; I don't care where they're from."
  ];

  cardTexto : string [] = [
    "Spider-Man is popular because in many respects he was the most relatable hero to the majority of comic book readers back in the heyday of comics (1965–1985).",
    "But the major reason for Aquaman's success is James Wan. He managed to make a visual spectacle of a lackluster/mediocre story with the help of an amazing cast who managed to make their presence known through out the movie.",
    "KNOWN SUPERHUMAN POWERS: Captain America has agility, strength, speed, endurance, and reaction time superior to any Olympic athlete who ever competed."
  ];

  textoComic: string = "When we read comics or try to understand superheroes, particularly as children, we develop our emotions, reading ability, and morals. Just as we idolise celebrities, we idolise superheroes. This is best mirrored by Tony Stark – he is a celebrity, and one who seems to bask in the glow of his self-made fame. The comics, however, also reveal him to be particularly fond of drowning his insecurities and fears in alcohol, while suffering from anxiety, panic attacks, and bouts of paranoia: effects that are not uncommon in celebrities. Furthermore, based on theories of social psychology, comics likely impact our levels of aggression, prosocial behaviour, leadership ability and attitudes. It is not an unusual sight to see a child running through the yard with a Batman or Superman cape, battling imaginary supervillains and saving the world, one treehouse at a time. Pretend play is an important part of a child's development between ages two and seven and is often greatly impacted by the concept of superheroes. Pretend play helps children learn language and develop an understanding of theory of mind (that others may have a different perspective to themselves), and allows the expression of emotions, both negative and positive."
  textoComic2: string = "Comics have also addressed societal issues, with the revelation in 1992 that Marvel’s Northstar was homosexual reflecting changing views on homosexuality. However this has not always been carried out in what would be called an ethical manner, with some publishers and authors appealing to the masses, for example, by introducing Batwoman in 2006 as a “lipstick lesbian”. Children can use superheroes and villains to take various perspectives on a situation and test the consequences of actions, while reading comics can assist with developing their emotional vocabulary. Comics provide the exaggerated opportunity to play out moralistic and ethical dilemmas for both children (in an effort to increase their understanding of the world around them) and adults (to critique and analyse the status quo).";

  email : string = "";
  registroExistoso(){
    if (this.email == "" || this.email.includes("@") == false){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Write a correct email!'
      })   
    }else{
      Swal.fire(
        'Good job!',
        'You have successfully subscribed!',
        'success'
      )
    }
  }

  batman : string = 'Batman The Dark Knight Returns made almost every single "Comic Book Best of" list. Consistently, it was in the top five of every comic list out there and often at number one. Batman: The Dark Knight Returns was a 1986 four-issue miniseries by Frank Miller, illustrated also by Miller and Klaus Janson, and published by DC Comics. When the comic series was collected into a single edition later that year, the story title was applied to the entire series. ';
}






