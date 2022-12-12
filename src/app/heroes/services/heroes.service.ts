import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hero } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`);
  }

  getSuggestions(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${term}&_limit=6$`);
  }

  addHeroe(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero)
  }

  updateHeroe(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero)
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`)
  }
}
