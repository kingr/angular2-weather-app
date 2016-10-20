import { Component } from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero';
import { HeroService } from './hero.service';

import { OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(data => this.heroes = data);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

}
