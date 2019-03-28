import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent {
  selectedHero: string;
  imagePath: string;
  isSelected = false;

  @Input() filter: string;

  constructor() {}

  onSelect(character) {
    this.selectedHero = character;
    this.imagePath = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    this.isSelected = true;
  }
}
