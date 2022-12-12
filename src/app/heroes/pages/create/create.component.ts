import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 5px
    }
    `
  ]
})
export class CreateComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  hero: Hero = {
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_img: ''
  };

  constructor(public dialog: MatDialog, private heroService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.heroService.getHeroById(id))
    ).subscribe(hero => this.hero = hero);
  }

  save() {

    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    if (this.hero.id) {
      //update
      this.heroService.updateHeroe(this.hero).subscribe((hero) => this.openSnackbar('Hero updated!'));
    }
    else {
      //create
      this.heroService.addHeroe(this.hero).subscribe((hero) => {
        this.router.navigate(['/heroes/edit', hero.id]);
        this.openSnackbar('Hero created!');
      })
    }

  }

  deleteHero() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: this.hero
    })

    dialog.afterClosed().subscribe((resp) => {
      if (resp) {
        this.heroService.deleteHero(this.hero.id!).subscribe((resp) => {
          this.router.navigate(['/heroes']);
        })
      }
    })

  }

  openSnackbar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 2500
    });
  }


}
