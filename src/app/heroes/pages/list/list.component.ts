import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  heroes: Heroe[] = []

  constructor(private herosService: HeroesService) { }

  ngOnInit(): void {
    this.herosService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes
      });
  }

}
