import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../Hero";
import {MessageService} from "../message.service";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  nameChange(hero: Hero): void {
    console.log(hero.name);
    this.messageService.add("HeroDetailComponent: Changed hero name to: " + hero.name);
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  ngOnInit(): void {
    this.getHero();
  }

  goBack() : void {
    this.location.back();
  }

}
