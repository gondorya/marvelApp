import { Component, Input } from '@angular/core';
import { Character, Thumbnail } from '../../models/character.model';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
  @Input() hero: Character;
  @Input() imagePath: Thumbnail;

  constructor() {}
}
