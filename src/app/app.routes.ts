import { Routes } from '@angular/router';
import { GamesComponent } from './games/games';
import { AddGame } from './add-game/add-game';
import { UpdateGame } from './update-game/update-game';
import { SearchByClass } from './search-by-class/search-by-class';
import { SearchByName } from './search-by-name/search-by-name';

export const routes: Routes = [
  { path: "games", component: GamesComponent },
  { path: "add-game", component: AddGame },
  { path: "updategame/:id", component: UpdateGame },
  { path: "search-by-class", component: SearchByClass },
  { path: "search-by-name", component: SearchByName },
  { path: "", redirectTo: "games", pathMatch: "full" }
];
