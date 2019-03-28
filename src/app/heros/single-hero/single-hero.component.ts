import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: '[app-single-hero]',
  templateUrl: './single-hero.component.html',
  styleUrls: ['./single-hero.component.css']
})
export class SingleHeroComponent implements OnInit {
  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

}
