import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [

  ]
})
export class ListComponent implements OnInit {

  heroes: Hero[] = []

  constructor(private herosService: HeroesService) { }

  ngOnInit(): void {
    this.herosService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes
      });
  }

}
