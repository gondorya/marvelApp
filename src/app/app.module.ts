import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './ui/header/header.component';
import { SingleHeroComponent } from './heros/single-hero/single-hero.component';
import { HeroListComponent } from './heros/hero-list/hero-list.component';
import { HeroDetailsComponent } from './heros/hero-details/hero-details.component';
import { HerosComponent } from './heros/heros.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleHeroComponent,
    HeroListComponent,
    HeroDetailsComponent,
    HerosComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

