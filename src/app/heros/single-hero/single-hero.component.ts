import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
// tslint:disable-next-line: component-selector
  selector: '[app-single-hero]',
  templateUrl: './single-hero.component.html',
  styleUrls: ['./single-hero.component.css']
})
export class SingleHeroComponent {
  @Input() character: Character;

  constructor() {}
}
