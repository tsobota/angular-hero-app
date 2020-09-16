import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../Hero";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero : Hero;

  constructor(private messageService : MessageService) { }

  nameChange(hero : Hero) : void {
    console.log(hero.name);
    this.messageService.add("HeroDetailComponent: Changed hero name to: " + hero.name);
  }

  ngOnInit(): void {
  }

}
