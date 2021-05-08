import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class HeroeService {
  private heroes: Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "Aquaman's most recognized power is the telepathic ability to communicate with marine life, which it can summon over great distances.",
      img: "./assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa: "DC"
    },
    {
      nombre: "Batman",
      bio: "The main features of Batman are summarized in 'physical prowess, deductive skills and obsession'. Most of the basic characteristics of the comics have varied by the different interpretations that have been given to the character.",
      img: "./assets/img/batman.png",
      aparicion: "1939-05-01",
      casa: "DC"
    },
    {
      nombre: "Daredevil",
      bio: "Having lost his sight, Daredevil's remaining four senses were heightened by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can see through a sixth sense that serves as a bat-like radar.",
      img: "./assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "His main power is his ability to increase his strength to virtually unlimited levels while increasing his fury. Depending on which Hulk personality is in command at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).",
      img: "./assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa: "Marvel"
    },
    {
      nombre: "Green Lantern",
      bio: "Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is powered by the Green Flame (revised by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which a manufacturer found of lamps named Chang)",
      img: "./assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "After being bitten by a radioactive spider, he obtained the following superhuman powers, great strength, agility, being able to climb walls. Spider-Man's strength allows him to lift 10 tons or more. Thanks to this great strength, Spider-Man can perform incredible jumps. A \ spider sense \, which lets him know if a danger is looming over him, before it happens. Sometimes this can lead Spider-Man to the source of danger.",
      img: "./assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, no matter how deadly it may be, and that same power makes him immune to any disease existing on Earth and some aliens. He also has superhuman strength, which although it does not compare with that of other superheroes like the Hulk, it does exceed that of any human.",
      img: "./assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    },
    {
      nombre: "Wonder Woman",
      bio: "Wonder Woman is a fictional superhero created by William Moulton Marston for the DC Comics publishing house. She is a warrior princess of the Amazons, a fictional town based on the Amazons of Greek mythology.",
      img: "./assets/img/wonder.png",
      aparicion: "1941-12-01",
      casa: "DC"
    },
    {
      nombre: "Captain America",
      bio: "Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. ",
      img: "./assets/img/captain-america.png",
      aparicion: "1971-03-01",
      casa: "Marvel"
    },
    {
      nombre: "Amanda Waller",
      bio: "If there’s one person who can give any metahuman living nightmares it would have to be Amanda Waller. Her storylines have always been of the utmost quality, which she bolsters by bringing her powerful presence, that can dissect any person before her.",
      img: "./assets/img/amanda.png",
      aparicion: "1986-11-01",
      casa: "DC"
    }

  ];

  constructor() {
    console.log('Servicio Listo para usarse');
  }

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHeroe(i: number): Heroe{
    return this.heroes[i];
  }

  buscarHeroe(nombre: string): number{
    return this.heroes.findIndex(p => p.nombre === nombre);
  }


}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
