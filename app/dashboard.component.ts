import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(data => this.heroes = data.slice(1,5))
  }

  gotoDetail(hero: Hero): void {
    console.log('go to detail!');
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
