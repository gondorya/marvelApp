import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() heroName = new EventEmitter<string>();

  constructor() {}

  refreshResults(filter) {
    this.heroName.emit(filter);
  }
}
