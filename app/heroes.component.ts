import { Component } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';
import {Router} from '@angular/router';
import { OnInit } from '@angular/core';

const HEROES: Hero[];

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}


  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly()
      .then(data => this.heroes = data);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

}
