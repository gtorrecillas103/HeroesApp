import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { CreateComponent } from './pages/create/create.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImagePipe } from './pipes/image.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    CreateComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent,
    HeroCardComponent,
    ImagePipe,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ]
})
export class HeroesModule { }
