import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  selectedHero: string;
  imagePath: string;
  isSelected = false;

  @Input() filter: string;

  constructor() { }

  ngOnInit() {
  }

  onSelect(character) {
    this.selectedHero = character;
    this.imagePath = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    this.isSelected = true;
  }
}
