import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero={
    id: 1, 
    name: 'Spiderman',
    edad: 23,
    superpoder: 'telaraña',
    universo: 'planeta tierra'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
