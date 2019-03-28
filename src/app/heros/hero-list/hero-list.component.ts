import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Character } from '../../models/character.model';
import { MarvelResponse } from '../../models/marvel.model';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers: [
    MarvelService
  ]
})

export class HeroListComponent implements OnInit, OnChanges {
    attribution: string;
    characters: Character[] = [];
    shown: number = 50;
    total: number = null;
    @Input() filter: string;
    @Output() selected = new EventEmitter<any>();

    constructor(private _marvelService : MarvelService) {}

    ngOnChanges(changes) {
      this.refreshList();
    }

    async ngOnInit() {
      await this.refreshList();
    }

    async refreshList() {
      const response: MarvelResponse<Character> = await this._marvelService.getCharacters(this.shown, this.filter);
      this.characters = response.data.results;
      this.total = response.data.total;
      this.attribution = response.attributionHTML;
    }

    onClick(selected) {
      this.selected.emit(selected);
    }
}
