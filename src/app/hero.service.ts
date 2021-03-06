import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService : MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id : number) : Observable<Hero> {
    this.messageService.add('HeroService: fetched hero id= '+id);
    return of(HEROES.find(hero => hero.id === id));
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
