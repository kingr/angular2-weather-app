import {Injectable}              from '@angular/core';
import {Headers, Http}           from  '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Hero} from './hero';


@Injectable()

export class HeroService {

  private heroesUrl = 'app/heroes';

  private handleError(error: any): Promise<any> {
    console.log('An error occured', error);
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http){};

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id))
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHeroesSlowly(id: number): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000))
      .then( () => this.getHeroes() )
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;

    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then( () => hero )
      .catch(this.handleError)
  }

}
